import React from "react";

const Ghost = ({ x, y }: { x: number; y: number }) => {
  return (
    <div
      className="w-5 h-5 bg-red-500 rounded-full"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    ></div>
  );
};

export default Ghost;
