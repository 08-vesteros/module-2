import styled from 'styled-components';
import { DARK_PRIMARY_COLOR } from '../../constants';

export const CommentsContainer = styled.ul`
	list-style-type: none;
	margin-bottom: 30px;
	padding: 0;
	width: 100%;

	.list__name {
		margin-bottom: 10px;
		color: ${DARK_PRIMARY_COLOR};
	}
`;
