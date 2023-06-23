import { useState } from "react";
function Counter(props) {
  const [value, setValue] = useState(0);
  function handleClick(val) {
    setValue(value + val);
  }
  return (
    <>
      <h1>
        {props.text} Value: {value}
      </h1>
      <button onClick={() => handleClick(1)}>Increment</button>
      <button onClick={() => handleClick(-1)}>Decrement</button>
    </>
  );
}
export default Counter;
