const getTodayToken = () => {
  let d = new Date();
  return d.toDateString();
};

export const getSession = (date) => {
  const token = date.toDateString();
  const ses = JSON.parse(localStorage.getItem(token));
  if (ses === null) return [];
  return ses;
};

export const addSession = (duration) => {
  const token = getTodayToken();
  var sessions = JSON.parse(localStorage.getItem(token));
  if (sessions === null) sessions = [];
  sessions.push(duration);
  localStorage.setItem(token, JSON.stringify(sessions));
  console.log("storing", sessions);
};

export const getTodaySessions = () => {
  let d = new Date();
  return getSession(d);
};

export const getTodayTotalTime = () =>
  getTodaySessions().reduce((a, b) => a + b, 0);
