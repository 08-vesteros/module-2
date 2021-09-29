import { TFieldValues } from '../../utils/types';
import {
	isEmpty,
	isValidLength,
	isLogin,
	isPassword,
} from '../../utils/validators';

const validate = (values: TFieldValues) => {
	const errors: TFieldValues = {};

	Object.keys(values).forEach(key => {
		if (isEmpty(values[key])) {
			errors[key] = 'Required';
		}
	});

	if (!isLogin(values.login)) {
		errors.login =
			'Can contain only latin letters, numbers, underscores or hyphens';
	}

	if (!isValidLength(5)(values.login)) {
		errors.login = 'Login should be at least 5 characters long';
	}

	if (!isPassword(values.password)) {
		errors.password = 'Password must not contain whitespaces';
	}

	return errors;
};

export default validate;
