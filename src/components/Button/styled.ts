import styled from 'styled-components';
import {
	PRIMARY_COLOR,
	DARK_PRIMARY_COLOR,
	BLACK_COLOR,
	WHITE_COLOR,
} from '../../constants';
import { ButtonWrapperProps } from './types';

export const inGameButtonTheme = {
	backgroundColor: PRIMARY_COLOR,
	border: `2px solid ${PRIMARY_COLOR}`,
	backgroundColorHover: DARK_PRIMARY_COLOR,
	color: WHITE_COLOR,
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
	cursor: pointer;
	border-radius: 8px;
	background-color: ${props => props.theme.backgroundColor || 'transparent'};
	border: ${props => props.theme.border || `2px solid ${PRIMARY_COLOR}`};
	color: ${props => props.theme.color || BLACK_COLOR};
	padding: ${props => props.theme.padding || '12px 0'};
	margin: ${props => props.theme.margin || '0 0 24px 0'};
	width: ${props => props.theme.width || '180px'};
	opacity: ${props => (props.disabled ? 0.3 : 1)};
	pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
	font-size: 16px;

	&:hover {
		background-color: ${props =>
			props.theme.backgroundColorHover || PRIMARY_COLOR};
		color: ${props => props.theme.colorHover || WHITE_COLOR};
		transition: all 0.3s;
	}
`;
