import React from "react";

import {
	StyledLink,
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
			<StyledLink to={`/${alpha3Code}`}>
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
			</StyledLink>
		</Container>
	);
};

export default CountryCard;
