import { useFormik } from 'formik';
import React, { FC } from 'react';
import Form from '../Form';
import Button from '../Button';
import InputGroup from '../InputGroup';
import { initialValues } from './types';

const CreatePostsForm: FC = () => {
	const formik = useFormik({
		initialValues,
		onSubmit: async values => {
			// eslint-disable-next-line no-console
			console.log(values);
		},
		validateOnChange: false,
		validateOnBlur: true,
	});

	return (
		<Form onSubmit={formik.handleSubmit} flexDirection='row'>
			<InputGroup
				label='New topic'
				name='text'
				type='text'
				value={formik.values.text}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			<Button type='submit' content='Create' disabled={formik.isSubmitting} />
		</Form>
	);
};

export default CreatePostsForm;
