import React, { useRef, useEffect } from "react";
import Grid from "./Grid";
import Pacman from "./Pacman";

interface CanvasProps {
  width: number;
  height: number;
}

const Canvas: React.FC<CanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        Pacman.move(3); // Move up
        break;
      case "ArrowDown":
        Pacman.move(1); // Move down
        break;
      case "ArrowLeft":
        Pacman.move(2); // Move left
        break;
      case "ArrowRight":
        Pacman.move(0); // Move right
        break;
    }
    draw(); // Redraw the canvas after moving Pacman
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!context) return;

    // Clear the canvas
    context.clearRect(0, 0, width, height);

    // Render the grid
    Grid.render(context);

    // Render Pacman
    Pacman.render(context);
  };

  useEffect(() => {
    // Attach the keydown event listener
    window.addEventListener("keydown", handleKeyDown);

    // Initial drawing
    draw();

    // Cleanup the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} className="border bg-black" />;
};

export default Canvas;
