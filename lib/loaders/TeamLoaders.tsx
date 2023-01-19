import fetchData from '../helpers/Fetch';
import { ITeamAndVenue, ITeamStatistics } from '../../types/Team.types';
import { IFixture } from '../../types/Fixture.types';

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

export async function teamFixturesLoader() {
	const fixtures = await fetchData<IFixture[]>(
		'https://api.npoint.io/3d56ae8265c24b49d6f8',
	);

	return fixtures;
}
