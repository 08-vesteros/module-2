import { Dispatch } from 'react';

export const initialValues = {
	text: '',
};

export type Props = {
	setUpdated: Dispatch<boolean>;
};
