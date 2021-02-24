import { Switch, Route } from "react-router-dom";
import "./sass/App.scss";
import Home from "./Home";
import About from "./About";

export default function App({ username }) {
	return (
		<Switch>
			<Route path='/' exact>
				<Home username={username} />
			</Route>
			<Route path='/about'>
				<About />
			</Route>
		</Switch>
	);
}
