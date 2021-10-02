import { useFormik } from 'formik';
import React, { FC, useState } from 'react';
import useUser from '../../contexts/user';
import { inputs } from './constants';
import Button from '../../components/Button';
import InputGroup from '../../components/InputGroup';
import { TInput, TUserInfo } from '../../utils/types';
import useWarn from '../../contexts/warn';
import { updateUser } from '../../utils/user';
import validate from './validation';
import Form from '../../components/Form';
import ButtonContainer from '../../components/ButtonContainer';
import ChangePass from '../../modules/ChangePass';

const Profile: FC = () => {
	const { setWarn } = useWarn();
	const { user, setUser } = useUser();
	const userData = user as TUserInfo;
	const [isEdit, setEdit] = useState(false);
	const [isChangePass, setChangePass] = useState(false);

	const formik = useFormik({
		initialValues: userData,
		onSubmit: async values => {
			const res = await updateUser(values);

			if (res.status !== 200) {
				setWarn(res.data.reason);
				return;
			}

			setUser(res.data);
			setEdit(false);
			setWarn("Profile's updated!");
		},
		validateOnChange: false,
		validateOnBlur: true,
		validate,
	});

	const toggleEdit = () => {
		formik.resetForm({
			values: userData,
		});
		setEdit(!isEdit);
	};

	return isChangePass ? (
		<ChangePass returnAction={setChangePass} />
	) : (
		<Form onSubmit={formik.handleSubmit}>
			{inputs.map(({ label, name, type }: TInput) => (
				<InputGroup
					key={name}
					label={label}
					name={name}
					type={type}
					disabled={!isEdit}
					value={formik.values[name] || ''}
					touched={formik.touched[name]}
					error={formik.errors[name]}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			))}
			<ButtonContainer>
				{isEdit ? (
					<Button type='submit' content='Save' disabled={formik.isSubmitting} />
				) : (
					<Button
						type='button'
						content='Change Password'
						onClick={() => setChangePass(true)}
					/>
				)}
				<Button
					type='button'
					content={isEdit ? 'Cancel' : 'Edit User Info'}
					onClick={toggleEdit}
				/>
			</ButtonContainer>
		</Form>
	);
};

export default Profile;
