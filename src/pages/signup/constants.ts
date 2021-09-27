import { TInput } from '../../utils/types';

export const inputs: Array<TInput> = [
	{
		label: 'First name',
		type: 'text',
		name: 'first_name',
	},
	{
		label: 'Second name',
		type: 'text',
		name: 'second_name',
	},
	{
		label: 'Email',
		type: 'email',
		name: 'email',
	},
	{
		label: 'Phone',
		type: 'tel',
		name: 'phone',
	},
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
	{
		label: 'Confirm password',
		type: 'password',
		name: 'confirm_password',
	},
];
