import React from 'react';
import { ButtonContainerWrapper } from './styled';

const ButtonContainer: React.FC = ({ children }) => (
	<ButtonContainerWrapper>{children}</ButtonContainerWrapper>
);
export default ButtonContainer;
