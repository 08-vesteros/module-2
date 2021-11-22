import styled from 'styled-components';
import { DARK_PRIMARY_COLOR } from '../../constants';

export const ListItem = styled.li`
	display: flex;
	padding: 10px;
	border-left: 2px solid ${DARK_PRIMARY_COLOR};
	border-right: 2px solid ${DARK_PRIMARY_COLOR};
	border-top: 2px solid ${DARK_PRIMARY_COLOR};
	&:last-child {
		border-bottom: 2px solid ${DARK_PRIMARY_COLOR};
	}

	span {
		display: block;
	}

	.listItem__position {
		width: 30%;
	}

	.listItem__score {
		margin-left: auto;
	}
`;
