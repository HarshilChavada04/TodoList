import { useState } from "react";

function ToggleSwitch() {
  const [btnText, setBtnText] = useState("On");
  function handleClick() {
    setBtnText(btnText === "On" ? "Off" : "On");
  }
  return <button onClick={handleClick}>{btnText}</button>;
}
export default ToggleSwitch;
