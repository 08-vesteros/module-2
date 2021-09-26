import React, { useEffect, useRef } from 'react';
import { Canvas, Wrapper } from './styled';

const WIDTH = 600;
const HEIGHt = 150;
const GRAVITY = 15;

const Game = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const xPos = 0;
	let yPos = 0;

	const dyno = (ctx: any, x: number, y: number, w: number, h: number) => {
		ctx.beginPath();
		ctx.fillRect(x, y, w, h);
		ctx.closePath();
	};

	const jump = (e: React.KeyboardEvent) => {
		if (yPos === 200 && e.keyCode === 32) {
			yPos = 50;
		}
	};

	useEffect(() => {
		const canvas = canvasRef?.current;
		const context = canvas?.getContext('2d');
		if (canvas) {
			canvas.width = WIDTH * 2;
			canvas.height = HEIGHt * 2;
			canvas.style.width = `${WIDTH}px`;
			canvas.style.height = `${HEIGHt}px`;
		}

		const render = () => {
			if (canvas) {
				context?.clearRect(0, 0, canvas.width, canvas.height);
				dyno(context, xPos, yPos, 100, 100);

				if (yPos < 200) {
					yPos += GRAVITY;
				} else {
					yPos = 200;
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
