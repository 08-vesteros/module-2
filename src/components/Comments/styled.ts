import styled from 'styled-components';
import { BORDER, DARK_PRIMARY_COLOR } from '../../constants';

export const CommentsContainer = styled.div`
	list-style-type: none;
	margin-bottom: 30px;

	li {
		display: flex;
		flex-direction: column;
		border-top: ${BORDER};
		padding: 10px;
	}

	.list__name {
		margin-bottom: 10px;
		color: ${DARK_PRIMARY_COLOR};
	}
`;
