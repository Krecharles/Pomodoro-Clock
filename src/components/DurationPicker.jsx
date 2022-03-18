import React, { useState } from "react";

export const DurationPicker = ({ setTimerDuration }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    // e.preventDefault();
    const newValue = e.target.value;

    if (newValue === "") {
      setTimerDuration(25 * 60);
      setValue(newValue);
      return;
    }
    if (isNaN(newValue) || newValue === 0) return;
    setValue(newValue);
    const parsed = parseInt(newValue);
    setTimerDuration(parsed * 60);
  };
  return (
    <input
      className="my-4 placeholder-gray-500 shadow bg-gray-800 mx-8 w-40 py-3 rounded-md text-3xl text-gray-400 focus:outline-none text-center"
      placeholder="Custom"
      value={value}
      onChange={handleChange}
    ></input>
  );
};
