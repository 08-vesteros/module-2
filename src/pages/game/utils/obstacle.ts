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

	sprite: {
		x: number;
		y: number;
		animate?: {
			x: number;
			y: number;
		};
	};

	constructor() {
		this.x = -150;
		this.y = 0;
		this.w = 0;
		this.h = 0;
		this.sprite = { x: 0, y: 0 };
	}

	draw(ctx: CanvasRenderingContext2D, frame: number) {
		if (this.x < -150) this.setProps();
		this.move();
		ctx.beginPath();
		let pic = this.sprite;

		if (this.sprite.animate) {
			pic = Math.floor(frame / 15) % 2 === 0 ? this.sprite : this.sprite.animate;
		}

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
		const { w, h, ...sprite } =
			OBSTACLES[Math.floor(Math.random() * OBSTACLES.length)];
		this.w = w;
		this.h = h;
		this.sprite = sprite;
		this.x = CANVAS_WIDTH * 2;
		this.y = CANVAS_HEIGHT * 2 - this.h;
		if (sprite.animate) this.y += Math.floor(Math.random() * -120);
	}

	move() {
		this.x -= GAME_SPEED;
	}
}
