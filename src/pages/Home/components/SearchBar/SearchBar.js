import React, { useState } from "react";
import axios from "axios";
import { useAppContext } from "../../../../context/context";
import {
	SearchBarContainer,
	SearchBarElement,
	Loupe,
} from "./SearchBar.elements";

const SearchBar = () => {
	const { setCountriesDisplay, countries } = useAppContext();
	const [searchText, setSearchText] = useState("");

	const searchOnChangeHandler = (e) => {
		setSearchText(e.target.value);
	};

	const getSearch = async (e) => {
		e.preventDefault();
		if (!searchText) {
			setCountriesDisplay(() => countries.slice(0, 12));
			return;
		}
		const response = await axios.get(
			`https://restcountries.com/v3.1/name/${searchText}`
		);
		const data = await response.data;
		setCountriesDisplay(() => data);
	};

	return (
		<SearchBarContainer onSubmit={(e) => getSearch(e)}>
			<Loupe onClick={getSearch} />
			<SearchBarElement
				value={searchText}
				onChange={(e) => searchOnChangeHandler(e)}
				placeholder="Search for a country..."
			/>
		</SearchBarContainer>
	);
};

export default SearchBar;
