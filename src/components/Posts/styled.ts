import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BORDER, DARK_PRIMARY_COLOR, WHITE_COLOR } from '../../constants';
import { ButtonWrapper } from '../Button/styled';

export const PostsContainer = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0 0 30px 0;
	width: 100%;

	li {
		padding: 0;
		border-bottom: ${BORDER};
	}
`;

export const ListItem = styled(Link)`
	color: ${DARK_PRIMARY_COLOR};
	text-decoration: none;
	text-decoration: none;
	font-size: 20px;
	font-family: sans-serif;
	cursor: pointer;
	display: block;
	padding: 10px 0;

	:hover {
		background-color: ${DARK_PRIMARY_COLOR};
		color: ${WHITE_COLOR};
		transition: all 0.3s;
	}
`;

export const FormWrapper = styled.div`
	margin-bottom: 30px;
	${ButtonWrapper} {
		margin: 10px 0 0 0;
	}

	input {
		margin: 10px 10px 0 0;
	}
`;

export const Header = styled.div`
	width: 100%;
	border-bottom: ${BORDER};
	padding-bottom: 10px;
	display: flex;

	span {
		display: block;
	}

	.header__topic {
		width: 80%;
	}
`;
