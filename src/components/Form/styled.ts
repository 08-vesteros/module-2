import styled from 'styled-components';
import { ButtonWrapper } from '../Button/styled';

export const FormWrapper = styled.form<{ flexDirection?: string }>`
	display: flex;
	flex-direction: ${props => props.flexDirection || 'column'};
	align-items: center;

	${ButtonWrapper} {
		margin: 10px;
	}
`;
