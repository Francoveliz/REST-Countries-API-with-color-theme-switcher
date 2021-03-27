import {
	ViewMoreBtn,
	CountryCardText,
	Flag,
	Name,
	Bold,
	Container,
} from "./CountryCard.elements";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const CountryCard = ({
	flag,
	name,
	population,
	region,
	capital,
	alpha3Code,
}) => {
	return (
		<Grid item lg={4} md={6}>
			<Flag src={flag} alt="" />
			<CountryCardText>
				<Name>{name}</Name>
				<p>
					<Bold>Population: </Bold>
					{population}
				</p>
				<p>
					<Bold>Region: </Bold>
					{region}
				</p>
				<p>
					<Bold>Capital: </Bold>
					{capital}
				</p>
				<Box display="flex" justifyContent="flex-end">
					<Link
						style={{ textDecoration: "none", color: "#fff" }}
						to={`/${alpha3Code}`}>
						<Box display="block" mt={3}>
							<Button variant="contained" color="primary">
								...View more
							</Button>
						</Box>
					</Link>
				</Box>
			</CountryCardText>
		</Grid>
	);
};

export default CountryCard;
