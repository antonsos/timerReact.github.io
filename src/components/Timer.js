import React from "react";

const Timer = ({ min, sec }) => {
  return (
    <div className="timer-box">
      <div className="countdown">
        <div className="countdown__number-box">
          <span className="countdown__time-number">{min}</span>
          {parseInt(min) === 1 ? <span className="countdown__time-text">minute</span> : <span className="countdown__time-text">minutes</span>}
        </div>
        <svg className="countdown__svg">
          <circle className="countdown__animation-static" r="54" cx="60" cy="60" />
          <circle id="min" className="countdown__animation-move" r="54" cx="60" cy="60" />
        </svg>
      </div>
      <div className="countdown">
        <div className="countdown__number-box">
          <span className="countdown__time-number">{sec}</span>
          {parseInt(sec) === 1 ? <span className="countdown__time-text">second</span> : <span className="countdown__time-text">seconds</span>}
        </div>
        <svg className="countdown__svg">
          <circle className="countdown__animation-static" r="54" cx="60" cy="60" />
          <circle id="sec" className="countdown__animation-move" r="54" cx="60" cy="60" />
        </svg>
      </div>
    </div>
  );
};

export default Timer;
