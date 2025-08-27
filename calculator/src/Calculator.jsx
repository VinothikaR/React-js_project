import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // simple calculation
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    // <div className="calculator-container">
      <div className="calculator">
        <h2 className="title">Calculator</h2>
        <input type="text" value={input} readOnly className="display"/>
        <div className="buttons">
          {["7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+"].map((item) =>
            item === "=" ? (
              <button
                key={item}
                onClick={handleCalculate}
                className="btn equal">
                {item}
              </button>
            ) : (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className="btn"
              >
                {item}
              </button>
            )
          )}
          <button onClick={handleClear} className="btn clear">C</button>
        </div>
      </div>
    // </div>
  );
}
