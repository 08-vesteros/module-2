import React, { useEffect, useRef } from 'react';
import {
	CANVAS_WIDTH,
	JUPM_HEIGHT,
	CANVAS_HEIGHT,
	GRAVITY,
	GAME_SPEED,
} from '../../constants';
import { Wrapper } from '../../ui/wrapper';
import { Canvas } from './styled';
import { ObstaclesType } from './types';
import { createDyno } from './utils/create-dyno';
import { createObstacle } from './utils/create-obstacle';

const Game = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const pos = { x: 0, y: 200 };
	const obstacles: ObstaclesType[] = [];
	obstacles[0] = {
		x: CANVAS_WIDTH * 2,
		y: 220,
		w: 50,
		h: 80,
	};

	const jump = () => {
		// TOTO smooth jumping up
		if (pos.y === 200) {
			pos.y = JUPM_HEIGHT;
		}
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
				createDyno(context, pos.x, pos.y, 100, 100);

				if (pos.y < 200) {
					pos.y += GRAVITY;
				} else {
					pos.y = 200;
				}

				for (let i = 0; i < obstacles.length; i += 1) {
					createObstacle(
						context,
						obstacles[i].x,
						obstacles[i].y,
						obstacles[i].w,
						obstacles[i].h
					);
					obstacles[i].x -= GAME_SPEED;
					// TODO random show obstacles
					if (obstacles[i].x === 135) {
						obstacles.push({
							x: canvas.width,
							y: 220,
							w: 50,
							h: 80,
						});
					}
				}
			}
			requestAnimationFrame(render);
		};
		render();
	}, []);

	return (
		<Wrapper>
			<Canvas tabIndex={0} ref={canvasRef} onKeyDown={jump} />
		</Wrapper>
	);
};
export default Game;
