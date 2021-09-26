import { FormEventHandler, ReactNode } from 'react';

export type FormProps = {
	children: ReactNode;
	onSubmit?: FormEventHandler<HTMLFormElement>;
};

export type Props = FormProps;
