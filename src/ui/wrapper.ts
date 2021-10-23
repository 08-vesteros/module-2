import styled from 'styled-components';

export const Wrapper = styled.div<{ alignItems?: string }>`
	display: flex;
	align-items: ${props => props.alignItems || 'center'};
	flex-direction: column;
	padding: 10vw 0;
	font-size: 20px;
`;
