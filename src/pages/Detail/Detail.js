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
	BordersContainer,
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
		fetchData();
	}, [match.params.code]);

	return (
		<DetailContainer>
			<LinkStyled to="/">
				<LeftArrow />
				Back
			</LinkStyled>
			<Flag src={flag} />
			<Name>{name}</Name>
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
			<p>
				<Bold>border countries: </Bold>
				<BordersContainer>
					{borders.map((border, index) => (
						<BorderBtn
							onClick={() => window.scrollTo(0, 0)}
							to={`/${border}`}
							key={index}>
							{countries.filter(el => el.alpha3Code === border)[0].name}
						</BorderBtn>
					))}
				</BordersContainer>
			</p>
		</DetailContainer>
	);
};

export default Detail;
