import React from "react";
import { DarkMode } from "./components";
import { Nav, Logo } from "./Navbar.elements";
import { Container, Box } from "@material-ui/core";

const Navbar = () => {
	return (
		<Nav>
			<Container>
				<Box display="flex" justifyContent="space-between">
					<Logo>where in the world?</Logo>
					<DarkMode />
				</Box>
			</Container>
		</Nav>
	);
};

export default Navbar;
