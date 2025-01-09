"use client";
import React from "react";
import { BtnList } from "../../app/data";

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="flex items-center justify-between relative ">
      {BtnList.map((btn, index) => {
        const angle = (angleIncrement * Math.PI) / 180;
        const radius = "calc(20vw - 1rem)";
        const x = `calc(${radius} * Math.cos(${angle})`;
        const y = `calc(${radius} * Math.sin(${angle})`;
        return (
          <button
            key={index}
            // className="absolute"
            style={{
              transform: `translate(${x}, ${y})`,
            }}
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;
