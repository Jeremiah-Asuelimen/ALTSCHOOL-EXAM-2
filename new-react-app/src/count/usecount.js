import { UseState } from "react";


function counterHooks(initialValue = 0) {
  const [counter, setCounter] = UseState(initialValue);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(initialValue);
  const setNewValue = (value) => setCounter(value);
  return {
    counter,
    increment,
    decrement,
    reset,
    setNewValue,
  };
}
export default counterHooks;