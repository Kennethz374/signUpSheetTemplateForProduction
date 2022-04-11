import React from "react";
import { Link } from "react-router-dom";

const ExpandTab = ({ training }) => {
	const { instructor, requirement, capacity, duration, objective, avatar } =
		training;
	return (
		<div className="bg-slate-300 rounded-md mx-10 text-lg p-5 break-words">
			{/* objective */}
			<div>
				<strong>Training Objective: </strong>
				<h2> {objective}</h2>
			</div>

			<div className="flex my-5">
				<h3 className="mt-3 mr-4">
					<strong>Trainer: </strong> {instructor}
				</h3>
				<img
					src={avatar}
					alt="no img"
					className="w-12 rounded-full shadow-lg "
				></img>
			</div>

			<div className="mt-3">
				<strong>Requirement: </strong> {requirement}
			</div>

			<div className="mt-3">
				<strong>Duration: </strong> {duration}
			</div>

			<div className="mt-3">
				<strong>Capacity: </strong> {capacity}
			</div>

			<Link to="/assembly">
				<div className="justify-center flex">
					<div class="flex space-x-2 justify-center">
						<button
							type="button"
							class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							See Schedules
						</button>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ExpandTab;
