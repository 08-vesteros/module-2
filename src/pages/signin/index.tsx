import { useFormik } from 'formik';
import React, { FC } from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import InputGroup from '../../components/InputGroup';
import { TInput } from '../../utils/types';
import { signIn } from '../../utils/user';
import useError from '../../contexts/error';
import validate from './validation';
import { initialValues, inputs } from './constants';
import useUser from '../../contexts/user';

const Signin: FC = () => {
	const { setError } = useError();
	const { setLoggedIn } = useUser();

	const formik = useFormik({
		initialValues,
		onSubmit: async values => {
			const res = await signIn(values);

			if (res.status !== 200) {
				setError(res.data.reason);
				return;
			}

			setLoggedIn(true);
		},
		validateOnChange: false,
		validateOnBlur: true,
		validate,
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
