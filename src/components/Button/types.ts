import { MouseEventHandler } from 'react';

export type ButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	content: string;
	type?: 'button' | 'submit' | 'reset';
};

export type ButtonWrapperProps = {
	disabled?: boolean;
};

export type Props = ButtonProps & ButtonWrapperProps;
