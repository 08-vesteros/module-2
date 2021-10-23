import React, { useCallback, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { WarnWrapper } from './styled';
import Button from '../Button';
import { setWarn } from '../../store/reducers/warn';
import useTypedSelector from '../../store/selectors/typedSelector';

const WarnModal = () => {
	const dispatch = useDispatch();
	const { item: warn } = useTypedSelector(state => state.warn);
	const hideWarn = useCallback(
		(e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
			if (e.currentTarget !== e.target) return;
			dispatch(setWarn(''));
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
