import React, { useState } from "react";

import ExpandTab from "./ExpandTab";

const Tab = ({ trainings }) => {
	return (
		<div className="accordion">
			{trainings.map((training) => {
				return (
					<div
						className="accordion-item bg-white border border-gray-200"
						key={training.id}
					>
						<h2
							className="accordion-header mb-0 "
							id={`heading-${training.id}`}
						>
							<button
								className="
                                font-serif
                                accordion-button
                                collapsed
                                relative
                                flex
                                items-center
                                w-full
                                py-4
                                px-5
                                text-xl text-gray-800 text-left
                                bg-white
                                border-0
                                rounded-none
                                transition
                                focus:outline-none"
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
								<ExpandTab training={training} />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Tab;
