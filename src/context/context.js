import React, { useContext, createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");
	const [countries, setCountries] = useState([]);
	const [countriesDisplay, setCountriesDisplay] = useState([]);

	const fetchData = async () => {
		const response = await axios.get(
			"https://restcountries.eu/rest/v2/all"
		);
		const data = response.data;
		setCountries(() => [...data]);
		setCountriesDisplay(() => [...data]);
	};

	return (
		<AppContext.Provider
			value={{
				countries,
				setCountries,
				countriesDisplay,
				setCountriesDisplay,
				fetchData,
				theme,
				setTheme,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
