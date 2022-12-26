import React from "react";
import { StyledLinkedin } from "./linkedin.styles";

export const Linkedin = () => {
  return (
    <a
      href="https://www.linkedin.com/in/ignacio-emiliano-juarez/"
      target="_blank"
      rel="noreferrer"
    >
      <StyledLinkedin
        width={45}
        height={45}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000"
        strokeWidth={0}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3zm1.102 4.297a1.195 1.195 0 1 0 0-2.39 1.195 1.195 0 0 0 0 2.39zm1 7.516V6.234h-2v6.579h2zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084 1.438 0 2.219.953 2.219 2.766 0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234z"
          stroke="none"
        />
      </StyledLinkedin>
    </a>
  );
};
