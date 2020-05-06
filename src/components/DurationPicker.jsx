import React, { useState } from "react";

export const DurationPicker = ({ setTimerDuration }) => {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    e.preventDefault();

    if (newValue === "") setTimerDuration(25 * 60);
    const parsed = parseInt(newValue);
    if (isNaN(parsed) || parsed === 0) return;
    setTimerDuration(parsed * 60);
  };
  return (
    <input
      className="appearance-none placeholder-green-400 shadow bg-green-700 mx-8 w-40 py-3 rounded-md space-y-1 text-3xl text-green-400 focus:outline-none select-none text-center"
      placeholder="Custom"
      value={value}
      onChange={handleChange}
    ></input>
  );
};
