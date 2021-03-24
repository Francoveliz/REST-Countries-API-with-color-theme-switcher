import styled from "styled-components";
import { ReactComponent as LeftArrowIcon } from "../../assets/images/left-arrow.svg";
import { device } from "../../assets/style/device";
import { Button } from "../../components/Button/Button.elements";

import { Link } from "react-router-dom";

export const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-size: 1.2rem;
	@media${device.desktop} {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 0.3fr 1.7fr;
		gap: 0px 0px;
		grid-template-areas:
			"back-btn"
			"content";
	}
`;

export const DetailContent = styled.div`
	@media${device.desktop} {
		display: grid;
		grid-area: content;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		gap: 0px 0px;
		grid-template-areas: "flag text";
		align-items: center;
		gap: 5rem;
	}
`;

export const Flag = styled.img`
	//replace (1rem) for global margin
	width: 100%;
	margin: 4rem 0;
	@media${device.desktop} {
		grid-area: flag;
		margin: 0;
	}
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
	@media${device.desktop} {
		grid-area: name;
		margin: 0;
		padding: 0;
		display: inline;
	}
`;

export const Bold = styled.span`
	font-weight: 600;
	text-transform: capitalize;
	white-space: nowrap;
`;

export const BorderBtn = styled(Button)`
	display: flex;
	margin: 0 1rem 1rem 0;
	height: 2rem;
	@media${device.desktop} {
		margin: 0 1rem 1rem 0;
	}
`;

export const BorderCountriesTitle = styled(Bold)`
	margin-right: 1rem;
`;

export const BorderCountries = styled.div`
	margin: 1rem 0;
	display: flex;
	flex-wrap: wrap;
	@media${device.desktop} {
		align-items: center;
		margin: 0;
	}
`;

export const BorderCountriesContainer = styled.div`
	@media${device.desktop} {
		grid-area: border-countries;
		display: flex;
	}
`;

export const Text = styled.div`
	@media${device.desktop} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 3rem 2fr auto;

		grid-template-areas:
			"name name"
			"info info"
			"border-countries border-countries";
		grid-area: text;
		margin: 3rem 0;
	}
`;

export const Info = styled.div`
	@media${device.desktop} {
		grid-area: info;
		column-count: 2;
		margin-bottom: 3rem;
	}
`;

export const BackBtn = styled(Button)`
	@media${device.desktop} {
		grid-area: back-btn;
		justify-self: start;
	}
`;
