import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [input, setInput] = useState(""); // Track the current input

  // Handle button clicks
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Handle clear button
  const handleClear = () => {
    setInput("");
  };

  // Calculate the result
  const calculateResult = () => {
    const isValid = /^[\d+\-*/.() ]+$/.test(input); // Validate input
    if (isValid) {
      setInput(String(eval(input))); // Safely evaluate and update the input with the result
    } else {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      {/* Display */}
      <div className="display">{input || "0"}</div>
      
      {/* Buttons */}
      <div className="button-grid">
        {/* Number buttons */}
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "("].map((num) => (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
        
        {/* Operator buttons */}
        {["+", "-", "*", "/", ")", "="].map((op) => (
          <button
            key={op}
            onClick={op === "=" ? calculateResult : () => handleClick(op)}
            className={op === "=" ? "equals" : ""}
          >
            {op}
          </button>
        ))}

        {/* Clear button */}
        <button onClick={handleClear} className="clear">
          Clear
        </button>
      </div>
    </div>
  );
}

export default Calculator;
