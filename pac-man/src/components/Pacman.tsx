const Pacman = {
  x: 50,
  y: 50,
  size: 20,
  direction: 0, // 0 = right, 1 = down, 2 = left, 3 = up

  render: (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "yellow";

    ctx.beginPath();
    const startAngle = 0.2 * Math.PI + Pacman.direction * (Math.PI / 2);
    const endAngle = 1.8 * Math.PI + Pacman.direction * (Math.PI / 2);
    ctx.arc(Pacman.x, Pacman.y, Pacman.size, startAngle, endAngle);
    ctx.lineTo(Pacman.x, Pacman.y);
    ctx.fill();
  },

  move: (direction: number) => {
    Pacman.direction = direction;

    const step = 20; // Movement step size (matches grid size)
    if (direction === 0) Pacman.x += step; // Move right
    if (direction === 1) Pacman.y += step; // Move down
    if (direction === 2) Pacman.x -= step; // Move left
    if (direction === 3) Pacman.y -= step; // Move up
  },
};

export default Pacman;
