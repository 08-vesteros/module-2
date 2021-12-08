import styled from 'styled-components';
import {
	BORDER,
	DARK_GREY,
	DARK_PRIMARY_COLOR,
	PRIMARY_COLOR,
} from '../../constants';
import { ButtonWrapper } from '../Button/styled';

export const PostsTable = styled.table`
	width: 100%;
	border-collapse: collapse;

	tr {
		border-bottom: ${BORDER};
	}

	th,
	td {
		padding: 5px;
	}
`;

export const Body = styled.tbody`
	.topic-title {
		display: block;
		color: ${DARK_PRIMARY_COLOR};
		text-decoration: none;
		font-size: 20px;
		margin: 5px 0;

		:hover {
			color: ${PRIMARY_COLOR};
			text-decoration: underline;
		}
	}

	.topic-meta {
		margin: 5px 0;
		color: ${DARK_GREY};
		font-size: 12px;
	}

	.replies-count {
		font-size: 18px;
		text-align: center;
	}
`;

export const FormWrapper = styled.div`
	margin-bottom: 30px;
`;

export const Head = styled.thead`
	.topic {
		text-align: left;
	}
`;
