import { TFieldValues, TInput } from '../../utils/types';

export const inputs: Array<TInput> = [
	{
		label: 'Old password',
		type: 'password',
		name: 'oldPassword',
	},
	{
		label: 'New password',
		type: 'password',
		name: 'newPassword',
	},
	{
		label: 'Confirm new password',
		type: 'password',
		name: 'confirmPassword',
	},
];

export const initialValues: TFieldValues = {
	oldPassword: '',
	newPassword: '',
	confirmPassword: '',
};
