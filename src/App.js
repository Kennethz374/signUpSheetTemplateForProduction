import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tab from "./components/Tab";
import { trainings, dates } from "./data/data";
import SchedulePage from "./components/schedulePage";

const App = () => {
	return (
		<Router>
			<div className="m-10 ">
				<div className="text-4xl text-center text-blue-900 font-bold font-serif pb-10">
					Production Training Sign Up Page
				</div>

				<Switch>
					<Route exact path="/">
						<Tab trainings={trainings} />
					</Route>

					<Route exact path="/assembly">
						<SchedulePage dates={dates} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
