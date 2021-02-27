import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const Badge = styled.span`
	display: inline-block;
	min-width: ${({ minWidth }) => minWidth || '175px'};
	margin: ${({ margin }) => margin || 'none'};
	padding: ${({ padding }) => padding || '0.7em 1.2em'};
	font-size: 0.75em;
	font-weight: 900;
	text-align: center;
	color: var(--clr-white);
	border-radius: 10em;

	&.error {
		background-color: var(--clr-error);
	}
	&.secondary {
		background-color: var(--clr-secondary);
	}
`;

export const Flex = styled.div`
	display: flex;
	justify-content: ${({ justify }) => justify || 'flex-start'};
	align-items: ${({ align }) => align || 'stretch'};
	flex-direction: ${({ direction }) => direction || 'row'};
	min-height: 100vh;
`;

export const ModalContainer = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	text-align: center;
	.modal {
		margin: 0 1em;
		background-color: #fafafa;
		max-width: 600px;
		max-height: 600px;
		border-radius: 2em;
		box-shadow: 0 5px 10px 2px rgba(195, 192, 192, 0.5);
		padding: 4em;
		span {
			font-weight: 600;
		}
		& > div {
			margin-top: 1em;
		button {
			margin: 1em;
			background-color: var(--clr-white);
			font-size: 1em;
			padding: 0.5em 1em;
			border-radius: 0.4em;
			color: var(--clr-text);
			cursor: pointer;
			transition: color 0.2s ease-in-out;

			&:hover {
				transform: scale(1.1);
				color: var(--clr-text);
			}
			&:active {
				transform: scale(0.9);
				box-shadow: none !important;
			}
			&:focus {
				outline: none;
			}

			&.primary {
				border: 1px solid var(--clr-primary);
				&:hover {
					background-color: var(--clr-secondary);
				}
				&:focus {
					box-shadow: 0 0 1px 1px var(--clr-secondary);
				}
			}
			&.cancel {
				border: 1px solid var(--clr-error);
				&:hover {
					background-color: var(--clr-error);
				}
				&:focus {
					box-shadow: 0 0 1px 1px var(--clr-error);
				}
			}
		}
	}
`;

export const SVGSpinner = styled(SVG)`
	color: var(--clr-text);
	animation: spinner 2s linear infinite;

	@keyframes spinner {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
