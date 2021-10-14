import React, { useEffect, useRef, useState } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GRAVITY } from '../../constants';
import { Wrapper } from '../../ui/wrapper';
import { Canvas } from './styled';
import Dino from './utils/dino';
import Obstacle from './utils/obstacle';

const overMessage = (ctx: CanvasRenderingContext2D) => {
	ctx.textAlign = 'center';
	ctx.font = '40px sans-serif';
	ctx.fillText('GAME OVER', ctx.canvas.width / 2, ctx.canvas.height / 2);
};

const Game = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isGameOver, setGameOver] = useState(false);
	let frame = 0;
	const obstacles: Obstacle[] = [];
	const dino = new Dino(100, 212, 88, 94);

	obstacles.push(new Obstacle());

	const jump = (e: React.KeyboardEvent) => {
		e.preventDefault();
		if ((e.code !== 'Space' && e.code !== 'ArrowUp') || dino.jumpState) return;
		dino.y -= GRAVITY;
		dino.jumpState = 'up';
	};

	const restart = (e: React.MouseEvent) => {
		e.preventDefault();
		if (!isGameOver) return;
		setGameOver(false);
	};

	useEffect(() => {
		const canvas = canvasRef?.current;
		const context = canvas?.getContext('2d') as CanvasRenderingContext2D;
		if (canvas) {
			canvas.width = CANVAS_WIDTH * 2;
			canvas.height = CANVAS_HEIGHT * 2;
			canvas.style.width = `${CANVAS_WIDTH}px`;
			canvas.style.height = `${CANVAS_HEIGHT}px`;
		}

		const render = () => {
			if (canvas) {
				if (isGameOver) {
					overMessage(context);
					return;
				}

				context?.clearRect(0, 0, canvas.width, canvas.height);
				dino.draw(context, frame);

				for (let i = 0; i < obstacles.length; i += 1) {
					const obstacle = obstacles[i];
					obstacle.draw(context);

					if (
						obstacle.x < dino.x + dino.w &&
						obstacle.x + obstacle.w > dino.x &&
						obstacle.y < dino.y + dino.h &&
						obstacle.y + obstacle.h > dino.y
					) {
						setGameOver(true);
					}
				}
			}
			frame = requestAnimationFrame(render);
		};
		render();

		return () => {
			cancelAnimationFrame(frame);
		};
	}, [isGameOver]);

	return (
		<Wrapper>
			<Canvas tabIndex={0} ref={canvasRef} onClick={restart} onKeyDown={jump} />
		</Wrapper>
	);
};
export default Game;
