import SPRITES from '../../../constants/sprites';
import {
	CANVAS_HEIGHT,
	CANVAS_WIDTH,
	GAME_SPEED,
	OBSTACLES,
} from '../../../constants';

export default class Obstacle {
	x: number;

	y: number;

	w: number;

	h: number;

	frames: {
		x: number;
		y: number;
	}[];

	currentFrame: number;

	// eslint-disable-next-line no-undef
	interval?: NodeJS.Timer;

	constructor() {
		this.x = -150;
		this.y = 0;
		this.w = 0;
		this.h = 0;
		this.frames = [{ x: 0, y: 0 }];
		this.currentFrame = 0;
		this.interval = undefined;
	}

	draw(ctx: CanvasRenderingContext2D) {
		if (this.x + this.w < -10) this.setProps();
		this.move();
		ctx.beginPath();
		const pic = this.frames[this.currentFrame];

		ctx.drawImage(
			SPRITES,
			pic.x,
			pic.y,
			this.w,
			this.h,
			this.x,
			this.y,
			this.w,
			this.h
		);
		ctx.closePath();
	}

	setProps() {
		if (this.interval) clearInterval(this.interval);

		const { w, h, frames, flying } =
			OBSTACLES[Math.floor(Math.random() * OBSTACLES.length)];
		this.w = w;
		this.h = h;
		this.frames = frames;
		this.x = CANVAS_WIDTH * 2;
		this.y = CANVAS_HEIGHT * 2 - this.h;
		this.currentFrame = 0;

		if (flying) this.y += Math.floor(Math.random() * -120);
		if (frames.length > 1) {
			this.interval = setInterval(() => {
				this.currentFrame += 1;
				if (this.currentFrame > frames.length - 1) {
					this.currentFrame = 0;
				}
			}, 300);
		}
	}

	move() {
		this.x -= GAME_SPEED;
	}
}
