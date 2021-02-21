import React from "react";
import { DarkMode } from "./components";
import { Nav, Logo } from "./Navbar.elements";

const Navbar = () => {
	return (
		<Nav>
			<Logo>where in the world?</Logo>
			<DarkMode />
		</Nav>
	);
};

export default Navbar;
