import React from "react";
import { DropDownList } from "./FilterRegion.elements";

const FilterRegion = ({ countries, setCountriesDisplay }) => {
	const filterByRegion = region => {
		if (region) {
			const filterCountries = countries.filter(
				country => country.region === region
			);
			setCountriesDisplay(() => filterCountries);
		} else {
			setCountriesDisplay(countries);
		}
	};

	return (
		<DropDownList onChange={e => filterByRegion(e.target.value)}>
			<option value="" selected>
				Filter by Region
			</option>
			<option value="Africa">Africa</option>
			<option value="Americas">America</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</DropDownList>
	);
};

export default FilterRegion;
