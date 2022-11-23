import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/context";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import {
	Flag,
	DetailContainer,
	LeftArrow,
	Bold,
	Name,
	BackBtn,
	BorderBtn,
	BorderCountries,
	BorderCountriesContainer,
	Text,
	DetailContent,
	BorderCountriesTitle,
	Info,
} from "./Detail.elements";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { LoadingAnimation } from "../../components";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	bold: {
		fontWeight: "bold",
	},
});

const Detail = ({ match }) => {
	const classes = useStyles();
	const { countries } = useAppContext();
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({
		currencies: [],
		languages: [],
		borders: [],
	});

	const {
		flags,
		name,
		population,
		region,
		subregion,
		capital,
		currencies,
		languages,
	} = data;

	const fetchData = async () => {
		const response = await axios.get(
			`https://restcountries.com/v3.1/alpha/${match.params.code}`
		);
		const data = await response.data[0];
		setData({ ...data });
		setIsLoading(false);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		fetchData();
	}, [match.params.code]);

	const setLanguages = () => {
		return Object.keys(languages).reduce(
			(languagesNames, languageAcronym) => {
				return [...languagesNames, languages[languageAcronym]];
			},
			[]
		);
	};

	const setCurrencies = () => {
		return Object.keys(currencies).reduce(
			(currenciesNames, currencieAcronym) => {
				return [...currenciesNames, currencies[currencieAcronym].name];
			},
			[]
		);
	};

	const names = [
		{
			name: "Population",
			variable: population,
		},
		{
			name: "region",
			variable: region,
		},
		{
			name: "Sub region",
			variable: subregion,
		},
		{
			name: "Capital",
			variable: capital,
		},
		{
			name: "currencies",
			variable: setCurrencies(),
		},
		{
			name: "languages",
			variable: setLanguages(),
		},
		{
			name: "region",
			variable: region,
		},
	];

	const detailContent = (
		<DetailContent>
			<Flag src={flags ? flags.svg : ""} />
			<Text>
				<Box mb={5}>
					<Typography variant="h4">{name ? name.common : ""}</Typography>
				</Box>
				<Info>
					{names.map((element) => (
						<Box mb={1}>
							<Typography
								className={classes.bold}
								component="span">{`${element.name}: `}</Typography>
							<Typography component="span">{`${element.variable}`}</Typography>
						</Box>
					))}
				</Info>
			</Text>
		</DetailContent>
	);

	return (
		<Container>
			<Box pb={10}>
				<DetailContainer>
					<Link style={{ textDecoration: "none" }} to="/">
						<Box display="block">
							<Button
								variant="contained"
								color="primary"
								startIcon={<LeftArrow />}>
								Back
							</Button>
						</Box>
					</Link>
				</DetailContainer>
				{isLoading ? <LoadingAnimation /> : detailContent}
			</Box>
		</Container>
	);
};

export default Detail;
