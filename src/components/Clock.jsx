import React, { useState, useEffect } from "react";
import { formatTime } from "../formatter";

export const Clock = ({ className }) => {
  const [time, setTime] = useState();
  let update = () => {
    let d = new Date();
    setTime(formatTime(d.getHours() * 60 + d.getMinutes()));
  };
  useEffect(() => {
    update();
    setInterval(update, 1000);
  }, []);
  return <h1 className={"text-6xl text-green-700 " + className}>{time}</h1>;
};
