import styled from 'styled-components';
import {
	BORDER,
	DARK_PRIMARY_COLOR,
	PRIMARY_COLOR,
	WHITE_COLOR,
} from '../../constants';

export const HeaderWrapper = styled.header`
	.nav {
		display: flex;
		border-bottom: ${BORDER};

		&__link {
			padding: 15px;
			flex: 1 100%;
			text-align: center;
			color: ${DARK_PRIMARY_COLOR};
			font-weight: 600;
			text-decoration: none;
			transition: 0.3s;

			& + .nav__link {
				border-left: ${BORDER};
			}

			&--active,
			:hover {
				color: ${WHITE_COLOR};
			}

			&--active {
				background-color: ${PRIMARY_COLOR};
			}
			:hover {
				background-color: ${DARK_PRIMARY_COLOR};
			}
		}
	}
`;
