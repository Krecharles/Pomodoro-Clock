import React from "react";

export const MyButton = (props) => (
  <button
    className="bg-gray-800 mx-8 my-4 w-40 py-3 shadow-md rounded-md border-b-2 border-gray-700 hover:border-gray-600 space-y-1 text-3xl text-gray-500 hover:text-gray-400 focus:outline-none select-none text-center transition duration-300"
    {...props}
  >
    {props.children}
  </button>
);
