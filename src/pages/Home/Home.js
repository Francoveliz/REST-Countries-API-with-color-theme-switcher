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
import { Container, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FixedSizeList } from "react-window";

const useStyles = makeStyles(theme => ({
	filters: {
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
		},
	},
	searchBar: {
		[theme.breakpoints.down("xs")]: {
			marginBottom: "2rem",
		},
	},
}));

const Home = () => {
	const classes = useStyles();

	const {
		fetchData,
		countries,
		setCountriesDisplay,
		countriesDisplay,
	} = useAppContext();

	useEffect(() => {
		fetchData();
	}, []);

	const Row = ({ index, style }) => (
		<div style={style}>
			<CountryCard
				name={countries[index].name}
				flag={countries[index].flag}
				population={countries[index].population}
				region={countries[index].region}
				capital={countries[index].capital}
				alpha3Code={countries[index].alpha3Code}
				key={uuid()}
			/>
		</div>
	);
	const Example = () => (
		<FixedSizeList
			height={1000}
			width={1000}
			itemSize={700}
			itemCount={countries.length}>
			{Row}
		</FixedSizeList>
	);

	return (
		<HomeContainer>
			<Container>
				<Box
					className={classes.filters}
					my={5}
					display="flex"
					justifyContent="space-between">
					<Box className={classes.searchBar}>
						<SearchBar className={classes.searchBar} />
					</Box>

					<FilterRegion
						countries={countries}
						setCountriesDisplay={setCountriesDisplay}
					/>
				</Box>

				<Example />

				{/* <Grid container spacing={5}>
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
				</Grid> */}
			</Container>
		</HomeContainer>
	);
};

export default Home;
