const leagues = [
	{
		league: {
			id: 4,
			name: 'Euro Championship',
			type: 'Cup',
			logo: 'https://media.api-sports.io/football/leagues/4.png',
		},
	},
	{
		league: {
			id: 21,
			name: 'Confederations Cup',
			type: 'Cup',
			logo: 'https://media.api-sports.io/football/leagues/21.png',
		},
	},
	{
		league: {
			id: 61,
			name: 'Ligue 1',
			type: 'League',
			logo: 'https://media.api-sports.io/football/leagues/61.png',
		},
	},
	{
		league: {
			id: 144,
			name: 'Jupiler Pro League',
			type: 'League',
			logo: 'https://media.api-sports.io/football/leagues/144.png',
		},
		country: {
			name: 'Belgium',
			code: 'BE',
			flag: 'https://media.api-sports.io/flags/be.svg',
		},
	},
	{
		league: {
			id: 71,
			name: 'Serie A',
			type: 'League',
			logo: 'https://media.api-sports.io/football/leagues/71.png',
		},
		country: {
			name: 'Brazil',
			code: 'BR',
			flag: 'https://media.api-sports.io/flags/br.svg',
		},
	},
];

export const GetAllLeagues = () => {
	return leagues;
};

export default leagues;
