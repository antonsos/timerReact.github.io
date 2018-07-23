import React from "react";

const FormInput = ({
  time,
  onChangeTime,
  startTimer,
  isStarted,
  stopTimer,
  isStop,
  resetTimer,
  inputLabel
}) => {
  const submitForm = e => {
    e.preventDefault();

    if (!isStarted) {
      startTimer();
    } else if (isStarted) {
      stopTimer();
    }

    isStop = true;
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <div>
        <div className="form__input-label">
          <label htmlFor="time">{inputLabel}</label>
        </div>
        <input
          type="text"
          className="form__input"
          id="time"
          value={time}
          onChange={onChangeTime}
          placeholder="min:sec"
          autoFocus
          required={!isStop}
          disabled={isStop}
        />
      </div>
      <button className="big-button" type="submit">
        {!isStarted ? "Start" : "Stop"}
      </button>
      <button className="big-button" disabled={!isStop} onClick={resetTimer}>
        Reset
      </button>
    </form>
  );
};

export default FormInput;
