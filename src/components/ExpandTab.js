import React, { Component } from "react";

const ExpandTab = ({ training }) => {
	const { instructor, requirement, capacity, duration, objective, avatar } =
		training;
	return (
		<div className="bg-slate-300 rounded-md mx-40 text-lg p-5">
			{/* objective */}
			<div>
				<strong>Training Objective: </strong>
				<h2> {objective}</h2>
			</div>

			<div className="flex my-5">
				<h3 className="mt-3 mr-4">
					<strong>Trainer: </strong> {instructor}
				</h3>
				<img src={avatar} className="w-12 h-12 rounded-xl "></img>
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

			<div className="justify-center flex">
				<div>
					<button className="border-solid bg-slate-500 rounded-xl p-2 text-sm text-center">
						See Schedules
					</button>
				</div>
			</div>
		</div>
	);
};

export default ExpandTab;
