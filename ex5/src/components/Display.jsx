import React from "react";
import "./Display.css";

const Display = ({ voted }) => {
  return (
    <h2 className="display">
      {voted === 0 ? "MIN" : voted === 10 ? "MAX" : voted}
    </h2>
  );
};

export default Display;
