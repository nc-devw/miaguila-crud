import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const Badge = styled.span`
	display: inline-block;
	min-width: 175px;
	margin-top: 1em;
	padding: 0.7em 1.2em;
	font-size: 0.75em;
	font-weight: 900;
	text-align: center;
	color: var(--clr-white);
	border-radius: 10em;

	&.warning {
		background-color: var(--clr-warning);
	}

	&.error {
		background-color: var(--clr-error);
	}

	&.success {
		background-color: var(--clr-success);
	}

	&.secondary {
		background-color: var(--clr-secondary);
	}

	&.dark {
		background-color: var(--clr-dark);
	}

	&.small {
		width: 50px;
	}
`;

export const ContainerFullView = styled.div`
	display: flex;
	justify-content: ${({ justify }) => justify || 'flex-start'};
	align-items: ${({ align }) => align || 'stretch'};
	height: 100vh;
`;

export const SVGSpinner = styled(SVG)`
	color: var(--clr-dark);
	fill: var(--clr-dark);
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
