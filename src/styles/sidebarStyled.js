import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const SidebarStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 255px;
	background-color: var(--clr-dark);
	color: var(--clr-white);
	.title {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--clr-dark-2);
		height: 80px;
		font-weight: 700;
		font-family: 'Montserrat';
	}
	.title-logo {
		height: 35px;
		width: 35px;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 0.25em;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.menu {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		list-style: none;
		.active {
			border-left: 3px solid var(--clr-white);
			background-color: #3f4049;
			color: var(--clr-white);
			svg {
				color: var(--clr-white);
			}
		}
		a {
			text-align: left;
			width: 100%;
			padding: 1em 0 1em 1em;
			color: var(--clr-middle);
			cursor: pointer;
			border-left: 3px solid transparent;
			&:hover {
				background-color: #3f4049;
				color: var(--clr-white);
				svg {
					color: var(--clr-white);
				}
			}
		}
	}
	.settings {
		display: flex;
		align-items: center;
		border-top: 1px solid var(--clr-middle);
		height: 80px;
		padding-left: 1em;
		border-left: 3px solid transparent;
		cursor: pointer;

		span {
			color: var(--clr-middle);
		}

		&:hover {
			background-color: #3f4049;
			span,
			svg {
				color: var(--clr-white);
			}
		}
	}
`;

export const SVGMenu = styled(SVG)`
	color: var(--clr-middle);
	width: 16px;
	height: 16px;
	margin-right: 1.5em;
	&:hover {
		color: var(--clr-white);
	}
`;
