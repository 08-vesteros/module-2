import styled from 'styled-components';
import { INPUT_BORDER_COLOR } from '../../constants';

export const InputWrapper = styled.input`
	font-size: 18px;
	padding: 10px;
	margin: 10px;
	background-color: transparent;
	border: 1px solid ${INPUT_BORDER_COLOR};
	border-radius: 10px;
	color: ${({ theme }) => theme.inputColor};
`;
