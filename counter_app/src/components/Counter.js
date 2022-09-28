import { useState } from 'react'
import React from 'react'
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }
  return (
    <div className='content'>
        <h1>{count}</h1>
        <button onClick={decrease}>Decrease(azalt)</button>
        <button onClick={increase}>Increase(arttır)</button>
    </div>
        )
}

export default Counter