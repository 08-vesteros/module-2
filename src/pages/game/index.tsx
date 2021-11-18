import React, { useEffect, useRef, useState } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GRAVITY } from '../../constants';
import { Wrapper } from '../../ui/wrapper';
import { Canvas } from './styled';
import Dino from './utils/dino';
import Obstacle from './utils/obstacle';

const overMessage = (ctx: CanvasRenderingContext2D, score: number) => {
	ctx.textAlign = 'center';
	ctx.font = '40px sans-serif';
	ctx.textBaseline = 'bottom';
	ctx.fillText('GAME OVER', ctx.canvas.width / 2, ctx.canvas.height / 2);
	ctx.font = '30px sans-serif';
	ctx.textBaseline = 'top';
	ctx.fillText(
		`Your score: ${score}`,
		ctx.canvas.width / 2,
		ctx.canvas.height / 2
	);
};

const renderScore = (ctx: CanvasRenderingContext2D, score: number) => {
	ctx.textAlign = 'right';
	ctx.font = '40px sans-serif';
	ctx.fillText(`${score}`, ctx.canvas.width - 15, 45);
};

const Game = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isGameOver, setGameOver] = useState(false);
	const [finalScore, setFinalScore] = useState(0);
	let frame = 0;
	const obstacles: Obstacle[] = [];
	const dino = new Dino(100, 212, 88, 94);
	let score = 0;

	obstacles.push(new Obstacle());

	const keyDownHandler = (e: React.KeyboardEvent) => {
		e.preventDefault();
		if (dino.jumpState) return;

		switch (e.code) {
			case 'ArrowUp':
			case 'Space':
				dino.y -= GRAVITY;
				dino.jumpState = 'up';
				break;

			case 'ArrowDown':
				dino.isDuck = true;
				break;

			default:
				break;
		}
	};

	const keyUpHandler = (e: React.KeyboardEvent) => {
		e.preventDefault();

		switch (e.code) {
			case 'ArrowDown':
				dino.isDuck = false;
				break;

			default:
				break;
		}
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
				score += 1;
				if (isGameOver) {
					overMessage(context, finalScore);
					return;
				}

				context?.clearRect(0, 0, canvas.width, canvas.height);
				renderScore(context, score);

				dino.draw(context, frame);

				for (let i = 0; i < obstacles.length; i += 1) {
					const obstacle = obstacles[i];
					obstacle.draw(context, frame);

					if (
						obstacle.x < dino.x + dino.w &&
						obstacle.x + obstacle.w > dino.x &&
						obstacle.y < dino.y + dino.h &&
						obstacle.y + obstacle.h > dino.y
					) {
						setFinalScore(score);
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
			<Canvas
				tabIndex={0}
				ref={canvasRef}
				onClick={restart}
				onKeyDown={keyDownHandler}
				onKeyUp={keyUpHandler}
			/>
		</Wrapper>
	);
};
export default Game;
