import React, { Component } from "react";
import UIfx from "uifx";
import sound1 from "../assets/sound1.mp3";
import sound2 from "../assets/sound2.mp3";
import { MyButton } from "./Components";
import { formatTime } from "../formatter";
import { TimeDisplayer } from "./TimeDisplayer";
import { MouseActiveContext } from "./ActiveHandler";

const s1 = new UIfx(sound1);
const s2 = new UIfx(sound2);

export class Timer extends Component {
  state = {
    duration: 25 * 60,
    seconds: 25 * 60,
    timerActive: false,
  };

  static contextType = MouseActiveContext;

  componentDidMount() {
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
      if ([1, 2, 3].includes(this.state.seconds)) s1.play(); // 1s delay
      if (this.state.seconds === 0) s2.play();
    }
  };

  startTimer = () => this.setState({ timerActive: true });

  pauseTimer = () => this.setState({ timerActive: false });

  resetTimer = () =>
    this.setState({ timerActive: false, seconds: this.state.duration });

  setTimerDuration = (duration) =>
    this.setState({ duration, seconds: duration, timerActive: false });

  render() {
    let { seconds, duration } = this.state;
    let timerState = this.getTimerState();
    document.title = "Pomodoro - " + formatTime(seconds);

    if (!this.context && timerState === "Going")
      document.getElementById("root").style.cursor = "none";
    else document.getElementById("root").style.cursor = "auto";

    return (
      <div className="w-full">
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

        <TimeDisplayer passedSeconds={seconds} totalSeconds={duration} />

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
                (this.context ? "" : "opacity-0 hover:opacity-100")
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
