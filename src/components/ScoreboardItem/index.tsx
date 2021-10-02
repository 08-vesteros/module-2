import React from 'react';
import styled from 'styled-components';
import { DARK_PRIMARY_COLOR } from '../../constants';
import { ScoreboardItemProps } from './types';

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

const ScoreboardItem = ({ userData, position }: ScoreboardItemProps) => {
	const { login, score } = userData;

	return (
		<ListItem>
			<span className='listItem__position'>{position}</span>
			<span className='listItem__name'>{login}</span>
			<span className='listItem__score'>{score}</span>
		</ListItem>
	);
};

export default ScoreboardItem;
