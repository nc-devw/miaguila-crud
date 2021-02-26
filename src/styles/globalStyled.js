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
