// CounterButton.tsx
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./CounterButton.css";

interface CounterButtonProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CounterButton = ({ count, onIncrement, onDecrement }: CounterButtonProps) => {
  const isOpen = count > 0;
  const animateDirection = ""; // Optional: add animation logic if needed

  return (
    <div className="counter-wrapper">
      {!isOpen ? (
        <div className="circle-button" onClick={onIncrement}>
          <FaPlus />
        </div>
      ) : (
        <div className="rectangle-box">
          <button className="icon-button" onClick={onDecrement}>
            <FaMinus className="minus-icon"/>
          </button>

          <div className={`counter-value ${animateDirection}`}>{count}</div>

          <button className="icon-button" onClick={onIncrement}>
            <FaPlus className="plus-icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CounterButton;
