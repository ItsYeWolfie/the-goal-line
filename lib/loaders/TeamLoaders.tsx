import fetchData from '../helpers/Fetch';
import { ITeamAndVenue, ITeamStatistics } from '../../types/Team.types';

export default async function teamOverviewLoader(): Promise<ITeamStatistics> {
	const team = await fetchData<ITeamStatistics>(
		'https://api.npoint.io/259bb0faaedc5732aebe',
	);
	return team;
}

export async function teamLoader() {
	const team = await fetchData<ITeamAndVenue>(
		'https://api.npoint.io/585facaf04546274c0c0/',
	);

	return team;
}
