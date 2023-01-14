"use client";

import React from "react";
import { PlusCircle } from "react-feather";

const NewProjectButton = ({ handleClick }: any) => {
  return (
    <button
      className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md space-x-2"
      onClick={handleClick}
    >
      <PlusCircle /> <span>New Project</span>
    </button>
  );
};

export default NewProjectButton;
