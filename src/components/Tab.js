import React, { useState } from "react";
import ExpandTab from "./ExpandTab";

const Tab = ({ trainings }) => {
	const [isClick, setIsClick] = useState(false);
	const handleClick = () => {
		setIsClick(!isClick);
		console.log(isClick);
	};
	return (
		<ul className="flex-col ">
			{trainings.map((training) => (
				<li
					key={training.id}
					className="pb-2 flex-col mx-28 hover:px-2 hover:duration-300 delay-200 font-serif cursor-pointer"
				>
					<div className="ml-4">
						<p className="text-3xl font-lg text-gray-900" onClick={handleClick}>
							{training.name}
						</p>
					</div>
					<div className="bg-zinc-400 w-full h-1 mb-3"></div>
					{isClick && <ExpandTab />}
				</li>
			))}
		</ul>
	);
};

export default Tab;
