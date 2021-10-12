import React from 'react';
import { ListItem } from './styled';
import { ScoreboardItemProps } from './types';

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
