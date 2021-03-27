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
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	bold: {
		fontWeight: "bold",
	},
});

const CountryCard = ({
	flag,
	name,
	population,
	region,
	capital,
	alpha3Code,
}) => {
	const classes = useStyles();
	const details = [
		{
			name: "Population",
			variable: population,
		},
		{
			name: "Region",
			variable: region,
		},
		{
			name: "Capital",
			variable: capital,
		},
	];
	return (
		<Grid item lg={4} md={6}>
			<Flag src={flag} alt="" />
			<CountryCardText>
				<Box mb={3}>
					<Typography className={classes.bold} variant="h5">
						{name}
					</Typography>
				</Box>
				{details.map(element => (
					<Box mb={1}>
						<Typography
							className={classes.bold}
							component="span">{`${element.name}: `}</Typography>
						<Typography component="span">{`${element.variable}`}</Typography>
					</Box>
				))}
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
