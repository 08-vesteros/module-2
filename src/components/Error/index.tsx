import React, { useCallback, MouseEvent } from 'react';
import { ErrorWrapper } from './styled';
import Button from '../Button';
import useError from '../../contexts/error';

const ErrorModal = () => {
	const { error, setError } = useError();
	const hideError = useCallback(
		(e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
			if (e.currentTarget !== e.target) return;
			setError('');
		},
		[error]
	);

	return (
		<ErrorWrapper hidden={!error} onClick={hideError}>
			<div className='error__dialog'>
				<p className='error__text'>{error}</p>
				<Button onClick={hideError} content='Ok' />
			</div>
		</ErrorWrapper>
	);
};

export default ErrorModal;
