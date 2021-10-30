import React, { FC, useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import { addUserLeaderBoard, getLeaderBoard } from '../../utils/leaderboard';
import Button from '../../components/Button';
import ScoreboardItem from '../../components/ScoreboardItem';
import { ScoreDataProps } from '../../components/ScoreboardItem/types';
import { data } from './mock';
import { List, Wrapper } from './styled';
import { TEAM_NAME } from '../../constants/index';

const Scoreboard: FC = () => {
	const [userScoreData] = useState<ScoreDataProps[]>(data);
	const sortedData = userScoreData.sort((a, b) => b.score - a.score);
	// const history = useHistory();

	useEffect(() => {
		const options = {
			ratingFieldName: 'vesterosScore',
			cursor: 0,
			limit: 10,
		};
		getLeaderBoard(options);
	}, []);

	const sendUser = () => {
		const options = {
			data: {
				name: 'playerName9',
				vesterosScore: 669,
				id: 2,
			},
			ratingFieldName: 'vesterosScore',
			teamName: TEAM_NAME,
		};
		addUserLeaderBoard(options);
	};

	// const handleClick = () => {
	// 	history.push('/game');
	// };
	return (
		<Wrapper>
			<Button content='Try again' onClick={sendUser} />
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
