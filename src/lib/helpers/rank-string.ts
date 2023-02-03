export default function RankToString(rank: number) {
	let rankString = rank.toString();
	switch (rank) {
		case 1:
			rankString = '1st';
			break;
		case 2:
			rankString = '2nd';
			break;
		case 3:
			rankString = '3rd';
			break;
		default:
			rankString = `${rank}th`;
			break;
	}

	return rankString;
}
