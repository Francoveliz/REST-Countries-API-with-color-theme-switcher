import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/context";
import axios from "axios";
import {
	Flag,
	DetailContainer,
	LeftArrow,
	Bold,
	Name,
	LinkStyled,
	BorderBtn,
	BorderCountries,
	BorderCountriesContainer,
	Text,
	DetailContent,
	BorderCountriesTitle,
	Info,
} from "./Detail.elements";

const Detail = ({ match }) => {
	const { countries } = useAppContext();
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
		setData({ ...response.data });
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		fetchData();
	}, [match.params.code]);

	return (
		<DetailContainer>
			<LinkStyled to="/">
				<LeftArrow />
				Back
			</LinkStyled>
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
							{currencies.map((el, index) => (
								<span key={index}>{el.name}, </span>
							))}
						</p>
						<p>
							<Bold>languages: </Bold>
							{languages.map((el, index) => (
								<span key={index}>{el.name}, </span>
							))}
						</p>
						<p>
							<Bold>region: </Bold>
							{region}
						</p>
					</Info>
					<BorderCountriesContainer>
						<BorderCountries>
							<BorderCountriesTitle>
								border countries:{" "}
							</BorderCountriesTitle>
							{borders.map((border, index) => (
								<BorderBtn
									onClick={() => window.scrollTo(0, 0)}
									to={`/${border}`}
									key={index}>
									{
										countries.filter(el => el.alpha3Code === border)[0]
											.name
									}
								</BorderBtn>
							))}
						</BorderCountries>
					</BorderCountriesContainer>
				</Text>
			</DetailContent>
		</DetailContainer>
	);
};

export default Detail;
