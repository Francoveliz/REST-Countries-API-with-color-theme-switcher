import React from "react";
import { DropDownList } from "./FilterRegion.elements";

const FilterRegion = () => {
	return (
		<DropDownList>
			<option value="" selected>
				Filter by Region
			</option>
			<option value="africa">Africa</option>
			<option value="europe">America</option>
			<option value="americas">Asia</option>
			<option value="asia">Europe</option>
			<option value="oceania">Oceania</option>
		</DropDownList>
	);
};

export default FilterRegion;
