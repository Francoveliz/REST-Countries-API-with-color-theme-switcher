import styled from "styled-components";
import { ReactComponent as Moon } from "../../../../assets/images/moon.svg";

export const MoonIcon = styled.svg``;

export const DarkModeContainer = styled.div`
	margin: 0;
	display: flex;
	align-items: center;
`;

export const StyledMoon = styled(Moon)`
	height: 1rem;
	width: 1rem;
	fill: ${props => props.theme.text};
	margin-right: 0.5rem;
`;
