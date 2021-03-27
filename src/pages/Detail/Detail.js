import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/context";
import axios from "axios";
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

const Detail = ({ match }) => {
	const { countries } = useAppContext();
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({
		currencies: [],
		languages: [],
		borders: [],
	});

	const {
		flag,
		name,
		nativeName,
		population,
		region,
		subregion,
		capital,
		topLevelDomain,
		currencies,
		languages,
		borders,
	} = data;

	const fetchData = async () => {
		const response = await axios.get(
			`https://restcountries.eu/rest/v2/alpha/${match.params.code}`
		);
		const data = await response.data;
		setData({ ...data });
		setIsLoading(false);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		fetchData();
	}, [match.params.code]);

	const setBorderCountriesBtns = borders.map((border, index) => (
		<Box m={1} key={index}>
			<Link
				to={`/${border}`}
				style={{ textDecoration: "none", color: "#fff" }}>
				<Button
					onClick={() => window.scrollTo(0, 0)}
					variant="contained"
					color="primary">
					{countries.filter(el => el.alpha3Code === border)[0].name}
				</Button>
			</Link>
		</Box>
	));

	const setLanguages = languages.map((el, index) => (
		<span key={index}>{el.name}, </span>
	));

	const setCurrencies = currencies.map((el, index) => (
		<span key={index}>{el.name}, </span>
	));

	const detailContent = (
		<DetailContent>
			<Flag src={flag} />
			<Text>
				<Name>{name}</Name>
				<Info>
					<p>
						<Bold>Native name: </Bold>
						{nativeName}
					</p>
					<p>
						<Bold>Population: </Bold>
						{population}
					</p>
					<p>
						<Bold>region: </Bold>
						{region}
					</p>
					<p>
						<Bold>sub region: </Bold>
						{subregion}
					</p>
					<p>
						<Bold>capital: </Bold>
						{capital}
					</p>
					<p>
						<Bold>top level domain: </Bold>
						{topLevelDomain}
					</p>
					<p>
						<Bold>currencies: </Bold>
						{setCurrencies}
					</p>
					<p>
						<Bold>languages: </Bold>
						{setLanguages}
					</p>
					<p>
						<Bold>region: </Bold>
						{region}
					</p>
				</Info>
				<BorderCountriesContainer>
					<BorderCountries>
						<BorderCountriesTitle>border countries:</BorderCountriesTitle>
						{setBorderCountriesBtns}
					</BorderCountries>
				</BorderCountriesContainer>
			</Text>
		</DetailContent>
	);

	return (
		<Container>
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
				{isLoading ? <LoadingAnimation /> : detailContent}
			</DetailContainer>
		</Container>
	);
};

export default Detail;
