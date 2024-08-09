import { useState } from "react";

const UseState = () => {
const [Count, setCount] = useState(0);

const increment = () => {
  setCount(Count + 1);
};

const decrement = () => {
  setCount(Count - 1);
}; 

  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={increment}>Increment </button>
      <button onClick={decrement}> Decremement  </button>
    </div>
  );
}

export default UseState
