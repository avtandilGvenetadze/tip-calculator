import { useState } from "react";
import "./answer.css";

function Answer(props) {
  console.log(props.reset);
  return (
    <div className="answer-wraper">
      <div className="tip-wrapper">
        <p className="tipAndTotal">
          Tip Amount <br />
          <span className="person-span">/ person</span>
        </p>
        <p className="tip-amount">{"$" + props.tip.toFixed(2)}</p>
      </div>
      <div className="total-wrapper">
        <p className="tipAndTotal">
          Total <br />
          <span className="person-span">/ person</span>
        </p>
        <p className="total-amount">{"$" + props.total.toFixed(2)}</p>
      </div>
      <button
        className="reset-button"
        onClick={() => props.setReset(!props.reset)}
      >
        RESET
      </button>
    </div>
  );
}

export default Answer;
