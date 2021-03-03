import React, { useEffect } from "react";
import { SearchBar, FilterRegion, CountryCard } from "./components";
import {
	HomeContainer,
	CountriesContainer,
	Filters,
	Button,
} from "./Home.elements";

import uuid from "react-uuid";
import { useAppContext } from "../../context/context";

const Home = () => {
	const {
		fetchData,
		countries,
		setCountriesDisplay,
		countriesDisplay,
	} = useAppContext();

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<HomeContainer>
			<Filters>
				<SearchBar />
				<FilterRegion
					countries={countries}
					setCountriesDisplay={setCountriesDisplay}
				/>
			</Filters>
			<CountriesContainer>
				{countriesDisplay.map(country => (
					<CountryCard
						name={country.name}
						flag={country.flag}
						population={country.population}
						region={country.region}
						capital={country.capital}
						alpha3Code={country.alpha3Code}
						key={uuid()}
					/>
				))}
			</CountriesContainer>
		</HomeContainer>
	);
};

export default Home;
