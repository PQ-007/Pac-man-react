import React from "react";
import Canvas from "./components/Canvas";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <Canvas width={500} height={500} />
    </div>
  );
};

export default App;
