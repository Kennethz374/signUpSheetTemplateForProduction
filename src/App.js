import "./App.css";
import React, { useState } from "react";
import Tab from "./components/Tab";

const trainings = [
	{
		id: 1,
		name: "Assembly Basics",
		instructor: "James Hsu",
		objective:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam natus ipsa modi omnis ratione ad esse cumque officia voluptatibus et minus rem, laudantium enim quo nesciunt in perferendis libero rerum!",
		requirement: "None",
		duration: "1 hour",
		capacity: 6,
	},
	{
		id: 2,
		name: "Soldering Basics",
		instructor: "Kenneth Zhang",
		objective:
			"adsfjaldsjfa;kljdsf;lakjsdl;kfajs;lkdjfa;klsdjf;akljsd;lkfja;sdkfjadsf",
		requirement: "None",
		duration: "6 hours",
		capacity: 2,
	},
	{
		id: 3,
		name: "Optical Cleaning",
		instructor: "Nick Reddy",
		objective:
			"adsfjaldsjfa;kljdsf;lakjsdl;kfajs;lkdjfa;klsdjf;akljsd;lkfja;sdkfjadsf",
		requirement: "None",
		duration: "6 hours",
		capacity: 2,
	},
];

const App = () => {
	return (
		<div className="m-10">
			<div className="text-4xl text-center text-blue-900 font-bold font-serif pb-10">
				Production Training Sign Up Page
			</div>

			<Tab trainings={trainings} />
		</div>
	);
};

export default App;
