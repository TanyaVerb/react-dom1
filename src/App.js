import { useState } from "react";
import { Button } from "./components/Button/Button";
import CounterValue from "./components/CounterValue/CounterValue";
import "./globalStyle.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const isEven = count % 2 === 0;

  return (
    <div className="App">
      <Button onClick={handleClick} />

      <CounterValue count={count} />

      <div style={{ color: isEven ? "white" : "red" }}>
        {isEven ? "Белое" : "Красное"}
      </div>
    </div>
  );
}

export default App;
