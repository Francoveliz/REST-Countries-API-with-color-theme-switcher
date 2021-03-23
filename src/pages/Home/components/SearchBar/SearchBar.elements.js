import styled from "styled-components";
import { ReactComponent as LoupeIcon } from "../../../../assets/images/search.svg";
import { device } from "../../../../assets/style/device";

export const SearchBarContainer = styled.form`
	display: flex;
	align-items: center;
	height: 3rem;
	background-color: ${props => props.theme.elements};
	border: none;
	color: #fff;
	padding: 0 2rem;
	border-radius: 5px;
	@media${device.desktop} {
		min-width: 30rem;
		width: 30%;
	}
`;

export const SearchBarElement = styled.input.attrs({
	type: "text",
})`
	outline: none;
	background-color: ${props => props.theme.elements};
	border: none;
	color: ${props => props.theme.text};
	width: 100%;
	align-self: stretch;

	&::placeholder {
		color: ${props => props.theme.inputText};
	}
`;

export const Loupe = styled(LoupeIcon)`
	height: 1rem;
	width: 1rem;
	fill: ${props => props.theme.text};
	margin-right: 1.5rem;
	cursor: pointer;
`;
