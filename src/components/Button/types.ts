import { MouseEventHandler } from 'react';

export type ButtonProps = {
	onClick: MouseEventHandler<HTMLButtonElement>;
	content: string;
};

export type ButtonWrapperProps = {
	width?: string;
	padding?: string;
	margin?: string;
	backgroundColor?: string;
	backgroundColorHover?: string;
	color?: string;
	colorHover?: string;
	border?: string;
	disabled?: boolean;
};

export type Props = ButtonProps & ButtonWrapperProps;
