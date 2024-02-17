import React, { useState } from 'react';
import './Calculator.css'; 

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <input
        className="input" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="0"/>
      <div className="buttons">
        <button className="button" onClick={() => handleClick('7')}>7</button>
        <button className="button" onClick={() => handleClick('8')}>8</button>
        <button className="button" onClick={() => handleClick('9')}>9</button>
        <button className="button operator" onClick={() => handleClick('/')}>/</button>

        <button className="button" onClick={() => handleClick('4')}>4</button>
        <button className="button" onClick={() => handleClick('5')}>5</button>
        <button className="button" onClick={() => handleClick('6')}>6</button>
        <button className="button operator" onClick={() => handleClick('*')}>*</button>

        <button className="button" onClick={() => handleClick('1')}>1</button>
        <button className="button" onClick={() => handleClick('2')}>2</button>
        <button className="button" onClick={() => handleClick('3')}>3</button>
        <button className="button operator" onClick={() => handleClick('-')}>-</button>

        <button className="button" onClick={() => handleClick('0')}>0</button>
        <button className="button" onClick={() => handleClick('.')}>.</button>
        <button className="button" onClick={() => handleClick('=')}>=</button>
        <button className="button operator" onClick={() => handleClick('+')}>+</button>

        <button className="button clear" onClick={() => handleClick('C')}>C</button>
      </div>
      <div className="result"><h2>{result}</h2></div>
    </div>
  );
}

export default Calculator;
