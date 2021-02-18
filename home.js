import React from "react";
import React, { useState } from "react";
const Button = () => {
  const [num, setNum] = useState(0);
 
  const incNum = () => {
    setNum(num + 1);
    document.getElementById("num").style.color = "green";
  };
 
export default Button;
  const decNum = () => {​​​​​​​
    if (num > 0) {​​​​​​​
      setNum(num - 1);
    }​​​​​​​ else {​​​​​​​
      setNum(0);
    }​​​​​​​
    document.getElementById("num").style.color = "red";
  }​​​​​​​;
  return (
    <div className="main_div">
      <div className="center_div">
        <h1 id="num"> {​​​​​num}​​​​​</h1>
        <div className="btn_div">
          <button onClick={​​​​​incNum}​​​​​ class="inc">
            Increment
          </button>
          <button onClick={​​​​​decNum}​​​​​ class="dec">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}​​​​​;