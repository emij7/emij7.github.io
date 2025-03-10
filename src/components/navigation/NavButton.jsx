import {
  Code,
  Github,
  Home,
  Linkedin,
  Mail,
  Palette,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return (
        <Home className="w-full h-auto" strokeWidth={1.5} />
      );
    case "about":
      return (
        <User className="w-full h-auto" strokeWidth={1.5} />
      );
    case "projects":
      return (
        <Code className="w-full h-auto" strokeWidth={1.5} />
      );
    case "contact":
      return (
        <Mail className="w-full h-auto" strokeWidth={1.5} />
      );
    case "github":
      return (
        <Github
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      );
    case "linkedin":
      return (
        <Linkedin
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      );

    default:
      return (
        <Home className="w-full h-auto" strokeWidth={1.5} />
      );
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

//Forma de declarar un componente como Link que es de next.js, con motion
const NavLink = motion(Link);

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{
              transform: `translate(${x}, ${y})`,
            }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full group flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
            >
              <span
                className=" relative w-12 h-12 p-3 animate-spin-slow-reverse hover:text-accent group-hover:pause "
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "50%",
                }}
              >
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className="absolute hidden peer-hover:block px-2 py-1 right-full mx-2 top-1/2 -translate-y-1/2
        bg-background text-foreground text-md rounded-md shadow-lg whitespace-nowrap
      "
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="cursor-pointer z-50 mx-2">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full group flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
            >
              <span
                className=" relative w-12 h-12 p-3  hover:text-accent "
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "50%",
                }}
              >
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className="absolute hidden peer-hover:block px-2 py-1 mx-2 -translate-y-1/2 top-auto xs:top-1/2 bottom-full xs:bottom-0
                  -right-4 xs:right-full 
       bg-background text-foreground text-md rounded-md shadow-lg whitespace-nowrap
     "
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
