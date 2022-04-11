import "./App.css";
import React, { useState } from "react";

const trainings = [
	{
		id: 1,
		name: "Assembly Basics",
		instructor: "James Hsu",
	},
	{
		id: 2,
		name: "Soldering Basics",
		instructor: "Kenneth Zhang",
	},
	{
		id: 3,
		name: "Optical Cleaning",
		instructor: "Nick Reddy",
	},
];

const App = () => {
	return (
		<div className="m-10">
			<div className="text-4xl text-center text-blue-900 font-bold font-serif pb-10">
				Production Training Sign Up Page
			</div>
			<ul className="flex-col ">
				{trainings.map((training) => (
					<li
						key={training.id}
						className="pb-2 flex-col mx-28 hover:px-2 hover:duration-300 delay-200 font-serif cursor-pointer"
					>
						<div className="ml-4">
							<p className="text-3xl font-lg text-gray-900">{training.name}</p>
						</div>
						<div className="bg-zinc-400 w-full h-1 mb-3"></div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
