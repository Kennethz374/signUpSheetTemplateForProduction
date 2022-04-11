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
		avatar:
			"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
		avatar:
			"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
		avatar:
			"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	},
];

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
