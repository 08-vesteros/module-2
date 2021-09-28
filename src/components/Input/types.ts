import { ChangeEventHandler, FocusEventHandler } from 'react';

export type InputProps = {
	name: string;
	type: string;
	value: string;
	id?: string;
	onChange?: ChangeEventHandler;
	onBlur?: FocusEventHandler;
};

export type InputWrapperProps = {
	disabled?: boolean;
};

export type Props = InputProps & InputWrapperProps;
