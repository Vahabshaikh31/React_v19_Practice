import { useState } from "react"
import './styule.css'

const Toggle = () => {

    
    const [Toggle, setToggle] = useState(true);

    const toggleHandler = () => {
        setToggle(!Toggle);
    }

    return (
      <div
        className={`${Toggle ? "#18b607" : ""} buttonsclass`}
        onClick={toggleHandler}
      >
        <div className={`${Toggle ? "on" : "off"} btns`}>
          {Toggle ? "on " : "of"}
        </div>
      </div>
    );
}

export default Toggle
