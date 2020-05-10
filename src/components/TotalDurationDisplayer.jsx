import React from "react";
import { getTodayTotalTime } from "../persitance";

export const TotalDurationDisplayer = () => {
  const totalTime = getTodayTotalTime();
  let hours = Math.floor(totalTime / 3600) + "";
  let minutes = (Math.floor(totalTime / 60) % 60) + "";
  return (
    <div className="absolute bottom-0 w-full">
      <h4 className="text-green-800 text-center mb-8">
        You have been productive for {hours} hours and {minutes} minutes today.
      </h4>
    </div>
  );
};
