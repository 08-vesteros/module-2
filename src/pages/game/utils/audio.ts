import jumpOgg from '../../../assets/jump.ogg';
import collisionOgg from '../../../assets/collision.ogg';

class Sound {
	jumpAudio: HTMLAudioElement;

	collisionAudio: HTMLAudioElement;

	constructor() {
		const jump = document.createElement('audio');
		jump.src = jumpOgg;
		const collision = document.createElement('audio');
		collision.src = collisionOgg;
		this.jumpAudio = jump;
		this.collisionAudio = collision;
	}

	playJump(): void {
		this.jumpAudio.play();
	}

	playCollision(): void {
		this.collisionAudio.play();
	}
}

export default new Sound();
