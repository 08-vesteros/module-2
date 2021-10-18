import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { TInput } from '../../utils/types';
import InputGroup from '../../components/InputGroup';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { initialValues, inputs } from './constants';
import { signUp } from '../../utils/user';
import validate from './validation';
import ButtonContainer from '../../components/ButtonContainer';
import { fetchUser } from '../../store/dispatchers/user';
import { setWarn } from '../../store/reducers/warn';

const Signup: FC = () => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues,
		onSubmit: async values => {
			const res = await signUp(values);

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
				<Button type='submit' content='Submit' disabled={formik.isSubmitting} />
			</ButtonContainer>
		</Form>
	);
};

Signup.displayName = 'Sign up';

export default Signup;
