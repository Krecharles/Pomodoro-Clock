import React from "react";

export const MyButton = (props) => (
  <button
    className="bg-green-700 mx-8 w-40 py-3 shadow-md rounded-md border-b-2 border-green-400 hover:border-green-500 space-y-1 text-3xl text-green-400 hover:text-green-500 focus:outline-none select-none text-center transition duration-300"
    {...props}
  >
    {props.children}
  </button>
);
