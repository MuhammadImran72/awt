import React, { useEffect, useState } from "react";

const CounterBox = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame;
    const startCount = () => {
      let startTime;
      const duration = 4000;
      const endCount = parseInt(props.value, 10);

      function updateCount(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        if (progress < duration) {
          const nextCount = Math.ceil((progress / duration) * endCount);
          setCount(nextCount);
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(endCount);
        }
      }

      animationFrame = requestAnimationFrame(updateCount);
    };

    startCount();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [props.value]);

  return (
    <div className={`four col-md-3 ${props.colored ? "colored" : ""}`}>
      <div className="threeholder">
        <div class="threeone">
          <div class="circlepic"></div>
          <div class="circleborder">
            <i className={`fa ${props.icon}`}></i>
          </div>
          <div className="ciclre-info">
            <h3 className="counter">{count}</h3>
            <p>{props.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterBox;
