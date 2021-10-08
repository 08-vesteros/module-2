import { TFieldValues } from '../../utils/types';
import {
	isEmpty,
	isEmail,
	isPhone,
	isValidLength,
	isLogin,
	isPassword,
	isEqual,
} from '../../utils/validators';

const validate = (values: TFieldValues) => {
	const errors: TFieldValues = {};

	Object.keys(values).forEach(key => {
		if (isEmpty(values[key])) {
			errors[key] = 'Required';
		}
	});

	if (!isEmail(values.email)) {
		errors.email = 'Invalid e-mail';
	}

	if (!isPhone(values.phone)) {
		errors.phone = 'Invalid phone number';
	}

	if (!isValidLength(7)(values.phone)) {
		errors.phone = 'Phone number is too short';
	}

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

	if (!isEqual(values.password)(values.confirm_password)) {
		errors.confirm_password = 'Wrong confirmation password';
	}

	return errors;
};

export default validate;
