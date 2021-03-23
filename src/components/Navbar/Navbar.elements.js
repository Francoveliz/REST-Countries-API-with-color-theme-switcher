import styled from "styled-components";

export const Nav = styled.nav`
	display: flex;
	background-color: ${props => props.theme.elements};
	padding: 2rem 0;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`;

export const Logo = styled.h1`
	font-size: 1.2rem;
	font-weight: 600;
	margin: 0;
`;
