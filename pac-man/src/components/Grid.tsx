const Grid = {
  render: (ctx: CanvasRenderingContext2D) => {
    const gridSize = 20;
    const rows = ctx.canvas.height / gridSize;
    const cols = ctx.canvas.width / gridSize;

    ctx.strokeStyle = "gray";
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        ctx.strokeRect(j * gridSize, i * gridSize, gridSize, gridSize);
      }
    }
  },
};

export default Grid;
