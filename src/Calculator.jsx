import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('0'); 
  const [prevValue, setPrevValue] = useState(null); 
  const [operator, setOperator] = useState(null); 

  const handleClick = (value) => {
    if (value === 'C') {
    
      setInput('0');
      setPrevValue(null);
      setOperator(null);
    } else if (value === '=') {
      
      if (operator && prevValue !== null) {
        const result = calculate(prevValue, input, operator);
        setInput(String(result));
        setPrevValue(null);
        setOperator(null);
      }
    } else if (['/', '*', '-', '+'].includes(value)) {
     
      if (operator && prevValue !== null) {
        const result = calculate(prevValue, input, operator);
        setInput(String(result));
        setPrevValue(String(result));
      } else {
        setPrevValue(input);
      }
      setOperator(value);
      setInput('0');
    } else {
     
      setInput((prevInput) => (prevInput === '0' ? value : prevInput + value));
    }
  };

  const calculate = (prev, curr, operator) => {
    const a = parseFloat(prev);
    const b = parseFloat(curr);
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return b !== 0 ? a / b : 'Error'; 
      default:
        return curr;
    }
  };

  return (
    <div className='cal-main'>
      <div className='cal-submain'>
        <div className='display'>{prevValue} {operator} {input}</div>
        <div className='buttons'>
          <button className='btn' onClick={() => handleClick('7')}>7</button>
          <button className='btn' onClick={() => handleClick('8')}>8</button>
          <button className='btn' onClick={() => handleClick('9')}>9</button>
          <button className='btn operator' onClick={() => handleClick('/')}>/</button>
          <button className='btn' onClick={() => handleClick('4')}>4</button>
          <button className='btn' onClick={() => handleClick('5')}>5</button>
          <button className='btn' onClick={() => handleClick('6')}>6</button>
          <button className='btn operator' onClick={() => handleClick('*')}>*</button>
          <button className='btn' onClick={() => handleClick('1')}>1</button>
          <button className='btn' onClick={() => handleClick('2')}>2</button>
          <button className='btn' onClick={() => handleClick('3')}>3</button>
          <button className='btn operator' onClick={() => handleClick('-')}>-</button>
          <button className='btn' onClick={() => handleClick('0')}>0</button>
          <button className='btn operator' onClick={() => handleClick('C')}>C</button>
          <button className='btn operator' onClick={() => handleClick('=')}>=</button>
          <button className='btn operator' onClick={() => handleClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
