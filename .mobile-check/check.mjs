import { writeFile } from "node:fs/promises";

let id = 0;

async function check(width) {
  const target = await (await fetch("http://127.0.0.1:9231/json/new?http://127.0.0.1:4173/", { method: "PUT" })).json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  const pending = new Map();
  const exceptions = [];
  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });
  ws.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      message.error ? reject(new Error(message.error.message)) : resolve(message.result);
    }
    if (message.method === "Runtime.exceptionThrown") exceptions.push(message.params.exceptionDetails.text);
  });
  const send = (method, params = {}) => {
    const messageId = ++id;
    ws.send(JSON.stringify({ id: messageId, method, params }));
    return new Promise((resolve, reject) => pending.set(messageId, { resolve, reject }));
  };
  await send("Runtime.enable");
  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", { width, height: 780, deviceScaleFactor: 1, mobile: true });
  await send("Page.navigate", { url: "http://127.0.0.1:4173/" });
  await new Promise((resolve) => setTimeout(resolve, 3500));
  await send("Runtime.evaluate", { expression: "document.querySelector('.mobile-nav-toggle').click()" });
  await new Promise((resolve) => setTimeout(resolve, 450));
  const state = await send("Runtime.evaluate", {
    expression: "JSON.stringify({open:document.body.classList.contains('nav-open'),mainVisibility:getComputedStyle(document.querySelector('main')).visibility,menuOpacity:getComputedStyle(document.querySelector('.mobile-navigation')).opacity,menuZ:getComputedStyle(document.querySelector('.mobile-navigation')).zIndex,scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth})",
    returnByValue: true,
  });
  const image = await send("Page.captureScreenshot", { format: "png", fromSurface: true });
  await writeFile(`.mobile-check/menu-${width}.png`, Buffer.from(image.data, "base64"));
  ws.close();
  return { width, ...JSON.parse(state.result.value), exceptions };
}

console.log(JSON.stringify([await check(320), await check(375)], null, 2));
