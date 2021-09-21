import React, { useEffect, useRef } from 'react';
import { Canvas, Wrapper } from './styled';

const WIDTH = 600;
const HEIGHt = 150;

const Game = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	let yPos = 200;

	const jump = () => {
		console.log('jump');
		yPos -= 30;
	};
	const dyno = (context: any) => {
		context.beginPath();
		context.rect(0, yPos, 100, 100);
		context.stroke();
	};

	useEffect(() => {
		const canvas = canvasRef?.current;
		const ctx = canvas?.getContext('2d');
		if (canvas) {
			canvas.width = WIDTH * 2;
			canvas.height = HEIGHt * 2;
			canvas.style.width = `${WIDTH}px`;
			canvas.style.height = `${HEIGHt}px`;
		}
		dyno(ctx);
	}, []);

	return (
		<Wrapper>
			<Canvas ref={canvasRef} onClick={() => jump()} />
		</Wrapper>
	);
};
export default Game;
