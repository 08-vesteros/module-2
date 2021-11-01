import React from 'react';
import { ListItem } from './styled';
import { ScoreboardItemProps } from './types';

const ScoreboardItem = ({ userData, position }: ScoreboardItemProps) => {
	const { name, vesterosScore } = userData.data;

	return (
		<ListItem>
			<span className='listItem__position'>{position}</span>
			<span className='listItem__name'>{name}</span>
			<span className='listItem__score'>{vesterosScore}</span>
		</ListItem>
	);
};

export default ScoreboardItem;
