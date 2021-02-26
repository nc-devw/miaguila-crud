import styled from 'styled-components';

export const UserStyled = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	ul {
		list-style: none;
		li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1em;
			text-align: center;
			width: 800px;
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
				flex: 1;
			}
		}
	}
`;
