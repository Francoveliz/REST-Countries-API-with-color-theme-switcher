import styled from "styled-components";
import { ReactComponent as LoupeIcon } from "../../../../assets/images/search.svg";

export const SearchBarContainer = styled.form`
	display: flex;
	align-items: center;
	margin: 0 1rem 1rem;
	height: 3rem;
	background-color: ${props => props.theme.elements};
	border: none;
	color: #fff;
	padding: 0 2rem;
	border-radius: 5px;
`;

export const SearchBarElement = styled.input.attrs({
	type: "text",
})`
	outline: none;
	background-color: ${props => props.theme.elements};
	border: none;
	color: #fff;
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
`;
