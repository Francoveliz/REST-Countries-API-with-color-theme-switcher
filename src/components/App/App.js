import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../../components";
import Home from "../../pages/Home/Home";
import Detail from "../../pages/Detail/Detail";
import { AppContainer } from "./App.elements";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../assets/style/theme";
import { useAppContext } from ".././../context/context";

const App = () => {
	const { theme } = useAppContext();
	return (
		<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			<AppContainer>
				<Router>
					<Navbar />
					<Switch>
						<Route path="/:code" component={Detail} />
						<Route path="/" component={Home} />
					</Switch>
				</Router>
			</AppContainer>
		</ThemeProvider>
	);
};

export default App;
