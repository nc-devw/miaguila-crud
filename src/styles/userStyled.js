import styled from 'styled-components';

export const UserStyled = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	.th {
		display: none;
	}
	ul {
		width: 100%;
		margin: 0 auto;
		max-width: 800px;
		list-style: none;
		li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1em;
			text-align: center;
			.name {
				flex: 1;
				font-weight: 600;
			}
			.phone {
				flex: 1;
			}
			.email {
				flex: 1;
			}
			.status {
				flex: 0 0 200px;
			}
		}
	}
	@media (max-width: 1000px) {
		ul {
			li {
				flex-direction: column;
				.status {
					flex: 0 0 auto;
				}
			}
		}
		.th {
			display: block;
		}
		.header {
			display: none;
		}
	}
`;
