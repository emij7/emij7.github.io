"use client";
import React from "react";
import { BtnList } from "../../app/data";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between relative">
      {BtnList.map((btn, index) => (
        <button key={index}>{btn.label}</button>
      ))}
    </div>
  );
};

export default Navigation;
