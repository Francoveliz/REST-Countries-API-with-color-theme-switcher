import React from "react";

import { StyledMoon, DarkModeContainer } from "./DarkMode.elements";
import { useAppContext } from "../../../../context/context";

const DarkMode = () => {
	const { theme, setTheme } = useAppContext();

	const onClickHandler = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	};

	return (
		<DarkModeContainer onClick={onClickHandler}>
			<StyledMoon />
			<span>Dark Mode</span>
		</DarkModeContainer>
	);
};

export default DarkMode;
