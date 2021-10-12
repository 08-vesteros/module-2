import React, { useEffect, useRef } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GRAVITY } from '../../constants';
import { Wrapper } from '../../ui/wrapper';
import { Canvas } from './styled';
import Dino from './utils/dino';
import Obstacle from './utils/obstacle';

const Game = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	let frame = 0;
	const pos = { x: 0, y: 200 };
	const obstacles: Obstacle[] = [];
	const dino = new Dino(pos.x, pos.y, 100, 100);

	obstacles.push(new Obstacle());

	const jump = (e: React.KeyboardEvent) => {
		e.preventDefault();
		if ((e.code !== 'Space' && e.code !== 'ArrowUp') || dino.jumpState) return;
		dino.y -= GRAVITY;
		dino.jumpState = 'up';
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
				context?.clearRect(0, 0, canvas.width, canvas.height);
				dino.draw(context);

				for (let i = 0; i < obstacles.length; i += 1) {
					obstacles[i].draw(context);
				}
			}
			frame = requestAnimationFrame(render);
		};
		render();

		return () => {
			cancelAnimationFrame(frame);
		};
	});

	return (
		<Wrapper>
			<Canvas tabIndex={0} ref={canvasRef} onKeyDown={jump} />
		</Wrapper>
	);
};
export default Game;
