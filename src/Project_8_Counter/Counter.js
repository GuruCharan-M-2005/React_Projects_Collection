import React, { useState } from 'react';
import './Counter.css'; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementto10 =()=>{
    setCount(count+10);
  }
  const decrementto10 =()=>{
    setCount(count-10);
  }

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <button className="counter-button" onClick={incrementto10}>+10</button>
      <button className="counter-button" onClick={increment}>Increment</button>
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={decrementto10}>-10</button> <br></br> <br></br>
      <span className="counter-value">{count}</span>
    </div>
  );
};

export default Counter;
