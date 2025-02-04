"use client";
import React from "react";
import { BtnList } from "../../app/data";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const Navigation = () => {
  const size = useScreenSize();
  const angleIncrement = 360 / BtnList.length;

  const isLarge = size > 1024;
  const isMedium = size > 768 && size <= 1024;
  const isSmall = size <= 480;

  return (
    <div
      className={
        "w-full fixed h-screen flex justify-center" +
        (isSmall ? " items-end pb-10" : " items-center")
      }
    >
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex items-center justify-center relative animate-spin-slow hover:pause group"
            >
              {BtnList.map((btn, index) => {
                const angle =
                  (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(22vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                const x = `calc(${radius} * ${Math.cos(
                  angle
                )})`;
                const y = `calc(${radius} * ${Math.sin(
                  angle
                )})`;
                return (
                  <NavButton
                    key={btn.label}
                    x={x}
                    y={y}
                    {...btn}
                  />
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex justify-between"
            >
              {BtnList.map((btn, index) => {
                return (
                  <NavButton
                    key={btn.label}
                    x={0}
                    y={0}
                    {...btn}
                  />
                );
              })}
            </motion.div>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
