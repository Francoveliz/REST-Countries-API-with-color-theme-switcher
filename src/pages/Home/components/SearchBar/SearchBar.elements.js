import styled from "styled-components";

export const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 0 1rem 1rem;
	height: 3rem;
	background-color: hsl(209, 23%, 22%);
	border: none;
	color: #fff;
	padding: 0 2rem;
	border-radius: 5px;
`;

export const SearchBarElement = styled.input.attrs({
	type: "text",
})`
	outline: none;
	background-color: hsl(209, 23%, 22%);
	border: none;
	color: #fff;
	width: 100%;
	align-self: stretch;

	&::placeholder {
		color: #fff;
	}
`;

export const SearchIcon = styled.img`
	height: 1rem;
	margin-right: 1.5rem;
`;
