import React from "react";

const CounterBox = (props) => {
  return (
    <div className="threeholder">
      <div class="threeone">
        <div class="circleborder">{props.icon}</div>
        <div className="ciclre-info">
          <h3 className="counter">{props.value}</h3>
          <p>{props.label}</p>
        </div>
      </div>
    </div>
  );
};

export default CounterBox;
