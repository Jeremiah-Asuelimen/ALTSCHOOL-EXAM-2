import React from 'react';
import counterHooks from '../count/usecount';
import { link } from 'react-router-dom'
import '../styles/count.css'


function Count() {
  const { counter, increment, decrement, reset, setNewValue } = counterHooks();
  return (
    <div id='count-box'>
      <h1>Count: {counter}</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const countValue = e.target.elements.valueInput.value;
        setNewValue(Number(countValue));
      }}>
        <input id='input' type="number" name="valueInput" />
        <button id='btn' type="submit">Set Value</button>
      </form>
      <div>
      <button id='btn' onClick={increment}>Increment</button>
      <button id='btn' onClick={decrement}>Decrement</button>
      <button id='btn' onClick={reset}>Reset Value</button>
      </div>
    </div>
  );
}
export default Count;