import React, { Component } from "react";

//COMPONENTS
import Timer from "./Timer";
import FormInput from "./FormInput";
import Header from "./Header";

class TimerApp extends Component {
  constructor(props) {
    super(props);

    this.onChangeTime = this.onChangeTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);

    this.state = {
      title: "Your Timer",
      subtitle: "do not lose your time",
      inputLabel: "Enter your time",
      time: "",
      min: "00",
      sec: "00",
      isStarted: false,
      isStop: false,
      setInterval: false,
      strokeCountMin: 0,
      strokeCountSec: 0,
      minute: 60
    };
  }

  componentDidMount() {
    this.setState({
      strokeCountMin: parseInt(getComputedStyle(document.getElementById('min')).strokeDashoffset)
    })

    this.setState({
      strokeCountSec: parseInt(getComputedStyle(document.getElementById('sec')).strokeDashoffset)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.sec !== this.state.sec) {

      let timePxSec = parseInt(this.state.sec) * Math.abs(this.state.strokeCountSec / this.state.minute);
      document.getElementById('sec').style.strokeDashoffset = this.state.strokeCountSec + timePxSec;
    }

    if(prevState.min !== this.state.min) {
      
      let timePxMin = parseInt(this.state.min) * Math.abs(this.state.strokeCountMin / this.state.minute);
      document.getElementById('min').style.strokeDashoffset = this.state.strokeCountMin + timePxMin;
    }
  }

  onChangeTime(event) {
    const time = event.target.value;

    if (time.match(/^[0-5]{0,1}[0-9]{0,1}(\:[0-5]{0,1}[0-9]{0,1})?$/)) {
      let min = time.split(":")[0];
      let sec = time.split(":")[1] ? time.split(":")[1] : "";

      if (min.length < 2) {
        min = "0".concat(min);

        if (min.length <= 1) {
          min = "0".concat(min);
        }
      }

      if (sec.length < 2) {
        sec = "0".concat(sec);

        if (sec.length <= 1) {
          sec = "0".concat(sec);
        }
      }

      this.setState({
        time: time,
        min: min,
        sec: sec
      });
    }
  }

  intervalTimer() {

    if (Number(this.state.sec) > 0 || Number(this.state.min) > 0) {

      let setTimer = setInterval(() => {

        if (this.state.isStarted && Number(this.state.sec) > 0) {

          this.setState({
            setInterval: true
          })

          let sec = "" + (Number(this.state.sec) - 1);

          if (sec.length < 2) {
            this.setState({
              sec: "0".concat(sec)
            });
          } else {
            this.setState({
              sec: sec
            });
          }
        } else if (this.state.isStarted && Number(this.state.min) > 0) {

          let min = "" + (Number(this.state.min) - 1);

          if (min.length < 2) {
            this.setState({
              min: "0".concat(min),
              sec: "59"
            });
          } else {
            this.setState({
              min: min,
              sec: "59"
            });
          }

        } else if (!this.state.isStarted) {

          clearInterval(setTimer);

        } else {
          this.setState({
            isStarted: false,
            isStop: false,
            setInterval: false
          });
          clearInterval(setTimer);
        }
      }, 1000);
    }
  }

  startTimer() {

    this.setState({
      time: "",
      isStarted: true,
      isStop: true
    });

    this.intervalTimer()
  }

  stopTimer() {

    this.setState({
      isStarted: false,
      isStop: true
    })

    this.intervalTimer()
  }

  resetTimer() {

    this.setState({
      time: "",
      min: "00",
      sec: "00",
      isStarted: false,
      isStop: false,
      isReset: false
    });
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <div className="container">
          <div className="target-box">
            <div className="line-box">
              <Timer min={this.state.min} sec={this.state.sec} />
            </div>
            <FormInput
              onChangeTime={this.onChangeTime}
              startTimer={this.startTimer}
              stopTimer={this.stopTimer}
              isStop={this.state.isStop}
              time={this.state.time}
              isStarted={this.state.isStarted}
              resetTimer={this.resetTimer}
              inputLabel={this.state.inputLabel}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TimerApp;
