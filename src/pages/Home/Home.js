import React, { useEffect } from "react";
import { SearchBar, FilterRegion, CountryCard } from "./components";
import {
	HomeContainer,
	PersonalLink,
	CountriesContainer,
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
			<SearchBar />
			<FilterRegion
				countries={countries}
				setCountriesDisplay={setCountriesDisplay}
			/>
			<CountriesContainer>
				{countriesDisplay.map(country => (
					<PersonalLink to={`/${country.alpha3Code}`}>
						<CountryCard
							name={country.name}
							flag={country.flag}
							population={country.population}
							region={country.region}
							capital={country.capital}
							key={uuid()}
						/>
					</PersonalLink>
				))}
			</CountriesContainer>
		</HomeContainer>
	);
};

export default Home;
