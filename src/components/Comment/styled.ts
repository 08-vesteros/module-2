import styled from 'styled-components';
import { BORDER, DARK_PRIMARY_COLOR } from '../../constants';

export const CommentStyled = styled.li`
	display: flex;
	flex-direction: column;
	border-bottom: ${BORDER};
	padding: 10px;
	transition: background 0.5s;

	&.reply {
		margin-left: 30px;

		.reply-link {
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.comment-meta {
		margin: 10px 0;
	}

	.author {
		color: ${DARK_PRIMARY_COLOR};
	}

	.reply-link {
		font-size: 12px;
		margin: 12px;
	}

	.reply-btn {
		background: #eee;
		border: none;
		border-radius: 5px;
		padding: 4px 8px;
		cursor: pointer;

		&:hover {
			color: ${DARK_PRIMARY_COLOR};
		}
	}
`;
