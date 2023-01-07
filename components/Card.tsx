import * as React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FunctionComponent<CardProps> = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    {title && <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>}
    {children}
  </div>
);

export default Card;
