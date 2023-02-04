import { defer } from 'react-router';
import { ILeagueData, ILeagueStanding } from '../../types/League.types';
import { fetchData } from '../helpers/Fetch';

export async function leagueLoader() {
	const league = fetchData<ILeagueData>('https://api.npoint.io/23a2d80b2f6a5f775cc1');
	return defer({ league });
}

export async function leagueInjuriesLoader() {
	const leagueInjuries = fetchData<ILeagueData>('https://api.npoint.io/674a4c255c7bd8dd8245');
	return defer({ leagueInjuries });
}

export async function leagueOverviewLoader() {
	const leagueStandings = fetchData<ILeagueStanding[]>('https://api.npoint.io/c48f56e5c56c613c22ab');
	return defer({ leagueStandings });
}

export async function leagueFixturesLoader() {
	const leagueFixtures = fetchData<ILeagueData>('https://api.npoint.io/48683749646f145669a8');
	return defer({ leagueFixtures });
}

export async function leaguePlayerStatisticsLoader() {
	const playerStatistics = fetchData<ILeagueData>('https://api.npoint.io/31ed8262a154dcc284a2');
	return defer({ playerStatistics });
}
