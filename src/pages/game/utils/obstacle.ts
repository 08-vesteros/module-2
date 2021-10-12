import { CANVAS_HEIGHT, CANVAS_WIDTH, GAME_SPEED } from '../../../constants';

const randomize = (min: number, max: number) => {
	const minInt = Math.ceil(min);
	const maxInt = Math.floor(max);
	return Math.floor(Math.random() * (maxInt - minInt) + minInt);
};

export default class Obstacle {
	x: number;

	y: number;

	w: number;

	h: number;

	constructor() {
		this.x = -100;
		this.y = 0;
		this.w = 0;
		this.h = 0;
	}

	draw(ctx: CanvasRenderingContext2D) {
		if (this.x < -100) this.setProps();
		this.move();
		ctx.beginPath();
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.closePath();
	}

	setProps() {
		this.w = randomize(30, 80);
		this.h = randomize(40, 90);
		this.x = CANVAS_WIDTH * 2;
		this.y = CANVAS_HEIGHT * 2 - this.h;
	}

	move() {
		this.x -= GAME_SPEED;
	}
}
