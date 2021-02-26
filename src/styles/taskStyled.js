import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const TaskStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 3em;
	form {
		width: 100%;
		margin: 0 auto;
		max-width: 800px;
		display: flex;
		border-radius: 0.4em;
		&:focus-within {
			box-shadow: 0 0 1px 1px var(--clr-secondary);
		}
	}
	input {
		flex: 1;
		width: '80%';
		background-color: var(--clr-white);
		font-size: 1em;
		padding: 0.5em 1em;
		border: 1px solid var(--clr-primary);
		border-top-left-radius: 0.4em;
		border-bottom-left-radius: 0.4em;
		&:focus {
			outline: none;
			box-shadow: 0 0 1px 1px var(--clr-secondary);
		}
	}
	button {
		background-color: var(--clr-white);
		font-size: 1em;
		padding: 0.5em 1em;
		border: 1px solid var(--clr-primary);
		border-top-right-radius: 0.4em;
		border-bottom-right-radius: 0.4em;
		color: var(--clr-text);
		border-left: 0;
		cursor: pointer;
		transition: color 0.2s ease-in-out;

		&:hover {
			color: var(--clr-secondary);
		}

		&:focus {
			outline: none;
			box-shadow: 0 0 1px 1px var(--clr-secondary);
		}
	}
	ul {
		width: 100%;
		margin: 2em auto 0;
		max-width: 800px;
		span {
			font-weight: 600;
		}
		li {
			padding: 1em 0;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid var(--clr-middle-2);
		}
		li:last-child {
			border-bottom: none;
		}
	}
	.completed {
		color: var(--clr-middle);
		text-decoration: line-through;
	}
`;

export const SVGTask = styled(SVG)`
	fill: ${({ color }) => color || 'var(--clr-text)'};
	width: 16px;
	height: 16px;
	margin-right: 1.5em;
	transition: transform 0.2s ease;
	cursor: pointer;
	&:hover {
		transform: scale(1.2);
	}
	&:active {
		transform: scale(0.9);
	}
`;

export const TasksEditStyled = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 2em;
	input {
		width: 100%;
		margin: 2em auto 0;
		max-width: 800px;
		background-color: var(--clr-white);
		font-size: 1em;
		padding: 0.5em 1em;
		border: 1px solid var(--clr-primary);
		border-radius: 0.4em;
		&:focus {
			outline: none;
			box-shadow: 0 0 1px 1px var(--clr-secondary);
		}
	}
	& > div {
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
