import React, { FC, useContext } from 'react';
import { useFormik } from 'formik';
import { TFieldValues, TInput } from '../../utils/types';
import ErrorContext from '../../contexts/error';
import {
	isValidLength,
	isEqual,
	isEmail,
	isEmpty,
	isLogin,
	isPassword,
	isPhone,
} from '../../utils/validators';
import InputGroup from '../../components/InputGroup';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { signup } from '../../utils/user';

const inputs: Array<TInput> = [
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

const initialValues: TFieldValues = {
	first_name: '',
	second_name: '',
	email: '',
	phone: '',
	login: '',
	password: '',
	confirm_password: '',
};

const Signup: FC = () => {
	const { setError } = useContext(ErrorContext);

	const formik = useFormik({
		initialValues,
		onSubmit: async values => {
			const res = await signup(values);
			if (res.status !== 200) setError(res.data.reason);
		},
		validateOnChange: false,
		validateOnBlur: true,
		validate: values => {
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
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			{inputs.map(({ label, name, type }: TInput) => (
				<InputGroup
					key={name}
					label={label}
					name={name}
					type={type}
					value={formik.values[name]}
					touched={formik.touched[name]}
					error={formik.errors[name]}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			))}
			<Button type='submit' content='Submit' disabled={formik.isSubmitting} />
		</Form>
	);
};

Signup.displayName = 'Sign up';

export default Signup;
