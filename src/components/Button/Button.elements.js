import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
	color: inherit;
	text-decoration: none;
	border-radius: 5px;
	background-color: ${props => props.theme.elements};
	padding: 0.5rem 1.5rem;
	display: flex;
	align-items: center;
`;
