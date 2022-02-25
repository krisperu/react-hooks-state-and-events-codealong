import React, { useState } from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(false)
  function hancleClick() {
    setIsOn(isOn = !isOn)
  }

  const color = isOn ? "red" : "white"

  return <button style={{ background: color }} onClick={hancleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
