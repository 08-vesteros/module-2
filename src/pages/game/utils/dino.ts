import {
	BASE_ACCELERATION,
	DELTA_ACCELERATION,
	GRAVITY,
	JUMP_POWER,
	JUPM_HEIGHT,
	SPRITES_COORDS,
} from '../../../constants';
import { JumpDir } from '../types';
import SPRITES from '../../../constants/sprites';

export default class Dino {
	x: number;

	y: number;

	w: number;

	h: number;

	sprite: {
		x: number;
		y: number;
	};

	initY: number;

	initW: number;

	initH: number;

	acceleration: number;

	jumpState: JumpDir;

	isDuck: boolean;

	constructor(x: number, y: number, w: number, h: number) {
		this.initY = y;
		this.initW = w;
		this.initH = h;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.acceleration = BASE_ACCELERATION;
		this.isDuck = false;
		this.sprite = SPRITES_COORDS.DINO;
	}

	draw(ctx: CanvasRenderingContext2D, frame: number) {
		this.jump();
		ctx.beginPath();

		if (!this.jumpState) {
			this.sprite =
				Math.floor(frame / 7) % 2 === 0
					? SPRITES_COORDS.DINO_LEFT
					: SPRITES_COORDS.DINO_RIGHT;
			this.duck(frame);
		} else {
			this.w = this.initW;
			this.h = this.initH;
			this.sprite = SPRITES_COORDS.DINO;
		}

		ctx.drawImage(
			SPRITES,
			this.sprite.x,
			this.sprite.y,
			this.w,
			this.h,
			this.x,
			this.y,
			this.w,
			this.h
		);
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
				if (this.y >= this.initY - (GRAVITY + this.acceleration)) {
					this.jumpState = undefined;
					this.y = this.initY;
					this.acceleration = BASE_ACCELERATION;
					break;
				}
				this.y += GRAVITY + this.acceleration;
				this.acceleration += DELTA_ACCELERATION;
				break;

			default:
				break;
		}
	}

	duck(frame: number) {
		this.w = this.initW;
		this.h = this.initH;
		this.y = this.initY;
		if (!this.isDuck || this.jumpState) return;

		this.w = 118;
		this.h = 60;
		this.y = 246;

		this.sprite =
			Math.floor(frame / 7) % 2 === 0
				? SPRITES_COORDS.DINO_DUCK_LEFT
				: SPRITES_COORDS.DINO_DUCK_RIGHT;
	}
}
