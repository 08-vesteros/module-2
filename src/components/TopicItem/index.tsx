import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BORDER } from '../../constants';
import { Props } from './types';

export const TopicContainer = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
	width: 100%;

	li {
		padding: 12px 0;
		border-bottom: ${BORDER};
	}
`;

export const TopicItem = ({ data }: Props) => {
	console.log('asd');

	return (
		<TopicContainer>
			{data.map(item => (
				<li key={item.id}>
					<Link to={`forum/${item.id}`}>{item.title}</Link>
				</li>
			))}
		</TopicContainer>
	);
};
