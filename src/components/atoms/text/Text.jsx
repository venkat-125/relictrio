import React from "react";
import "./styles.css";

export const Text = ({ text, type, gutterBottom }) => {
  return (
    <p className={`text ${type} ${gutterBottom ? "gutterBottom" : ""}`}>
      {text}
    </p>
  );
};

