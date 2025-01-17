"use client";
import React from "react";
import { BtnList } from "../../app/data";
import NavButton from "./NavButton";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  return (
    <div class="w-full fixed h-screen flex items-center justify-center">
      <div className="flex items-center justify-center relative animate-spin-slow hover:pause group">
        {BtnList.map((btn, index) => {
          const angle =
            (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(22vw - 1rem)";
          const x = `calc(${radius} * ${Math.cos(angle)})`;
          const y = `calc(${radius} * ${Math.sin(angle)})`;
          console.log(index, angle, radius, x, y);
          return (
            <NavButton
              key={btn.label}
              x={x}
              y={y}
              {...btn}
            />
            // <button
            //   key={index}
            //   className="absolute"
            //   style={{
            //     transform: `translate(${x}, ${y})`,
            //   }}
            // >
            //   {btn.label}
            // </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
