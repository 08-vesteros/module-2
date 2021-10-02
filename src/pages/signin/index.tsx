import { useFormik } from 'formik';
import React, { FC } from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import InputGroup from '../../components/InputGroup';
import { TInput } from '../../utils/types';
import { signIn } from '../../utils/user';
import useWarn from '../../contexts/warn';
import validate from './validation';
import { initialValues, inputs } from './constants';
import useUser from '../../contexts/user';
import ButtonContainer from '../../components/ButtonContainer';

const Signin: FC = () => {
	const { setWarn } = useWarn();
	const { setLoggedIn } = useUser();

	const formik = useFormik({
		initialValues,
		onSubmit: async values => {
			const res = await signIn(values);

			if (res.status !== 200) {
				setWarn(res.data.reason);
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
			<ButtonContainer>
				<Button type='submit' content='Login' disabled={formik.isSubmitting} />
			</ButtonContainer>
		</Form>
	);
};

Signin.displayName = 'Sign in';

export default Signin;
