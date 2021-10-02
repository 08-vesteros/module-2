import styled from 'styled-components';

export const AvatarWrapper = styled.form`
	.avatar {
		margin: 10px auto 20px;
		display: block;
		width: 130px;
		height: 130px;
		border: solid 1px #ccc;
		border-radius: 50%;
		position: relative;
		cursor: pointer;
		overflow: hidden;

		&__img {
			height: 100%;
			object-fit: cover;
			object-position: center;
		}

		&:hover {
			.avatar__change {
				top: 0;
			}
		}

		&__change {
			position: absolute;
			text-align: center;
			color: #fff;
			top: 100%;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			display: flex;
			transition: 0.3s;

			&::before {
				content: 'Change profile photo';
				margin: auto;
			}
		}
	}
`;
