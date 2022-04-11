import React from "react";
import { Link } from "react-router-dom";
const SchedulePage = ({ dates }) => {
	return (
		<>
			<h4>Training Dates:</h4>
			{dates.map((singledate) => {
				return (
					<div className=" my-2 font-serif border-2 rounded-sm shadow-sm flex justify-between">
						<div className="px-12 py-2">
							<h1>
								{singledate.training.toUpperCase()}: {singledate.date},{" "}
								{singledate.time}
							</h1>
						</div>
						{singledate.capacity !== 6 ? (
							<div className="flex space-x-2 justify-center ">
								<button
									type="button"
									class="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
								>
									Join
								</button>
							</div>
						) : (
							<div className="flex space-x-2 justify-center ">
								<button
									type="button"
									class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
									disabled
								>
									Full
								</button>
							</div>
						)}
					</div>
				);
			})}
			<Link to="/"> back home</Link>
		</>
	);
};

export default SchedulePage;
