import styled from "styled-components";

export const DropDownList = styled.select`
	background-color: hsl(209, 23%, 22%);
	color: #fff;
	height: 3rem;
	padding: 0 1.5rem;
	margin: 0 1rem;
	border-radius: 5px;
	outline: none;
	border: none;

	& > * {
		min-width: 100vw;
	}
`;
