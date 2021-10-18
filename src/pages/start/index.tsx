import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import { Wrapper } from '../../ui/wrapper';
import { Description } from './styled';

const Start = () => {
	const history = useHistory();

	const handleClick = () => {
		history.push('/game');
	};

	return (
		<Wrapper>
			<Description>
				Use <b>&quot;Space&quot;</b> to control the dino. Try to score the maximum
				points.
			</Description>
			<Button onClick={handleClick} content='Start Game' />
		</Wrapper>
	);
};

Start.displayName = 'Play';

export default Start;
