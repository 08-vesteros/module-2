import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Form from '../../components/Form';
import InputGroup from '../../components/InputGroup';
import { TInput } from '../../utils/types';
import { signIn } from '../../utils/user';
import validate from './validation';
import { initialValues, inputs } from './constants';
import ButtonContainer from '../../components/ButtonContainer';
import { fetchUser } from '../../store/dispatchers/user';
import { setWarn } from '../../store/reducers/warn';

const Signin: FC = () => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues,
		onSubmit: async values => {
			const res = await signIn(values);

			if (res.status !== 200) {
				dispatch(setWarn(res.data.reason));
				return;
			}

			dispatch(fetchUser());
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
