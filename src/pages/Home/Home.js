import React, { useEffect, useState } from "react";
import { SearchBar, FilterRegion, CountryCard } from "./components";
import { LoadingAnimation } from "../../components";
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
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@material-ui/core/CircularProgress";

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
	const [isLoading, setIsLoading] = useState(true);
	const classes = useStyles();

	const {
		fetchData,
		countries,
		setCountries,
		setCountriesDisplay,
		countriesDisplay,
		countriesCache,
		setCountriesCache,
		page,
		setPage,
	} = useAppContext();

	const initalFunc = async () => {
		if (countries.length === 0) {
			const data = await fetchData();
			setCountries(() => [...data]);
			setCountriesDisplay(() => data.slice(0, page));
			setCountriesCache(() => [...data]);
			setIsLoading(false);
		} else {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		initalFunc();
	}, []);

	useEffect(() => {
		setCountriesDisplay(() => countriesCache.slice(0, page));
	}, [page]);

	const countriesComponents = (
		<InfiniteScroll
			dataLength={countriesDisplay.length}
			next={() => setPage(() => page + 6)}
			hasMore={true}
			className="MuiGrid-container MuiGrid-spacing-xs-3">
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
		</InfiniteScroll>
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
					<FilterRegion />
				</Box>
				{isLoading ? <LoadingAnimation /> : countriesComponents}
			</Container>
		</HomeContainer>
	);
};

export default Home;
