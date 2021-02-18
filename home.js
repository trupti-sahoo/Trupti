import React from "react";
import React, { useState } from "react";
const Button = () => {
  const [num, setNum] = useState(0);
 
  const incNum = () => {
    setNum(num + 1);
    document.getElementById("num").style.color = "green";
  };