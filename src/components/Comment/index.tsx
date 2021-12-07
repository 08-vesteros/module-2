import React, { useCallback, useState } from 'react';
import { CommentStyled } from './styled';
import { toLocalDateTime } from '../../utils/globalFunctions';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../constants';
import CreateCommentForm from '../CreateCommentForm';
import { Props } from './types';

const Comment = (data: Props) => {
	const [isReply, setIsReply] = useState<boolean>(false);

	const scroll = useCallback((id: string) => {
		const com: HTMLElement = document.querySelector(id)!;
		if (com) {
			com.scrollIntoView({ behavior: 'smooth', block: 'start' });
			com.style.backgroundColor = PRIMARY_COLOR;
			setTimeout(() => {
				com.style.backgroundColor = WHITE_COLOR;
			}, 200);
		}
	}, []);

	return (
		<CommentStyled
			id={`comment-${data.id}`}
			className={data.parentid ? 'reply' : 'thread'}
		>
			<p className='comment-meta'>
				<span className='author'>{data.userName}</span>
				<span
					className='reply-link'
					role='link'
					onClick={
						data.parentid ? () => scroll(`#comment-${data.parentid}`) : undefined
					}
				>
					{toLocalDateTime(data.createdAt)}
				</span>
				<button
					type='button'
					className='reply-btn'
					onClick={() => setIsReply(true)}
				>
					reply
				</button>
			</p>
			<p className='list__comment'>{data.text}</p>
			{isReply && (
				<CreateCommentForm
					postId={`${data.postId}`}
					setIsReply={setIsReply}
					setUpdated={data.setUpdated}
					parentId={`${data.id}`}
				/>
			)}
		</CommentStyled>
	);
};

export default Comment;
