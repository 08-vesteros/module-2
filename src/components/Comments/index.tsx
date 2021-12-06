import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Button from '../Button';
import CreateCommentForm from '../CreateCommentForm';
import { FormWrapper } from '../Posts/styled';
import { CommentsContainer } from './styled';
import { CommentsTypes, MatchTypes } from './types';
import { getPostMessages } from '../../utils/message';
import Comment from '../Comment';

const Comments = () => {
	const [comments, setComments] = useState<CommentsTypes[]>([]);
	const history = useHistory();
	const match = useRouteMatch<MatchTypes>();
	const [updated, setUpdated] = useState<boolean>(true);

	useEffect(() => {
		getPostMessages(match.params.id).then(res => {
			setComments(res.data);
			setUpdated(false);
		});
	}, [updated]);

	return (
		<>
			<Button content='go back' onClick={() => history.goBack()} />
			<CommentsContainer>
				{comments.length ? (
					comments.map(item => (
						<Comment {...item} setUpdated={setUpdated} key={item.id} />
					))
				) : (
					<span>No comments yet</span>
				)}
			</CommentsContainer>
			<FormWrapper>
				<CreateCommentForm setUpdated={setUpdated} postId={match.params.id} />
			</FormWrapper>
		</>
	);
};

export default Comments;
