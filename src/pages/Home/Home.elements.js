import styled from "styled-components";
import { device } from "../../assets/style/device";

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CountriesContainer = styled.div`
	@media${device.desktop} {
		display: flex;
		flex-wrap: wrap;
		margin: 1rem -2rem;
	}
`;
