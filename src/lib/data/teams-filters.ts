export const teamsFilters = [
	{
		id: 'name',
		name: 'name',
		type: 'text',
	},
	{
		id: 'league',
		name: 'league',
		type: 'select',
		options: [
			{
				id: 'Premier League',
				name: 'Premier League',
				value: 'Premier League',
			},
		],
	},
	{
		id: 'season',
		name: 'season',
		type: 'select',
		options: [
			// {
			// 	id: '2022',
			// 	name: '2022',
			// 	value: '2022',
			// },
		],
	},
	{
		id: 'country',
		name: 'country',
		type: 'select',
		options: [
			// {
			// 	id: 'england',
			// 	name: 'Premier League',
			// 	value: 'Premier League',
			// },
		],
	},
];

export default teamsFilters;
