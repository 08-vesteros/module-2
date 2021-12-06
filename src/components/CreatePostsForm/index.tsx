import { useFormik } from 'formik';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Form';
import Button from '../Button';
import InputGroup from '../InputGroup';
import { initialValues, Props } from './types';
import useTypedSelector from '../../store/selectors/typedSelector';
import { setWarn } from '../../store/reducers/warn';
import { addPost } from '../../utils/post';
import { TFieldValues } from '../../utils/types';
import { isEmpty } from '../../utils/validators';
import EmojiPicker from '../Emoji';

const CreatePostsForm = ({ setUpdated }: Props) => {
	const { item } = useTypedSelector(state => state.user);
	const user = item!;
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues,
		onSubmit: async values => {
			const res = await addPost({
				topic: values.text,
				userId: `${user.id}`,
				userName: user.display_name || user.login,
			});

			if (res.status !== 200) {
				dispatch(setWarn(res.data.reason));
				return;
			}
			formik.setFieldValue('text', '');
			setUpdated(true);
		},
		enableReinitialize: true,
		validateOnChange: false,
		validateOnBlur: false,
		validate: (values: TFieldValues) => {
			const errors: TFieldValues = {};

			if (isEmpty(values.text)) {
				errors.text = 'Required';
			}
			return errors;
		},
	});

	const onEmojiSelect = useCallback(
		emoji => {
			formik.setFieldValue('text', formik.values.text + emoji.native);
		},
		[formik.values.text]
	);

	return (
		<Form onSubmit={formik.handleSubmit} flexDirection='row'>
			<InputGroup
				label='New topic'
				name='text'
				type='text'
				value={formik.values.text}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.errors.text}
			/>
			<EmojiPicker onSelect={onEmojiSelect} />
			<Button type='submit' content='Create' disabled={formik.isSubmitting} />
		</Form>
	);
};

export default CreatePostsForm;
