import { useState, useEffect } from 'react';
import fetchData from '../../../../lib/helpers/Fetch';
import RankToString from '../../../../lib/helpers/rank-string';
import { IPlayerWithStatistics } from '../../../../types/Player.types';

export default function LeagueTopStatistics({
	url,
	type,
}: {
	url: string;
	type: 'goals' | 'assists' | 'yellowCards' | 'redCards';
}) {
	const [players, setPlayers] = useState<IPlayerWithStatistics[]>([]);

	useEffect(() => {
		fetchData<IPlayerWithStatistics[]>(`${url}`).then((data) => {
			setPlayers(data.splice(0, 3));
		});
	}, [url]);

	return (
		<div className="flex flex-col gap-2">
			{players.map((playerStatistic, index) => {
				const rankString = RankToString(index + 1);
				let objectKey;

				switch (type) {
					case 'goals':
						objectKey = playerStatistic.statistics[0].goals.total;
						break;
					case 'assists':
						objectKey = playerStatistic.statistics[0].goals.assists;
						break;
					case 'yellowCards':
						objectKey = playerStatistic.statistics[0].cards.yellow;
						break;
					case 'redCards':
						objectKey = playerStatistic.statistics[0].cards.red;
						break;
					default:
						objectKey = playerStatistic.statistics[0].goals.total;
						break;
				}

				return (
					<div
						className={`col-span-12 grid grid-cols-12 items-center gap-2 p-1 text-xs${
							index % 2 === 0 ? ' bg-gray-200 dark:bg-gray-700' : ''
						}`}
						key={playerStatistic.player.id}
					>
						<p className="col-span-1">{rankString}</p>
						<img
							src={playerStatistic.statistics[0].team.logo}
							alt={playerStatistic.statistics[0].team.name}
							className="col-span-2 mx-auto h-6 w-6 rounded-full"
						/>
						<img
							src={playerStatistic.player.photo}
							alt={playerStatistic.player.name}
							className="col-span-2 h-8 w-8 rounded-full"
						/>
						<div className="col-span-6 flex flex-col gap-1">
							<p className="text-sm font-semibold">{playerStatistic.player.name}</p>
							<p>{playerStatistic.statistics[0].team.name}</p>
						</div>
						<p className="col-span-1">{objectKey}</p>
					</div>
				);
			})}
		</div>
	);
}
