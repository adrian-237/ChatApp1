import React from "react";

export default function CloseModalSVG({ className = "" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className}`}
    >
      <path
        d="M12.9959 1.00488L1.00586 12.9924"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 13L1 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
