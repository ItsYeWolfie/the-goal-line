import { defer } from 'react-router';
import { IPlayerWithStatistics } from '../../types/Player.types';
import fetchData from '../helpers/Fetch';

export default function playerDataLoader() {
	const playerData = fetchData<IPlayerWithStatistics>('https://api.npoint.io/baf455cddaed9af22ec1');
	return defer({ playerData });
}
