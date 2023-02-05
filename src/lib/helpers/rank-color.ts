export default function GetRankColor(rank: number, index: number) {
	let backgroundColor = `${
		index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-gray-200 dark:bg-gray-700'
	} text-gray-800 dark:text-gray-300`;
	const teamRank = rank;

	switch (true) {
		case teamRank === 1:
			backgroundColor = 'bg-green-800 text-gray-300 dark:bg-green-600';
			break;
		case teamRank < 5:
			backgroundColor = 'bg-green-700 text-gray-300';
			break;
		case teamRank < 7:
			backgroundColor = 'bg-green-600 dark:bg-green-800 text-gray-300';
			break;
		case teamRank > 16:
			backgroundColor = 'bg-red-700 dark:bg-red-500 text-gray-300';
			break;
		case teamRank > 14:
			backgroundColor = 'bg-red-500 dark:bg-red-700 text-gray-300';
			break;
		default:
			break;
	}

	return backgroundColor;
}
