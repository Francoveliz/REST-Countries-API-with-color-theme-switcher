import styled from "styled-components";
import { ReactComponent as LeftArrowIcon } from "../../assets/images/left-arrow.svg";

import { Link } from "react-router-dom";

export const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1rem;
	font-size: 1.2rem;
`;

export const Button = styled.button`
	background-color: hsl(209, 23%, 22%);
	color: #fff;
	border-radius: 2px;
	border: none;
	outline: none;
	padding: 0.5rem 1.8rem;
	max-width: initial;
	display: flex;
	align-items: center;
`;

export const Flag = styled.img`
	//replace (1rem) for global margin
	width: 100%;

	margin: 4rem 0;
`;

export const LeftArrow = styled(LeftArrowIcon)`
	height: 1.2rem;
	width: 1.2rem;
	margin-right: 1rem;
	fill: ${props => props.theme.text};
`;

export const Name = styled.h2`
	font-weight: bold;
	font-size: 1.4rem;
`;

export const Bold = styled.span`
	font-weight: 600;
	text-transform: capitalize;
`;

export const LinkStyled = styled(Link)`
	color: inherit;
	text-decoration: none;
	border-radius: 5px;
	background-color: ${props => props.theme.elements};
	padding: 0.5rem 1.5rem;
	display: flex;
	align-items: center;
`;
