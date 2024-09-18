import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const inputStyle = {
  width: "100%",
  padding: "0.55rem",
  fontSize: "17px",
  margin: "8px 0",
  boxSizing: "border-box",
  borderRadius: "0.5rem",
  border: "1px solid #ccc",
  transition: "border-color 0.4s ease, box-shadow 0.4s ease",
  outline: "none",
};

const focusStyle = {
  borderColor: "#6366F1",
  boxShadow: "0 0 8px rgba(99, 102, 241, 0.5)",
};

const Input = (props) => {
  const { shouldAutoGrow = true } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextareaAutosize
      {...props}
      maxRows={shouldAutoGrow ? 7 : 1}
      style={isFocused ? { ...inputStyle, ...focusStyle } : inputStyle}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default Input;
