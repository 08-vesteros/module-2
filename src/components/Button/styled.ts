import styled from 'styled-components';
import { RED_COLOR } from '../../constants';
import { ButtonWrapperProps } from './types';

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
	cursor: pointer;
	background-color: ${props => props.view};
	border: ${props => props.border || `2px solid ${RED_COLOR}`};
	color: ${props => props.color || 'black'};
	padding: ${props => props.padding || '12px 0'};
	margin: ${props => props.margin || 0};
	width: ${props => props.width || '180px'};
	opacity: ${props => (props.disabled ? 0.3 : 1)};
	pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

	&:hover {
		background-color: ${props => props.backgroundColorHover || RED_COLOR};
		color: ${props => props.color || 'black'};
		transition: all 0.3s;
	}
`;
