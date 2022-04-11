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

const dates = [
	{
		date: "April 16, 2022",
		time: "10 am",
		capacity: 3,
		trainees: ["Jim", "Neel", "Wong"],
		training: "assembly",
		id: 1,
		avatar: "",
	},
	{
		date: "April 30, 2022",
		time: "10 am",
		capacity: 3,
		trainees: ["Jim", "Neel", "Wong"],
		training: "assembly",
		id: 2,
	},
	{
		date: "May 16, 2022",
		time: "10 am",
		capacity: 2,
		trainees: ["Jim", "Wong"],
		training: "optical",
		id: 3,
	},
	{
		date: "May 30, 2022",
		time: "10 am",
		capacity: 1,
		trainees: ["Jim"],
		training: "soldering",
		id: 4,
	},
];

export { trainings, dates };
