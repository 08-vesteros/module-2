import { useFormik } from 'formik';
import React, { FC, useContext } from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import InputGroup from '../../components/InputGroup';
import ErrorContext from '../../contexts/error';
import { TInput, TFieldValues } from '../../utils/types';
import {
	isEmpty,
	isValidLength,
	isLogin,
	isPassword,
} from '../../utils/validators';
import { signin } from '../../utils/user';

const inputs: Array<TInput> = [
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

const initialValues: TFieldValues = {
	login: '',
	password: '',
};

const Signin: FC = () => {
	const { setError } = useContext(ErrorContext);

	const formik = useFormik({
		initialValues,
		onSubmit: async values => {
			const res = await signin(values);

			if (res.status !== 200) {
				setError(res.data.reason);
			}
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
			<Button type='submit' content='Login' disabled={formik.isSubmitting} />
		</Form>
	);
};

Signin.displayName = 'Sign in';

export default Signin;
