import styled from "styled-components";

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

export const SearchIcon = styled.img`
	height: 1rem;
	margin-right: 1.5rem;
`;
