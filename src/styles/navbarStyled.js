import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const NavbarStyled = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.5em;

	h2 {
		text-transform: capitalize;
	}

	.nav__right {
		display: flex;
		align-items: center;
		.user {
			display: flex;
			align-items: center;
			.user__notification {
				display: inline-block;
				position: relative;
				height: 18px;
				margin-right: 1em;
				span {
					position: absolute;
					top: -12px;
					right: -10px;
					padding: 0.25em 0.5em;
					font-size: 0.8em;
					font-weight: 600;
					background-color: #3751ff;
					border-radius: 50%;
					color: var(--clr-white);
				}
			}
			.user__profile {
				display: flex;
				align-items: center;
				padding: 0em 1em;
				border-left: 1px solid var(--clr-middle-2);
				span {
					font-size: 14px;
					font-weight: 600;
					margin-right: 1em;
				}
				.user__profile-img {
					border-radius: 50%;
					overflow: hidden;
					width: 40px;
					height: 40px;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
`;

export const SVGNavbar = styled(SVG)`
	color: var(--clr-middle);
	width: 22px;
	height: 22px;
	cursor: pointer;
	&:hover {
		color: var(--clr-white);
	}
`;
