import React from "react";

interface ButtonProps {
  text: string;
  color: string;
  bg: string;
}

const Button: React.FC<ButtonProps> = ({ text, color, bg }) => {
  return (
    <>
      <button className={`px-12 py-2 ${color} ${bg} rounded-lg `}>
        {text}
      </button>
    </>
  );
};

export default Button;
