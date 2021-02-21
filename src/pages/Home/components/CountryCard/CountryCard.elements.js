import styled from "styled-components";
import { Link } from "react-router-dom";

export const CountryCardContainer = styled.section`
	margin: 2rem 3rem;
`;

export const CountryCardText = styled.div`
	background-color: hsl(209, 23%, 22%);
	padding: 1.5rem;
	border-radius: 5px;
`;

export const Flag = styled.img`
	width: 100%;
	border-radius: 5px 5px 0 0;
`;

export const Name = styled.p`
	font-weight: bold;
	font-size: 1.2rem;
`;

export const Bold = styled.span`
	font-weight: 600;
`;
