import styled from "styled-components";

export const CountryCardContainer = styled.section`
	margin: 2rem 3rem;
	display: flex;
	flex-direction: column;
`;

export const CountryCardText = styled.div`
	background-color: ${props => props.theme.elements};
	padding: 1.5rem;
	border-radius: 0 0 5px 5px;
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
