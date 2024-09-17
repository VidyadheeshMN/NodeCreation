import { useState } from "react";
import axios from "axios";

const SubmitButton = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#6366F1",
    color: "white",
    border: "2px solid transparent",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "border-color 0.4s ease, opacity 0.3s ease",
    outline: "none",
    opacity: isClicked ? 0.5 : 1,
  };

  const focusStyle = {
    borderColor: "#6366F1",
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        style={isFocused ? { ...buttonStyle, ...focusStyle } : buttonStyle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
        type='submit'
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
