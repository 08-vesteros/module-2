import React, { FC, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import { TopicItem } from '../../components/TopicItem';
import { TopicTypes } from '../../components/TopicItem/types';
import { BORDER } from '../../constants';
import { Wrapper } from '../../ui/wrapper';
import { topicMockData } from './mock';

export const Header = styled.div`
	width: 100%;
	border-bottom: ${BORDER};
	padding-bottom: 10px;
	display: flex;

	span {
		display: block;
	}

	.header__topic {
		width: 80%;
	}
`;

const Forum: FC = () => {
	const [topic] = useState<TopicTypes[]>(topicMockData);

	const handleClick = () => {
		console.log('create new topic');
	};

	const Topics = () => (
		<Switch>
			<Route path='/forum'>
				<TopicItem data={topic} />
			</Route>
			<Route path='/forum/:number'>
				<TopicItem data={topic} />
			</Route>
		</Switch>
	);

	return (
		<Wrapper alignItems='flex-start'>
			<Button content='New topic' onClick={handleClick} />
			{!!topic.length && (
				<>
					<Header>
						<span className='header__topic'>Topic</span>
						<span>Replies</span>
					</Header>
					<Topics />
				</>
			)}
		</Wrapper>
	);
};

export default Forum;
