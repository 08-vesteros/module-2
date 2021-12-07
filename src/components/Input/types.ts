import { ChangeEventHandler, FocusEventHandler } from 'react';

export type InputProps = {
	name: string;
	type: string;
	value: string;
	disabled?: boolean;
	id?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler;
};

export type InputWrapperProps = {
	disabled?: boolean;
};

export type Props = InputProps & InputWrapperProps;
