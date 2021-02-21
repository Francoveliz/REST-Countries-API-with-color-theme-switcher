import React from "react";
import loupe from "../../../../assets/images/search.svg";
import {
	SearchBarContainer,
	SearchBarElement,
	SearchIcon,
} from "./SearchBar.elements";

const SearchBar = () => {
	return (
		<SearchBarContainer>
			<SearchIcon src={loupe} />
			<SearchBarElement placeholder="Search for a country..." />
		</SearchBarContainer>
	);
};

export default SearchBar;
