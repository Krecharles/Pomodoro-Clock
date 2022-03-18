import React from "react";
import { formatTimeMinSec } from "../formatter";
import { Clock } from "./Clock";

export const TimeDisplayer = ({ passedSeconds, totalSeconds }) => {
  return (
    <div className="w-2/3 my-16 lg:my-24 mx-auto">
      <div className="flex w-full justify-center md:justify-between items-end">
        <h1 className="big-text text-gray-500">
          {formatTimeMinSec(passedSeconds)}
        </h1>
        <Clock className="hidden md:block"></Clock>
      </div>
      <div className="w-full h-px bg-gray-700"></div>
      <div className="w-full h-px bg-gray-700"></div>
      <div
        className="h-2 bg-gray-800"
        style={{ width: (1 - passedSeconds / totalSeconds) * 100 + "%" }}
      ></div>
    </div>
  );
};
