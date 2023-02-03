import { useState, useEffect } from 'react';
import StandingsLoader from '../../loaders/match-page/StandingsLoader';
import { ILeagueWithStanding } from '../../types/League.types';

function Standings() {
	const [standings, setStandings] = useState<ILeagueWithStanding>({} as ILeagueWithStanding);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/9755c43d23971a73fe3f');
			const data = await response.json();
			setStandings(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return <StandingsLoader />;
	}
	return (
		<div className="mx-auto h-auto w-full rounded-md bg-gray-200 p-2 dark:bg-gray-800 md:w-4/5 lg:h-auto lg:w-full">
			<table className="mx-auto table w-full rounded-t-md border-[0.5px] border-solid border-gray-400 border-opacity-30 p-2">
				<thead className="table-row-group h-9 p-1">
					<tr className="h-8 rounded-md border-b-[0.2px] border-solid border-gray-400 border-opacity-30">
						<th className="md:w-6">#</th>
						<th className="pl-2 text-left">Team</th>
						<th className="w-9 text-center">
							<span>P</span>
						</th>
						<th className="w-9 text-center">
							<span>GD</span>
						</th>
						<th className="w-9 text-center">
							<span>PTS</span>
						</th>
					</tr>
				</thead>
				<tbody className="table-row-group">
					{standings.standings.flat().map((standing) => (
						<tr
							className="relative h-8 rounded-md border-b-[0.2px] border-solid border-gray-400 border-opacity-30"
							key={standing.team.id}
						>
							<td className="relative items-center pl-1 text-center text-sm">
								{standings.standings.flat().slice(0, 4).includes(standing) ? (
									<span className="absolute top-7 -ml-2 w-7 rounded-t-md border-b-4 border-blue-500" />
								) : (
									''
								)}
								{standing === standings.standings.flat()[4] ? (
									<span className="absolute top-7 -ml-2 w-7 rounded-t-md border-b-4 border-orange-500" />
								) : (
									''
								)}
								{standings.standings.flat().slice(-3).includes(standing) ? (
									<span className="absolute top-7 -ml-1 w-7 rounded-t-md border-b-4 border-red-700" />
								) : (
									''
								)}
								<span className="pl-1 text-center text-sm">{standing.rank}</span>
							</td>
							<td className="w-60 pl-2 text-sm">
								<span className="flex">
									<img
										src={standing.team.logo}
										width="20px"
										alt=""
									/>
									<p className="pl-1">{standing.team.name}</p>
								</span>
							</td>
							<td className="w-9 pl-1 text-center text-sm">{standing.all.played}</td>
							<td className="w-9 pl-1 text-center text-sm">{standing.goalsDiff}</td>
							<td className="w-9 pl-1 text-center text-sm">{standing.points}</td>
						</tr>
					))}
				</tbody>
			</table>

			{!loading && (
				<div>
					<div className="mt-4 ml-4 text-[11px] lg:ml-1">
						<div className="flex">
							<div className="relative mt-0.5 mr-2 h-3 w-3 rounded-full bg-blue-500" />
							Champions League
						</div>
					</div>
					<div className="mt-2 ml-4 text-[11px] lg:ml-1">
						<div className="flex">
							<div className="relative mt-0.5 mr-2 h-3 w-3 rounded-full bg-orange-500" />
							Europa League
						</div>
					</div>
					<div className="mt-2 ml-4 text-[11px] lg:ml-1">
						<div className="flex">
							<div className="relative mt-0.5 mr-2 h-3 w-3 rounded-full bg-red-700" />
							Relegation
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Standings;
