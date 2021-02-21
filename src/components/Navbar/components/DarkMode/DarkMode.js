import React from "react";
import styled from "styled-components";
import Moon from "../../../../assets/images/moon.svg";
import { MoonIcon } from "./DarkMode.elements";

const Test = styled.div`
	margin: 0;
	display: flex;
	align-items: center;
`;

const DarkMode = () => {
	return (
		<>
			<Test>
				<MoonIcon src={Moon} alt="" />
				<span>Dark Mode</span>
			</Test>
		</>
	);
};

export default DarkMode;
