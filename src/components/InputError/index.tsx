import React from 'react';
import { InputErrorWrapper } from './styled';
import { Props } from './types';

const InputError = ({ touched, error }: Props) => (
	<InputErrorWrapper {...{ touched, error }}>{error}</InputErrorWrapper>
);

export default InputError;
