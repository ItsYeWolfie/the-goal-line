import { defer } from 'react-router-dom';
import fetchData from '../helpers/Fetch';
import { ITeamAndVenue, ITeamStatistics } from '../../src/types/Team.types';
import { IFixture } from '../../src/types/Fixture.types';
import { ILeagueWithStanding } from '../../src/types/League.types';
import { IPlayerInjury, IPlayerWithStatistics } from '../../src/types/Player.types';
import { ITransfer } from '../../src/types/Transfers.type';
import { ICoach } from '../../src/types/Coach.types';

export default async function teamOverviewLoader(): Promise<ITeamStatistics> {
	return fetchData<ITeamStatistics>('https://api.npoint.io/259bb0faaedc5732aebe');
}

export async function teamLoader() {
	return fetchData<ITeamAndVenue>('https://api.npoint.io/585facaf04546274c0c0/');
}

export async function teamFixturesLoader() {
	return fetchData<IFixture[]>('https://api.npoint.io/3d56ae8265c24b49d6f8');
}

export async function teamStandingsLoader() {
	const teamLeagueStandings = fetchData<ILeagueWithStanding>('https://api.npoint.io/0d55679471bdef188818');
	const leagueStandings = fetchData<ILeagueWithStanding[]>('https://api.npoint.io/9755c43d23971a73fe3f');
	return defer({ leagueStandings, teamLeagueStandings });
}

export async function teamPlayersLoader() {
	const players = fetchData<IPlayerWithStatistics[]>('https://api.npoint.io/14ad36c662462a142566');

	return defer({ players });
}

export async function teamTransfersLoader() {
	const transfers = fetchData<ITransfer[]>('https://api.npoint.io/e6cbde96c194aef54417');

	return defer({ transfers });
}

export async function teamCoachesLoader() {
	return fetchData<ICoach[]>('https://api.npoint.io/62712e4d8cdc5074390e');
}

export async function teamInjuriesLoader() {
	const injuries = fetchData<IPlayerInjury[]>('https://api.npoint.io/b3dd1a4b6c818458d567');

	return defer({ injuries });
}
