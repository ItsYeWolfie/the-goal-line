import { defer } from 'react-router';
import { ILeagueData } from '../../types/League.types';
import { fetchData } from '../helpers/Fetch';

export async function leagueLoader() {
	const league = fetchData<ILeagueData>('https://api.npoint.io/23a2d80b2f6a5f775cc1');
	return defer({ league });
}

export async function leagueInjuriesLoader() {
	const leagueInjuries = fetchData<ILeagueData>('https://api.npoint.io/674a4c255c7bd8dd8245');
	return defer({ leagueInjuries });
}
