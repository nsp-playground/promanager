import * as React from "react";

interface InputProps {
  label: string;
  type?: "text" | "password" | "email";
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FunctionComponent<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  ...props
}) => (
  <label className="block font-bold text-gray-700 mb-2">
    {label}
    <input
      className="form-input py-2 px-3 w-full leading-tight rounded-lg shadow-md focus:outline-none focus:shadow-outline"
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
  </label>
);

export default Input;
