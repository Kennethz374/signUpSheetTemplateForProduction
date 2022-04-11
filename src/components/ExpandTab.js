import React, { Component } from "react";

const ExpandTab = ({ training }) => {
	const { instructor, requirement, capacity, duration } = training;
	return <div className="bg-neutral-400">{instructor}</div>;
};

export default ExpandTab;
