import { TFieldValues } from '../../utils/types';
import { isEmpty, isPassword, isEqual } from '../../utils/validators';

const validate = (values: TFieldValues) => {
	const errors: TFieldValues = {};

	if (isEqual(values.newPassword)(values.oldPassword)) {
		errors.newPassword = 'New password must differ from old one';
	}

	Object.keys(values).forEach(key => {
		if (isEmpty(values[key])) {
			errors[key] = 'Required';
		}
	});

	Object.keys(values).forEach(key => {
		if (!isPassword(values[key])) {
			errors[key] = 'Cannot contain whitespaces';
		}
	});

	if (!isEqual(values.newPassword)(values.confirmPassword)) {
		errors.confirmPassword = 'Wrong confirmation password';
	}

	return errors;
};

export default validate;
