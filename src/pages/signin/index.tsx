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
import { getOauth } from '../../utils/oauth';
import { IS_DEV } from '../../../env';
import { LOCAL_URL, PROD_URL } from '../../constants';

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

	const handleClick = () => {
		getOauth().then(response => {
			if (response.status === 200) {
				window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${
					response.data.service_id
				}&redirect_uri=${IS_DEV ? LOCAL_URL : PROD_URL}`;
			}
		});
	};

	return (
		<>
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
					<Button content='OAuth' onClick={handleClick} />
				</ButtonContainer>
			</Form>
		</>
	);
};

Signin.displayName = 'Sign in';

export default Signin;
