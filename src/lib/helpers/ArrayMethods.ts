import { IPlayerWithStatistics } from '../../src/types/Player.types';

export const getPlayersByPosition = (playersList: IPlayerWithStatistics[], position: string) =>
	playersList.filter((player) => player.statistics[0].games.position === position);

export const filterSelfDuplicates: <T>(array: T[], unique: keyof T) => T[] = (array, unique) => {
	const uniqueArray = array.filter((item, index, self) => {
		return index === self.findIndex((l) => l[unique] === item[unique]);
	});
	return uniqueArray;
};
