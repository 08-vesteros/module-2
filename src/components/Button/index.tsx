import React from 'react';
import { ButtonWrapper } from './styled';
import { ButtonTypes, Props } from './types';

const Button = ({ content, view = ButtonTypes.default }: Props) => (
	<ButtonWrapper view={view}>{content}</ButtonWrapper>
);

export default Button;
