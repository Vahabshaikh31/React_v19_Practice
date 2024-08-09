import { useState } from "react";

const Challenege = () => {
  const [count, setcount] = useState(0);
  const [num, setnum] = useState(1);

  const incrementfn = () => {
    if (count >= 100 || num >=100) {
        setcount(100);
    }
    else{
        setcount(num+count);
    }
  };

  const decrimentfn = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  const reset = () => {
    setcount(0);
  };
  const value = (e) => {
    setnum(parseInt(e.target.value) || 0);
  };

  return (
    <>
      <h1>count: {count}</h1>
      <h3>
        STeps
        <input type="text" value={num} onChange={value} />
      </h3>

      <button onClick={incrementfn}>increment</button>
      <button onClick={decrimentfn}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Challenege;
