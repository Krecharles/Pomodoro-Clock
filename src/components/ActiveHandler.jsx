import React, { useState } from "react";

export const MouseActiveContext = React.createContext(true);

export const ActiveHandler = ({ children }) => {
  const [mouseActive, setMouseActive] = useState(true);

  let setMouseMove = (e) => {
    e.preventDefault();
    setMouseActive(true);

    let timeout;
    (() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setMouseActive(false), 5000);
    })();
  };

  return (
    <div className="" onMouseMove={setMouseMove}>
      <MouseActiveContext.Provider value={mouseActive}>
        {children}
      </MouseActiveContext.Provider>
    </div>
  );
};
