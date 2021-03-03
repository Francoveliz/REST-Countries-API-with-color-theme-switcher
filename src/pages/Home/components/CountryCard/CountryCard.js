import React from "react";

import {
	ViewMoreBtn,
	CountryCardText,
	Flag,
	Name,
	Bold,
	Container,
} from "./CountryCard.elements";

const CountryCard = ({
	flag,
	name,
	population,
	region,
	capital,
	alpha3Code,
}) => {
	return (
		<Container>
			<Flag src={flag} alt="" />
			<CountryCardText>
				<Name>{name}</Name>
				<p>
					<Bold>Population: </Bold>
					{population}
				</p>
				<p>
					<Bold>Region: </Bold>
					{region}
				</p>
				<p>
					<Bold>Capital: </Bold>
					{capital}
				</p>
				<ViewMoreBtn to={`/${alpha3Code}`}>...View more </ViewMoreBtn>
			</CountryCardText>
		</Container>
	);
};

export default CountryCard;
