import React from "react"

interface IconProps {
    className?: string,
    height?: number | string,
}

function Icon (props:IconProps) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M541 113.7"
      style={{
        fill: "red",
        stroke: "#000",
        strokeWidth: 0.25,
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M28.77 334.86V179.54l162.48 94.95-137.67 75.1c-11.18 6.09-24.81-2-24.81-14.73z"
      style={{
        fill: "#92c4fc",
      }}
    />
    <path
      d="m363.18 182.03-35.69-20.9V67.29h-68.93v53.47L201 87.06 29.13 179.92l162.17 94.97.33-.18 146.72 85.13c10.57 6.13 23.82-1.49 23.82-13.72V182.58l1.01-.55z"
      style={{
        fill: "#2663ea",
      }}
    />
  </svg>
  )
}

export default Icon
