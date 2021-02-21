import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "normalize.css";
import "./styles/globals.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
