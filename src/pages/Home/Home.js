import React, { useState, useEffect } from "react";
import { SearchBar, FilterRegion, CountryCard } from "./components";
import { HomeContainer, PersonalLink } from "./Home.elements";
import axios from "axios";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

const Home = () => {
	const countriesPerPage = 10;
	const [next, setNext] = useState(10);
	const [countries, setCountries] = useState([]);
	const [countriesDisplay, setCountriesDisplay] = useState([]);

	const loopWithSlice = (start, end) => {
		const sliceCountries = countries.slice(start, end);
		setCountriesDisplay(() => [...countriesDisplay, ...sliceCountries]);
		console.log("loop with slice");
	};

	const fetchData = async () => {
		const response = await axios.get(
			"https://restcountries.eu/rest/v2/all"
		);
		const data = response.data;
		setCountries(() => [...data]);
		setCountriesDisplay(() => data.slice(0, 10));
		console.log("fetchData() function");
	};

	useEffect(() => {
		fetchData();
	}, []);

	const loadMoreCountries = () => {
		loopWithSlice(next, next + countriesPerPage);
		setNext(next + countriesPerPage);
	};

	return (
		<HomeContainer>
			<SearchBar />
			<FilterRegion />
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

			<button onClick={loadMoreCountries}>...Load more countries</button>
		</HomeContainer>
	);
};

export default Home;
