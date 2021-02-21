import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../../components";
import Home from "../../pages/Home/Home";
import Detail from "../../pages/Detail/Detail";
import { AppContainer } from "./App.elements";

const App = () => {
	return (
		<AppContainer>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/:code" component={Detail} />
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</AppContainer>
	);
};

export default App;
