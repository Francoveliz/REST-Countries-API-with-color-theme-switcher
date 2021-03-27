import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../../assets/style/device";
import { Button } from "../../../../components/Button/Button.elements";

export const ViewMoreBtn = styled(Button)`
	background-color: ${props => props.theme.background};
	align-self: flex-end;
`;

export const CountryCardText = styled.div`
	background-color: ${props => props.theme.elements};
	padding: 1.5rem;
	border-radius: 0 0 5px 5px;
	display: flex;
	flex-direction: column;
`;

export const Flag = styled.img`
	border-radius: 5px 5px 0 0;
	width: 100%;
	height: auto;
	min-height: 20rem;
	max-height: 20rem;
	object-fit: cover;
	object-position: 50% 50%;
`;

export const Name = styled.p`
	font-weight: bold;
	font-size: 1.2rem;
`;

export const Bold = styled.span`
	font-weight: 600;
`;

export const Container = styled.section``;
