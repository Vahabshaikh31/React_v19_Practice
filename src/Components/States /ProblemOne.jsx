import { useState } from "react";

const ProblemOne = () => {
    const users = [
      {
        name: "vahab",
        age: 20,
        gender: "male",
      },
      {
        name: "vahab",
        age: 20,
        gender: "male",
      },
      {
        name: "vahab",
        age: 20,
        gender: "male",
      },
      {
        name: "vahab",
        age: 20,
        gender: "male",
      },
    ];

    const [state, setstate] = useState(users);

  return (
    <div>
        <div></div>
      {
        state.map((user , index)=>{
            return (
              <div key={index}> 
                <h1>{user.name}</h1>
                <h2>{user.age}</h2>
                <h3>{user.gender}</h3>
              </div>
            );

        })

      }
      <h1>wkj dw dw</h1>
    </div>
  )
}

export default ProblemOne
