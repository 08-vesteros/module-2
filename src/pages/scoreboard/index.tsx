import React, { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getLeaderBoard } from '../../utils/leaderboard';
import Button from '../../components/Button';
import ScoreboardItem from '../../components/ScoreboardItem';
import { ScoreDataProps } from '../../components/ScoreboardItem/types';
import { List, Wrapper } from './styled';

const Scoreboard: FC = () => {
	const [usersScoreData, setUsersScoreData] = useState<ScoreDataProps[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const sortedData = usersScoreData.sort(
		(a, b) => b.data.vesterosScore - a.data.vesterosScore
	);
	const history = useHistory();

	useEffect(() => {
		setIsLoading(true);
		const options = {
			ratingFieldName: 'vesterosScore',
			cursor: 0,
			limit: 10,
		};
		getLeaderBoard(options).then(response => {
			if (response.status === 200) {
				setUsersScoreData(response.data);
			}
			setIsLoading(false);
		});
	}, []);

	const handleClick = () => {
		history.push('/game');
	};

	return (
		<Wrapper>
			<Button content='Try again' onClick={handleClick} />
			{usersScoreData.length ? (
				<List>
					{sortedData.map((item, index) => (
						<ScoreboardItem
							key={item.data.name}
							userData={item}
							position={index + 1}
						/>
					))}
				</List>
			) : (
				!isLoading && 'Be the first leader of scoreboard'
			)}
		</Wrapper>
	);
};

Scoreboard.displayName = 'Scoreboard';

export default Scoreboard;
