import React, { useState } from 'react';
import './Counter.css'; 
import { ReactComponent as DownIcon } from "../assets/icons/down.svg";
import { ReactComponent as UpIcon } from "../assets/icons/Up.svg";
const Counter = () => {
  const [count, setCount] = useState(0); // default value as per image
  
  // Increment the count
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  // Decrement the count, preventing it from going below 1
  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="counter-container">
      
      <button className="counter-btn" onClick={decrement}>
      <DownIcon/>{/* down arrow */}
      </button>
      
      <div className="counter-display">
        {count}
      </div>
      
      <button className="counter-btn" onClick={increment}>
   <UpIcon/>{/* up arrow */}
      </button>
    </div>
  );
};

export default Counter;