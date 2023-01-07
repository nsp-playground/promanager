import * as React from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  children,
  onClick,
  ...props
}) => (
  <button
    className={`px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;
