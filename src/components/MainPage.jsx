import React, { Component } from "react";
import Timer from "./Timer";
import { ActiveHandler } from "./ActiveHandler";

class MainPage extends Component {
  render() {
    return (
      <div className="flex flex-col h-screen bg-green-600 justify-center items-center">
        <ActiveHandler>
          <Timer></Timer>
        </ActiveHandler>
      </div>
    );
  }
}

export default MainPage;
