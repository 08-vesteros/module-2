import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import ScoreboardItem from '../../components/ScoreboardItem';
import { ScoreDataProps } from '../../components/ScoreboardItem/types';
import { data } from './mock';
import { List, Wrapper } from './styled';

const Scoreboard: FC = () => {
	const [userScoreData] = useState<ScoreDataProps[]>(data);
	const sortedData = userScoreData.sort((a, b) => b.score - a.score);
	const history = useHistory();

	const handleClick = () => {
		history.push('/game');
	};
	return (
		<Wrapper>
			<Button content='Try again' onClick={handleClick} />
			<List>
				{sortedData.map((item, index) => (
					<ScoreboardItem key={item.login} userData={item} position={index + 1} />
				))}
			</List>
		</Wrapper>
	);
};

Scoreboard.displayName = 'Scoreboard';

export default Scoreboard;
