import "./App.css";
import React, { useState } from "react";
import Tab from "./components/Tab";
import { BrowserRouter } from "react-router-dom";
import trainings from "./data/data";

const App = () => {
	return (
		<div className="m-10 ">
			<div className="text-4xl text-center text-blue-900 font-bold font-serif pb-10">
				Production Training Sign Up Page
			</div>

			<Tab trainings={trainings} />
		</div>
	);
};

export default App;
