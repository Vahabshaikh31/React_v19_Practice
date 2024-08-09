import { useRef } from "react";

const Ex = () => {
  //   const username = document.getElementById("username");
  //   const password = document.getElementById("password");.l;

  // using useRaf

  const username = useRef(null);
  const password = useRef(null);

  const formsubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <>
      <form onSubmit={formsubmit}>
        <input type="text" id="username" ref={username} />
        <br />
        <input type="text" id="password"  ref={password}/>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Ex;
