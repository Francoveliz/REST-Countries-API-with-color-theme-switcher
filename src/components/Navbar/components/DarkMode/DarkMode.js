import React from "react";
import Moon from "../../../../assets/images/moon.svg";
import { MoonIcon, DarkModeContainer } from "./DarkMode.elements";
import { useAppContext } from "../../../../context/context";

const DarkMode = () => {
	const { theme, setTheme } = useAppContext();

	const onClickHandler = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	};

	return (
		<DarkModeContainer onClick={onClickHandler}>
			<MoonIcon src={Moon} alt="" />
			<span>Dark Mode</span>
		</DarkModeContainer>
	);
};

export default DarkMode;
