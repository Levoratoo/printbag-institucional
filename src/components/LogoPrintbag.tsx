import { SVGProps } from "react";

interface LogoPrintbagProps extends SVGProps<SVGSVGElement> {
  variant?: "default" | "white";
}

export function LogoPrintbag({ variant = "default", className, ...props }: LogoPrintbagProps) {
  // Blue for PRINTBAG text, Green for leaf and "embalagens"
  const blueColor = variant === "white" ? "#ffffff" : "#1e4a8c"; // Secondary blue
  const greenColor = variant === "white" ? "#ffffff" : "#0fa968"; // Primary green
  
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Leaf Icon */}
      <path
        d="M8 30c0-12 8-22 20-24-2 8-1 16 3 22 4 6 10 10 17 12-4 8-12 14-22 14C14 54 8 42 8 30z"
        fill={greenColor}
      />
      <path
        d="M18 28c2-4 5-7 9-9"
        stroke={variant === "white" ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.6)"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* PRINTBAG Text */}
      <text
        x="52"
        y="32"
        fontFamily="Sora, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill={blueColor}
      >
        PRINTBAG
      </text>
      
      {/* embalagens Text */}
      <text
        x="52"
        y="48"
        fontFamily="Sora, sans-serif"
        fontSize="10"
        fontWeight="500"
        letterSpacing="3"
        fill={greenColor}
      >
        EMBALAGENS
      </text>
    </svg>
  );
}
