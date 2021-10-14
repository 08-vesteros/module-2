import {
	BASE_ACCELERATION,
	DELTA_ACCELERATION,
	GRAVITY,
	JUMP_POWER,
	JUPM_HEIGHT,
	SPRITES_COORDS,
} from '../../../constants';
import { JumpDir } from '../types';
import spritesPath from '../../../img/sprites.png';

const sprites = new Image();
sprites.src = spritesPath;

export default class Dino {
	x: number;

	y: number;

	w: number;

	h: number;

	initY: number;

	acceleration: number;

	jumpState: JumpDir;

	constructor(x: number, y: number, w: number, h: number) {
		this.initY = y;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.acceleration = BASE_ACCELERATION;
	}

	draw(ctx: CanvasRenderingContext2D, frame: number) {
		this.jump();
		ctx.beginPath();
		const spritePosX =
			Math.floor(frame / 7) % 2 === 0
				? SPRITES_COORDS.DINO_LEFT.x
				: SPRITES_COORDS.DINO_RIGHT.x;
		ctx.drawImage(
			sprites,
			spritePosX,
			SPRITES_COORDS.DINO.y,
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
		}
	}
}
