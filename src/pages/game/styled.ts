import styled from 'styled-components';

export const Canvas = styled.canvas`
	outline: none;
	/* background-color: #f7f7f7; */
	background-color: ${({ theme }) => theme.canvasColor};
	border: ${({ theme }) => theme.borderCanvas};
	color: ${({ theme }) => theme.color};
`;
