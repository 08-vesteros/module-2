import styled from 'styled-components';
import { DARK_GREY, LIGHT_GREY, WHITE_COLOR } from '../../constants';
import Form from '../Form';

export const CreateCommentStyled = styled(Form)`
	.close-form {
		align-self: self-start;
		margin: 10px 0;
		background-color: ${LIGHT_GREY};
		border: none;
		font-size: 20px;
		cursor: pointer;
		border-radius: 50%;

		&:hover {
			color: ${WHITE_COLOR};
			background-color: ${DARK_GREY};
		}
	}
`;
