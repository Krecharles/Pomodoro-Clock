import React from "react";
import { formatTime } from "../formatter";
import { Clock } from "./Clock";

export const TimeDisplayer = ({ passedSeconds, totalSeconds }) => {
  return (
    <div className="w-2/3 my-32 mx-auto">
      <div className="flex w-full justify-between items-end">
        <h1 className="big-text text-green-900">{formatTime(passedSeconds)}</h1>
        <Clock></Clock>
      </div>
      <div className="w-full h-px bg-green-800"></div>
      <div className="w-full h-px bg-green-800"></div>
      <div
        className="h-2 bg-green-700"
        style={{ width: (1 - passedSeconds / totalSeconds) * 100 + "%" }}
      ></div>
    </div>
  );
};
