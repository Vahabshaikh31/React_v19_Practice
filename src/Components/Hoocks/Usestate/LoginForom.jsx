import { useState } from "react";

const LoginForm = () => {
  const [userData, setUserData] = useState({
    uname: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dataSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };

  return (
    <>
      <form onSubmit={dataSubmit}>
        <label htmlFor="uname">Username</label>
        <input
          name="uname"
          value={userData.uname}
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LoginForm;
