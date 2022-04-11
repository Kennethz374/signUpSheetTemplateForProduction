import React, { useState } from "react";

import ExpandTab from "./ExpandTab";

// const Tab = ({ trainings }) => {
// 	const [isClick, setIsClick] = useState(false);
// 	const [id, setId] = useState();

// 	// const [isExpanded, setIsExpanded] = useState({
// 	// 	cid1: false,
// 	// 	cid2: false,
// 	// 	cid3: false,
// 	// });

// 	const handleClick = (id) => {
// 		// if (id === 1) {
// 		// 	setIsExpanded((pre) => {
// 		// 		return { ...pre, cid1: !pre.cid1 };
// 		// 	});
// 		// }
// 		// if (id === 2) {
// 		// 	setIsExpanded((pre) => {
// 		// 		return { ...pre, cid2: !pre.cid2 };
// 		// 	});
// 		// }
// 		// if (id === 3) {
// 		// 	setIsExpanded((pre) => {
// 		// 		return { ...pre, cid3: !pre.cid3 };
// 		// 	});
// 		// }
// 		setIsClick(!isClick);
// 		setId(id);
// 	};
// 	//  keep track of each tab is open or not
// 	return (
// 		<ul className="flex-col ">
// 			{trainings.map((training) => (
// 				<li key={training.id} className="pb-2 flex-col mx-28 ">
// 					<div className="ml-4 hover:px-2 duration-300 delay-200 font-serif cursor-pointer">
// 						<p
// 							className="text-3xl font-lg text-gray-900"
// 							onClick={() => handleClick(training.id)}
// 						>
// 							{training.name}
// 						</p>
// 					</div>
// 					<div className="bg-zinc-400 w-full h-1 mb-3"></div>
// 					{isClick && training.id === id && (
// 						<ExpandTab training={training} isClick={isClick} />
// 					)}
// 					{console.log("isClick:", isClick, "click on", id)}
// 				</li>
// 			))}
// 		</ul>
// 	);
// };

const Tab = ({ trainings }) => {
	return (
		<div className="accordion">
			{trainings.map((training) => {
				return (
					<div
						className="accordion-item bg-white border border-gray-200"
						key={training.id}
					>
						<h2 className="accordion-header mb-0" id={`heading-${training.id}`}>
							<button
								className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={`#collapse-${training.id}`}
								aria-expanded="false"
								aria-controls={`collapse-${training.id}`}
							>
								{training.name}
							</button>
						</h2>
						<div
							id={`collapse-${training.id}`}
							className="accordion-collapse collapse"
							aria-labelledby={`heading-${training.id}`}
						>
							<div className="accordion-body py-4 px-5">
								<strong>This is the first item's accordion body.</strong> It is
								shown by default, until the collapse plugin adds the appropriate
								classNamees that we use to style each element. These classNamees
								control the overall appearance, as well as the showing and
								hiding via CSS transitions. You can modify any of this with
								custom CSS or overriding our default variables. It's also worth
								noting that just about any HTML can go within the{" "}
								<code>.accordion-body</code>, though the transition does limit
								overflow.
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Tab;
