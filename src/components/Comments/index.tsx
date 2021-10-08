import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { commentsMockData } from '../../pages/forum/mock';
import Button from '../Button';
import CreateCommentForm from '../CreateCommentForm';
import { FormWrapper } from '../Posts/styled';
import { CommentsContainer } from './styled';
import { CommentsTypes, MatchTypes } from './types';

const Comments = () => {
	const [commentsData] = useState<CommentsTypes[]>(commentsMockData);
	const history = useHistory();
	const match = useRouteMatch<MatchTypes>();
	const filteredComments = commentsData.filter(
		item => item.postId === Number(match.params.id)
	);

	return (
		<>
			<Button content='go back' onClick={() => history.goBack()} />
			<CommentsContainer>
				{filteredComments.length ? (
					filteredComments.map(item => (
						<li key={item.commentId}>
							<span className='list__name'>{item.name}</span>
							<span className='list__comment'>{item.body}</span>
						</li>
					))
				) : (
					<span>No comments yet</span>
				)}
			</CommentsContainer>
			<FormWrapper>
				<CreateCommentForm />
			</FormWrapper>
		</>
	);
};

export default Comments;
