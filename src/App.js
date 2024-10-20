import { useState } from "react";
import { Button } from "./components/Button/Button";
import CounterValue from "./components/CounterValue/CounterValue";
import "./globalStyle.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Button onClick={handleClick} />

      <CounterValue count={count} />

      <div style={{ color: count % 2 === 0 ? "white" : "red" }}>
        {count % 2 === 0 ? "Белое" : "Красное"}
      </div>
    </div>
  );
}

export default App;
