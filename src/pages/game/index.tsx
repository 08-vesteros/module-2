import React, { useCallback, useEffect, useRef, useState } from 'react';
import { addUserLeaderBoard } from '../../utils/leaderboard';
import { CANVAS_WIDTH, CANVAS_HEIGHT, GRAVITY } from '../../constants';
import { Wrapper } from '../../ui/wrapper';
import { Canvas } from './styled';
import Dino from './utils/dino';
import Obstacle from './utils/obstacle';
import useTypedSelector from '../../store/selectors/typedSelector';
import SOUNDS from './utils/audio';

const overMessage = (ctx: CanvasRenderingContext2D, score: number) => {
	SOUNDS.playCollision();
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
	const { item: user } = useTypedSelector(state => state.user);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isGameOver, setGameOver] = useState(false);
	const [finalScore, setFinalScore] = useState(0);
	let frame = 0;
	const obstacles: Obstacle[] = [];
	const dino = new Dino(100, 212, 88, 94);
	let score = 0;

	obstacles.push(new Obstacle());

	const keyDownHandler = useCallback(
		(e: React.KeyboardEvent) => {
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
		},
		[dino]
	);

	const keyUpHandler = useCallback(
		(e: React.KeyboardEvent) => {
			e.preventDefault();

			switch (e.code) {
				case 'ArrowDown':
					dino.isDuck = false;
					break;

				default:
					break;
			}
		},
		[dino]
	);

	const restart = useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault();
			if (!isGameOver) return;
			setGameOver(false);
		},
		[isGameOver]
	);

	useEffect(() => {
		const canvas = canvasRef?.current;
		const context = canvas?.getContext('2d') as CanvasRenderingContext2D;
		if (canvas) {
			canvas.width = CANVAS_WIDTH * 2;
			canvas.height = CANVAS_HEIGHT * 2;
			canvas.style.width = `${CANVAS_WIDTH}px`;
			canvas.style.height = `${CANVAS_HEIGHT}px`;
			canvas.focus();
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

				dino.draw(context);

				for (let i = 0; i < obstacles.length; i += 1) {
					const obstacle = obstacles[i];
					obstacle.draw(context);

					if (
						obstacle.x < dino.x + dino.w &&
						obstacle.x + obstacle.w > dino.x &&
						obstacle.y < dino.y + dino.h &&
						obstacle.y + obstacle.h > dino.y
					) {
						if (user) {
							addUserLeaderBoard({
								id: user.id,
								name: user.display_name || user.login,
								vesterosScore: score,
							});
						}
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
