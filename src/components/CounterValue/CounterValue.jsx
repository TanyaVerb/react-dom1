import React from "react";

const CounterValue = ({ count }) => {
  return (
    <div>
      Counter {count}
      {/* <div style={{ color: count % 2 === 0 ? "white" : "red" }}>
        {count % 2 === 0 ? "Белое" : "Красное"}
      </div> */}
    </div>
  );
};

export default CounterValue;
