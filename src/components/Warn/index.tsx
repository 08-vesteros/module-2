import React, { useCallback, MouseEvent } from 'react';
import { WarnWrapper } from './styled';
import Button from '../Button';
import useWarn from '../../contexts/warn';

const WarnModal = () => {
	const { warn, setWarn } = useWarn();
	const hideWarn = useCallback(
		(e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
			if (e.currentTarget !== e.target) return;
			setWarn('');
		},
		[warn]
	);

	return (
		<WarnWrapper hidden={!warn} onClick={hideWarn}>
			<div className='warn__dialog'>
				<p className='warn__text'>{warn}</p>
				<Button onClick={hideWarn} content='Ok' />
			</div>
		</WarnWrapper>
	);
};

export default WarnModal;
