export const formatTime = (seconds) => {
  let mins = Math.floor(seconds / 60) + "";
  if (mins.length === 1) mins = "0" + mins;
  let secs = (seconds % 60) + "";
  if (secs.length === 1) secs = "0" + secs;
  return mins + ":" + secs;
};
