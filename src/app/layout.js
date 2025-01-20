import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Ignacio Emiliano Juarez Portfolio",
  description:
    "Ignacio Emiliano Juarez website where you can find all my projects and contact me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
