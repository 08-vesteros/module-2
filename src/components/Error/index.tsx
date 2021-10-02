import React, { useCallback, useContext, MouseEvent } from 'react';
import ErrorContext from '../../contexts/error';
import { ErrorWrapper } from './styled';
import Button from '../Button';

const ErrorModal = () => {
	const { error, setError } = useContext(ErrorContext);
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
