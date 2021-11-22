import { FormEventHandler, ReactNode } from 'react';

export type FormProps = {
	children: ReactNode;
	onSubmit?: FormEventHandler<HTMLFormElement>;
	flexDirection?: string;
};

export type Props = FormProps;
