import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchData from '../../../../../lib/helpers/Fetch';
import RankToString from '../../../../../lib/helpers/rank-string';
import { IPlayerWithStatistics } from '../../../../../types/Player.types';

export default function LeagueOverviewTopStatistics({
	title,
	url,
	type,
}: {
	title: string;
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
		<div className="col-span-12 flex flex-col gap-1 sm:col-span-6">
			<header className="text-xs font-medium uppercase">{title} &rarr;</header>
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
							<Link
								to={`/teams/${playerStatistic.statistics[0].team.id}/`}
								className="col-span-1"
							>
								<img
									src={playerStatistic.statistics[0].team.logo}
									alt={playerStatistic.statistics[0].team.name}
									className="mx-auto w-full rounded-full"
									loading="lazy"
								/>
							</Link>
							<img
								src={playerStatistic.player.photo}
								alt={playerStatistic.player.name}
								className="col-span-1 w-full rounded-full"
								loading="lazy"
							/>
							<div className="col-span-6 flex flex-col gap-1">
								<Link
									to={`/players/${playerStatistic.player.id}/`}
									className="text-sm font-semibold"
								>
									{playerStatistic.player.name}
								</Link>
								<p>{playerStatistic.statistics[0].team.name}</p>
							</div>
							<p className="col-span-1">{objectKey}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
