import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../assets/style/device";

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const PersonalLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

export const CountriesContainer = styled.div`
	@media ${device.desktop} {
		align-items: stretch !important;
		display: flex;
		flex-wrap: wrap;
		& > * {
			max-width: 25%;
			width: 25%;
			height: 30rem;
			min-height: 30rem;
			max-height: 30rem;
		}
	}
`;
