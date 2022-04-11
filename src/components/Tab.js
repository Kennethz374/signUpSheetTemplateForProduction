import React, { useState } from "react";

import ExpandTab from "./ExpandTab";

const Tab = ({ trainings }) => {
	const [isClick, setIsClick] = useState(false);
	const [id, setId] = useState();
	const handleClick = (id) => {
		setIsClick(!isClick);
		setId(id);
		console.log(isClick, id);
	};
	return (
		<ul className="flex-col c ">
			{trainings.map((training) => (
				<li key={training.id} className="pb-2 flex-col mx-28 ">
					<div className="ml-4 hover:px-2 duration-300 delay-200 font-serif cursor-pointer">
						<p
							className="text-3xl font-lg text-gray-900"
							onClick={() => handleClick(training.id)}
						>
							{training.name}
						</p>
					</div>
					<div className="bg-zinc-400 w-full h-1 mb-3"></div>
					{isClick && training.id === id && (
						<ExpandTab training={training} isClick={isClick} />
					)}
				</li>
			))}
		</ul>
	);
};

export default Tab;
