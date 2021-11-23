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
import SOUNDS from './audio';

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

	runAnimation: {
		x: number;
		y: number;
	}[];

	duckAnimation: {
		x: number;
		y: number;
	}[];

	runFrame: number;

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
		this.runAnimation = [SPRITES_COORDS.DINO_LEFT, SPRITES_COORDS.DINO_RIGHT];
		this.duckAnimation = [
			SPRITES_COORDS.DINO_DUCK_LEFT,
			SPRITES_COORDS.DINO_DUCK_RIGHT,
		];
		this.runFrame = 0;

		setInterval(() => {
			this.runFrame += 1;
			if (this.runFrame > this.runAnimation.length - 1) {
				this.runFrame = 0;
			}
		}, 150);
	}

	draw(ctx: CanvasRenderingContext2D) {
		this.jump();
		ctx.beginPath();

		if (!this.jumpState) {
			if (!this.isDuck) this.sprite = this.runAnimation[this.runFrame];
			this.duck();
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
				SOUNDS.playJump();
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

	duck() {
		this.w = this.initW;
		this.h = this.initH;
		this.y = this.initY;
		if (!this.isDuck || this.jumpState) return;

		this.w = 118;
		this.h = 60;
		this.y = 246;

		this.sprite = this.duckAnimation[this.runFrame];
	}
}
