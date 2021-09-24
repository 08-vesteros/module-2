import React from 'react';
import { ButtonWrapper } from './styled';
import { Props } from './types';

const Button = ({ content, ...props }: Props) => (
	<ButtonWrapper {...props}>{content}</ButtonWrapper>
);

export default Button;
