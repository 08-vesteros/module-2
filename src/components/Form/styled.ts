import styled from 'styled-components';
import { ButtonWrapper } from '../Button/styled';

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	${ButtonWrapper} {
		margin-top: 30px;
	}
`;
