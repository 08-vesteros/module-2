import { TFieldValues } from '../../utils/types';
import {
	isEmpty,
	isEmail,
	isPhone,
	isValidLength,
	isLogin,
} from '../../utils/validators';

const validate = (values: TFieldValues) => {
	const errors: TFieldValues = {};

	if (isEmpty(values.first_name)) {
		errors.first_name = 'Required';
	}

	if (isEmpty(values.second_name)) {
		errors.second_name = 'Required';
	}

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

	return errors;
};

export default validate;
