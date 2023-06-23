import { useState } from "react";
import Counter from "./Counter";
import ToggleSwitch from "./ToggleSwitch";
import TodoList from "./TodoList";
function InputField() {
  const [text, setText] = useState("");
  function handleKey(e) {
    if (e.key === "Enter") {
      setText(e.target.value);
    }
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onKeyUp={handleKey}
      ></input>
      <Counter text={text} />
      <ToggleSwitch />
      <TodoList />
    </>
  );
}

export default InputField;
