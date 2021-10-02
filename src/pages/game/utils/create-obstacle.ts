export const createObstacle = (
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	w: number,
	h: number
) => {
	ctx.beginPath();
	ctx.fillRect(x, y, w, h);
	ctx.closePath();
};
