import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomeButton = () => {
  return (
    <Link
      href={"/"}
      target="_self"
      className="text-foreground rounded-full group flex items-center justify-center custom-bg fixed top-4 left-4 w-fit self-start z-50"
      aria-label={"home"}
      name={"home"}
    >
      <span
        className=" relative w-12 h-12 p-3 hover:text-accent "
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
        }}
      >
        <Home className="w-full h-auto" strokeWidth={1.5} />
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
        <span
          className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
          bg-background text-foreground text-md rounded-md shadow-lg whitespace-nowrap
        "
        >
          Home
        </span>
      </span>
    </Link>
  );
};

export default HomeButton;
