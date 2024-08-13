import React from "react";

interface ButtonProps {
  text: string;
  className?: string; // Optional custom className
}

const Button: React.FC<ButtonProps> = ({ text, className = "" }) => {
  return (
    <button
      className={`bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
