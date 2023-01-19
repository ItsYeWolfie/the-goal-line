import fetchData from '../helpers/Fetch';
import { ITeamAndVenue, ITeamStatistics } from '../../types/Team.types';
import { IFixture } from '../../types/Fixture.types';
import { ILeagueWithStanding } from '../../types/League.types';
import { IPlayerWithStatistics } from '../../types/Player.types';

export default async function teamOverviewLoader(): Promise<ITeamStatistics> {
	return fetchData<ITeamStatistics>(
		'https://api.npoint.io/259bb0faaedc5732aebe',
	);
}

export async function teamLoader() {
	return fetchData<ITeamAndVenue>(
		'https://api.npoint.io/585facaf04546274c0c0/',
	);
}

export async function teamFixturesLoader() {
	return fetchData<IFixture[]>('https://api.npoint.io/3d56ae8265c24b49d6f8');
}

export async function teamStandingsLoader() {
	return fetchData<ILeagueWithStanding>(
		'https://api.npoint.io/9755c43d23971a73fe3f',
	);
}

export async function teamPlayersLoader() {
	return fetchData<IPlayerWithStatistics[]>(
		'https://api.npoint.io/14ad36c662462a142566',
	);
}
