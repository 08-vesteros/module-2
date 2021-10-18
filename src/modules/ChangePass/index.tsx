import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { initialValues, inputs } from './constants';
import Button from '../../components/Button';
import InputGroup from '../../components/InputGroup';
import { TInput, TUserPass } from '../../utils/types';
import validate from './validation';
import Form from '../../components/Form';
import ButtonContainer from '../../components/ButtonContainer';
import { Props } from './types';
import { changePassword } from '../../utils/user';
import { setWarn } from '../../store/reducers/warn';

const ChangePass: FC<Props> = ({ ...props }) => {
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues,
		onSubmit: async values => {
			const res = await changePassword(values as TUserPass);

			if (res.status !== 200) {
				dispatch(setWarn(res.data.reason));
				return;
			}

			dispatch(setWarn('Password has been changed!'));
			props.returnAction(false);
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
				<Button type='submit' content='Confirm' disabled={formik.isSubmitting} />
				<Button
					type='button'
					content='Return'
					onClick={() => props.returnAction(false)}
				/>
			</ButtonContainer>
		</Form>
	);
};

export default ChangePass;
