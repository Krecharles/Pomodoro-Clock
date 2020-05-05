import React, { Component } from "react";
import Timer from "./Timer";
import { MyButton } from "./Components";

class MainPage extends Component {
  render() {
    return (
      <div className="flex flex-col h-screen bg-green-600 justify-center items-center">
        <Timer></Timer>
      </div>
    );
  }
}

export default MainPage;
