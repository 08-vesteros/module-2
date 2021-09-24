import { MouseEventHandler } from 'react';

export type ButtonProps = {
	onClick: MouseEventHandler<HTMLButtonElement>;
	content: string;
};

export type ButtonWrapperProps = {
	disabled?: boolean;
};

export type Props = ButtonProps & ButtonWrapperProps;
