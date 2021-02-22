import React, { useState } from "react";
import loupe from "../../../../assets/images/search.svg";
import axios from "axios";
import { useAppContext } from "../../../../context/context";
import {
	SearchBarContainer,
	SearchBarElement,
	SearchIcon,
} from "./SearchBar.elements";

const SearchBar = () => {
	const { setCountriesDisplay } = useAppContext();
	const [searchText, setSearchText] = useState("");

	const searchOnChangeHandler = e => {
		setSearchText(e.target.value);
	};

	const onSubmitHandler = async e => {
		e.preventDefault();
		const response = await axios.get(
			`https://restcountries.eu/rest/v2/name/${searchText}`
		);
		const data = await response.data;
		setCountriesDisplay(() => data);
		setSearchText("");
	};

	return (
		<SearchBarContainer onSubmit={e => onSubmitHandler(e)}>
			<SearchIcon src={loupe} />
			<SearchBarElement
				value={searchText}
				onChange={e => searchOnChangeHandler(e)}
				placeholder="Search for a country..."
			/>
		</SearchBarContainer>
	);
};

export default SearchBar;
