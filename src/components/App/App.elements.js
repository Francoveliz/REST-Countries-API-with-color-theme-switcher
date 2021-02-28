import styled from "styled-components";

export const AppContainer = styled.div`
	background-color: ${props => props.theme.background};
	height: 100%;
	min-height: 100vh;
	color: ${props => props.theme.text};
	min-width: 100vw;
`;
