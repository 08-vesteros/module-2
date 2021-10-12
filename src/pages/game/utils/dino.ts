import {
	BASE_ACCELERATION,
	DELTA_ACCELERATION,
	GRAVITY,
	JUMP_POWER,
	JUPM_HEIGHT,
} from '../../../constants';
import { JumpDir } from '../types';

export default class Dino {
	x: number;

	y: number;

	w: number;

	h: number;

	acceleration: number;

	jumpState: JumpDir;

	constructor(x: number, y: number, w: number, h: number) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.acceleration = BASE_ACCELERATION;
	}

	draw(ctx: CanvasRenderingContext2D) {
		this.jump();
		ctx.beginPath();
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.closePath();
	}

	jump() {
		switch (this.jumpState) {
			case 'up':
				if (this.y <= JUPM_HEIGHT) {
					this.jumpState = 'down';
					this.acceleration = 0;
				}
				this.y -= JUMP_POWER + this.acceleration;
				if (this.acceleration > 0) this.acceleration -= DELTA_ACCELERATION;
				break;

			case 'down':
				if (this.y >= 200 - (GRAVITY + this.acceleration)) {
					this.jumpState = undefined;
					this.y = 200;
					this.acceleration = BASE_ACCELERATION;
					break;
				}
				this.y += GRAVITY + this.acceleration;
				this.acceleration += DELTA_ACCELERATION;
				break;

			default:
		}
	}
}
