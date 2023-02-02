import { defer } from 'react-router';
import { IPlayerWithStatistics } from '../../types/Player.types';
import fetchData from '../helpers/Fetch';

export async function playerDataLoader() {
	const playerData = fetchData<IPlayerWithStatistics>('https://api.npoint.io/baf455cddaed9af22ec1');
	return defer({ playerData });
}

export async function playerTransfersLoader() {
	const playerTransfers = fetchData('https://api.npoint.io/f5d4a1d8991dc4432b6e');
	return defer({ playerTransfers });
}
