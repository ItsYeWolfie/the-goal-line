import { defer } from 'react-router-dom';
import { ITeamAndVenue } from '../../types/Team.types';
import fetchData from '../helpers/Fetch';

export default async function teamsLoader() {
	const teams = fetchData<ITeamAndVenue[]>('https://api.npoint.io/bd094ce005a62650121b');

	return defer({ teams });
}
