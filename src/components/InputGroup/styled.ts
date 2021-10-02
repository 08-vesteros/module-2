import styled from 'styled-components';
import { InputWrapper } from '../Input/styled';
import { InputErrorWrapper } from '../InputError/styled';
import { DARK_PRIMARY_COLOR, RED_COLOR, WHITE_COLOR } from '../../constants';

export const InputGroupWrapper = styled.div`
	position: relative;
	width: 100%;
	max-width: 350px;

	${InputErrorWrapper} {
		white-space: pre-line;
		color: ${RED_COLOR};
		margin-bottom: 10px;
		padding: 0 20px;
		font-size: 14px;
	}

	.input {
		display: flex;
		position: relative;

		&__label {
			position: absolute;
			background-color: ${WHITE_COLOR};
			color: ${DARK_PRIMARY_COLOR};
			left: 20px;
			top: 1px;
			transition: 0.2s;
			font-size: 16px;
			padding: 0 5px;
			cursor: text;
		}
	}

	${InputWrapper} {
		outline: none;
		width: 100%;

		&[value='']:not(input:focus) {
			& + .input__label {
				font-size: 18px;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
`;
