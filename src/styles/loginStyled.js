import styled from 'styled-components';
export const FormStyled = styled.form`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	justify-content: center;
	max-width: 600px;
	border-radius: 1em;
	/* border: 1px solid var(--clr-middle);
	box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.15);*/
	padding: 1em 2em;
	label {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 1em;
		span {
			margin-bottom: 0.5em;
			font-weight: 600;
		}
		input {
			flex: 1;
			border: 1px solid var(--clr-primary);
			padding: 1em 2em;
			border-radius: 1em;
			&:focus {
				outline: none;
				box-shadow: 0 0 1px 1px var(--clr-secondary);
			}
		}
	}

	button {
		margin: 1em;
		padding: 1em 4em;
		color: var(--clr-text);
		font-weight: 600;
		background-color: var(--clr-white);
		border: 1px solid var(--clr-primary);
		border-radius: 2em;
		min-width: 150px;
		cursor: pointer;
		box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.15);
		transition: transform 25ms ease, box-shadow 25ms ease;
		&:hover {
			transform: scale(1.05);
			color: var(--clr-white);
			background-color: var(--clr-secondary);
		}
		&:active {
			transform: scale(0.95);
			box-shadow: none !important;
		}
		&:focus {
			outline: none;
			box-shadow: 0 0 1px 1px var(--clr-secondary);
		}
	}
`;
