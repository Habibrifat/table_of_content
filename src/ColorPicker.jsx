import React, { useState } from "react";
import { SketchPicker } from "react-color";

function ColorPicker({ defaultColor, onChange, name }) {
  const [color, setColor] = useState(defaultColor || "#000000");
  const [isVisible, setIsVisible] = useState(false);

  function handleColorChange(newColor) {
    setColor(newColor.hex);
    onChange && onChange(newColor.hex);
  }

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="bg-white border shadow p-1 rounded my-1">
      <div
        onClick={handleToggleVisibility}
        style={{
          backgroundColor: color,
          height: "20px",
          width: "20px",
          display: "inline-block",
        }}
      ></div>
      <span style={{ marginLeft: "10px" }}>{name}</span>
      {isVisible && <SketchPicker color={color} onChange={handleColorChange} />}
    </div>
  );
}

export default ColorPicker;
