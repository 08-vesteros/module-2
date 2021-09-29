import { TFieldValues, TInput } from '../../utils/types';

export const inputs: Array<TInput> = [
	{
		label: 'Login',
		type: 'text',
		name: 'login',
	},
	{
		label: 'Password',
		type: 'password',
		name: 'password',
	},
];

export const initialValues: TFieldValues = {
	login: '',
	password: '',
};
