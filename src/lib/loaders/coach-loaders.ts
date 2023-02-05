import { defer } from 'react-router-dom';
import { ICoach } from '../../types/Coach.types';
import { fetchData } from '../helpers/Fetch';

export default async function coachLoader() {
	const coach = fetchData<ICoach>('https://api.npoint.io/e5a86096d38472b34b85');

	return defer({ coach });
}
