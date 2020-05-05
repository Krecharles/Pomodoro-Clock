import React, { Component } from "react";
import UIfx from "uifx";
import sound1 from "../assets/sound1.mp3";
import sound2 from "../assets/sound2.mp3";
import { MyButton } from "./Components";
import { Clock } from "./Clock";
import { formatTime } from "../formatter";

const s1 = new UIfx(sound1);
const s2 = new UIfx(sound2);

export class Timer extends Component {
  state = {
    duration: 25 * 60,
    seconds: 25 * 60,
    timerActive: false,
  };
  mouseActive = false;
  playedTimeStamps = [];

  componentDidMount() {
    console.log("Timer did mount");
    this.update();
    setInterval(this.update, 1000);
    this.resetTimer();
  }

  // returns "Creating", "Paused", "Finished", "Going"
  getTimerState = () => {
    let { duration, seconds, timerActive } = this.state;
    if (seconds === duration && !timerActive) return "Creating";
    if (seconds === 0) return "Finished";
    if (!timerActive) return "Paused";
    return "Going";
  };

  update = () => {
    if (this.state.timerActive && this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 });
    }
  };

  startTimer = () => {
    this.setState({ timerActive: true });
  };

  pauseTimer = () => {
    this.setState({ timerActive: false });
  };

  resetTimer = () => {
    this.setState({ timerActive: false, seconds: this.state.duration });
    document.title = "Pomodoro Clock";
    this.playedTimeStamps = [];
  };

  setTimerDuration = (duration) => {
    this.setState({ duration, seconds: duration, timerActive: false });
  };

  setMouseMove = (e) => {
    e.preventDefault();
    this.mouseActive = true;

    let timeout;
    (() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => (this.mouseActive = false), 5000);
    })();
  };

  handleSound = (seconds) => {
    if (
      [1, 2, 3].includes(seconds) &&
      !this.playedTimeStamps.includes(seconds)
    ) {
      this.playedTimeStamps.push(seconds);
      s1.play();
      console.log("Played Sound 1");
    }
    if (seconds === 0 && !this.playedTimeStamps.includes(0)) {
      this.playedTimeStamps.push(0);
      s2.play();
      console.log("Played Sound 2");
    }
  };

  render() {
    let { seconds, duration } = this.state;
    let timerState = this.getTimerState();

    document.title = "Pomodoro - " + formatTime(seconds);

    let progression = 1 - seconds / duration;
    let formattedTime = formatTime(seconds);

    this.handleSound(seconds);

    if (!this.mouseActive && timerState === "Going")
      document.getElementById("root").style.cursor = "none";
    else document.getElementById("root").style.cursor = "auto";

    return (
      <div className="w-full" onMouseMove={this.setMouseMove}>
        <div className="flex justify-center h-20 items-center">
          {["Creating", "Finished"].includes(timerState) && (
            <React.Fragment>
              <MyButton onClick={() => this.setTimerDuration(25 * 60)}>
                25:00
              </MyButton>
              <MyButton onClick={() => this.setTimerDuration(5 * 60)}>
                5:00
              </MyButton>
              {/* <MyButton>Custom</MyButton> */}
            </React.Fragment>
          )}
        </div>
        <div className="w-2/3 my-32 mx-auto">
          <div className="flex w-full justify-between items-end">
            <h1 className="big-text text-green-900">{formattedTime}</h1>
            <Clock></Clock>
          </div>
          <div className="w-full h-px bg-green-800"></div>
          <div className="w-full h-px bg-green-800"></div>
          <div
            className="h-2 bg-green-700"
            style={{ width: progression * 100 + "%" }}
          ></div>
        </div>

        <div className="mb-8 flex justify-center h-20 items-center">
          {["Creating"].includes(timerState) && (
            <MyButton
              onClick={() => {
                this.resetTimer();
                this.startTimer();
              }}
            >
              Start
            </MyButton>
          )}
          {timerState === "Going" && (
            <div
              className={
                "transition duration-1000 " +
                (this.mouseActive ? "" : "opacity-0 hover:opacity-100")
              }
            >
              <MyButton onClick={this.pauseTimer}>Pause</MyButton>
            </div>
          )}
          {timerState === "Paused" && (
            <div>
              <MyButton onClick={this.startTimer}>Continue</MyButton>
              <MyButton onClick={this.resetTimer}>Reset</MyButton>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Timer;
