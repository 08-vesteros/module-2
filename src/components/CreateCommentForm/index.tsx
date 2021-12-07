import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Button from '../Button';
import InputGroup from '../InputGroup';
import { initialValues, Props } from './types';
import EmojiPicker from '../Emoji';
import { addMessage } from '../../utils/message';
import useTypedSelector from '../../store/selectors/typedSelector';
import { setWarn } from '../../store/reducers/warn';
import { CreateCommentStyled } from './styled';

const CreateCommentForm = ({
	setUpdated,
	postId,
	parentId,
	setIsReply,
}: Props) => {
	const { item } = useTypedSelector(state => state.user);
	const user = item!;
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues,
		onSubmit: async values => {
			const res = await addMessage({
				text: values.text,
				userId: `${user.id}`,
				userName: user.display_name || user.login,
				parentId: parentId!,
				postId,
			});

			if (res.status !== 200) {
				dispatch(setWarn(res.data.reason));
				return;
			}
			formik.setFieldValue('text', '');
			setUpdated(true);
		},
		validateOnChange: false,
		validateOnBlur: true,
	});

	const onEmojiSelect = useCallback(
		emoji => {
			formik.setFieldValue('text', formik.values.text + emoji.native);
		},
		[formik.values.text]
	);

	return (
		<CreateCommentStyled onSubmit={formik.handleSubmit} flexDirection='row'>
			<InputGroup
				label='New comment'
				name='text'
				type='text'
				value={formik.values.text}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			<EmojiPicker onSelect={onEmojiSelect} />
			<Button type='submit' content='Send' disabled={formik.isSubmitting} />
			{parentId && setIsReply && (
				<button
					className='close-form'
					onClick={() => setIsReply(false)}
					type='button'
				>
					×
				</button>
			)}
		</CreateCommentStyled>
	);
};

export default CreateCommentForm;
