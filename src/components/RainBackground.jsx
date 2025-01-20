"use client";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const createRain = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 20 + 1}s`,
});

const RainBackground = () => {
  const [rain, setRain] = useState([]);

  useEffect(() => {
    const addRandomRain = () => {
      const newDrops = Array.from({ length: 45 }).map(
        createRain
      );
      setRain((prevRain) => [...newDrops]);
    };

    const interval = setInterval(addRandomRain, 300);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden">
      {rain.map((drop) => (
        <div
          key={drop.id}
          className="absolute h-4 bg-slate-500"
          style={{
            width: "1px",
            top: drop.top,
            left: drop.left,
            transform: `rotate(30deg)`,
            animation: `rainMove ${drop.animationDuration}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default RainBackground;
