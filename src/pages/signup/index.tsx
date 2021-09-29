import React, { FC } from 'react';
import { useFormik } from 'formik';
import { TInput } from '../../utils/types';
import InputGroup from '../../components/InputGroup';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { initialValues, inputs } from './constants';
import { signUp } from '../../utils/user';
import useError from '../../contexts/error';
import validate from './validation';

const Signup: FC = () => {
	const { setError } = useError();

	const formik = useFormik({
		initialValues,
		onSubmit: async values => {
			const res = await signUp(values);
			if (res.status !== 200) setError(res.data.reason);
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
			<Button type='submit' content='Submit' disabled={formik.isSubmitting} />
		</Form>
	);
};

Signup.displayName = 'Sign up';

export default Signup;
