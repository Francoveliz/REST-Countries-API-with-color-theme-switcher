import React from "react";
import { DropDownList } from "./FilterRegion.elements";
import { useAppContext } from "../../../../context/context";

const FilterRegion = () => {
	const {
		page,
		countries,
		setCountriesDisplay,
		countriesCache,
		setCountriesCache,
	} = useAppContext();

	const filterByRegion = region => {
		if (region) {
			const filterCountries = countries.filter(
				country => country.region === region
			);
			setCountriesCache(() => filterCountries);
			setCountriesDisplay(() => filterCountries.slice(0, 6));
		} else {
			setCountriesCache(() => countries);
			setCountriesDisplay(() => countries.slice(0, 6));
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
