import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "normalize.css";
import "./styles/globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./context/context";

ReactDOM.render(
	<React.StrictMode>
		<AppContextProvider>
			<Router>
				<App />
			</Router>
		</AppContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
