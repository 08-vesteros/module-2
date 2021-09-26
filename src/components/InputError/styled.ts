import styled from 'styled-components';
import { InputErrorProps } from './types';

export const InputErrorWrapper = styled.div<InputErrorProps>`
	display: ${props => (props.touched && props.error ? 'block' : 'none')};
`;
