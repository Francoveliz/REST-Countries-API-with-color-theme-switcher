import React from "react";

import {
	CountryCardContainer,
	CountryCardText,
	Flag,
	Name,
	Bold,
} from "./CountryCard.elements";

const CountryCard = ({ flag, name, population, region, capital }) => {
	return (
		<CountryCardContainer>
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
			</CountryCardText>
		</CountryCardContainer>
	);
};

export default CountryCard;
