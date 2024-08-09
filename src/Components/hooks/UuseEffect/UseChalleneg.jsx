import { useEffect, useState } from "react";

const UseChalleneg = () => {
  const [count, setcount] = useState(0);
  const [text, settext] = useState("");
  const [timer, settimer] = useState(600384);

  useEffect(() => {
    document.title = count;
    console.log(count);
    console.log(text);
  }, [count, text]);

  useEffect(() => {
    const inteval = setInterval(() => {
      settimer(timer + 1);
    }, 1000);
    return () => clearInterval(inteval);
  }, [timer]);

  return (
    <>
      <h1> counting : {timer}</h1>
      <h1>Use Effect Challenge</h1>
      <h3>{count}</h3>
      <button onClick={() => setcount(count + 1)}>click me </button>
      <h4>{text} </h4>
      <input
        type="text"
        name="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
    </>
  );
};

export default UseChalleneg;
