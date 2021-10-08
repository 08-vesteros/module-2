import { useFormik } from 'formik';
import React, { FC } from 'react';
import Form from '../Form';
import Button from '../Button';
import InputGroup from '../InputGroup';
import { initialValues } from './types';

const CreateCommentForm: FC = () => {
	const formik = useFormik({
		initialValues,
		onSubmit: async values => {
			console.log(values);
		},
		validateOnChange: false,
		validateOnBlur: true,
	});

	return (
		<Form onSubmit={formik.handleSubmit} flexDirection='row'>
			<InputGroup
				label='New comment'
				name='text'
				type='text'
				value={formik.values.text}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			<Button type='submit' content='Send' disabled={formik.isSubmitting} />
		</Form>
	);
};

export default CreateCommentForm;
