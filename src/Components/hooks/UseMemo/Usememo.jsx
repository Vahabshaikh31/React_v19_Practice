import { memo, useMemo, useState } from "react";

// Expensive calculation component
const ExpensiveCalculation = memo(() => {
  const sum = () => {
    var j;
    for (let i = 0; i < 1000000000; i++) {
      j = i + 1;
    } // Simulate a time-consuming calculation
    return j;
  };
  const total = sum();

  return <p>{total}</p>;
});

const Usememo = () => {
  const [count, setCount] = useState(0);

  const cal = useMemo(() => <ExpensiveCalculation />, [count]);

  return (
    <>
      <h1>useMemo Demo</h1>

      <div>
        {cal}
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
    </>
  );
};

export default Usememo;
