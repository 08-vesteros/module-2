import jumpOgg from '../../../assets/jump.ogg';
import collisionOgg from '../../../assets/collision.ogg';

export default class Sound {
	jumpAudio: HTMLAudioElement;

	collisionAudio: HTMLAudioElement;

	constructor() {
		this.jumpAudio = new Audio(jumpOgg);
		this.collisionAudio = new Audio(collisionOgg);
	}

	playJump(): void {
		this.jumpAudio.play();
	}

	playCollision(): void {
		this.collisionAudio.play();
	}
}
