import { Link } from 'react-router-dom';
import GetRankColor from '../../../../../lib/helpers/rank-color';
import RankToString from '../../../../../lib/helpers/rank-string';
import { ILeagueStanding } from '../../../../../types/League.types';
import TableHead from '../../../../table/Head';
import TableHeader from '../../../../table/Header';
import TinyTableCell from '../../../../table/TinyCell';

export default function LeagueOverviewStandings({ standings }: { standings: ILeagueStanding[] }) {
	return (
		<table className="w-full">
			<TableHead className="text-xs">
				<tr>
					<TableHeader className="pl-3 text-left">Pos</TableHeader>
					<TableHeader className="pl-3 text-left">Team</TableHeader>
					<TableHeader className="pl-3">P</TableHeader>
					<TableHeader className="pl-3">W</TableHeader>
					<TableHeader className="pl-3">D</TableHeader>
					<TableHeader className="pl-3">L</TableHeader>
					<TableHeader className="pl-3">GD</TableHeader>
					<TableHeader className="px-3">PTS</TableHeader>
				</tr>
			</TableHead>
			<tbody className="text-sm text-gray-300">
				{standings.map((standing, index) => {
					const backgroundColor = GetRankColor(standing.rank, index);
					const rankString = RankToString(standing.rank);
					return (
						<tr
							key={standing.team.id}
							className={`transition-colors duration-300 dark:bg-opacity-40  dark:hover:bg-gray-600 ${backgroundColor}`}
						>
							<TinyTableCell>{rankString}</TinyTableCell>
							<TinyTableCell>
								<Link
									to={`/teams/${standing.team.id}/`}
									className="flex items-center gap-2"
								>
									<img
										src={standing.team.logo}
										alt={standing.team.name}
										loading="lazy"
										className="h-4 w-4 rounded-full object-cover"
									/>
									<span>{standing.team.name}</span>
								</Link>
							</TinyTableCell>
							<TinyTableCell className="text-center">{standing.all.played}</TinyTableCell>
							<TinyTableCell className="text-center">{standing.all.win}</TinyTableCell>
							<TinyTableCell className="text-center">{standing.all.draw}</TinyTableCell>
							<TinyTableCell className="text-center">{standing.all.lose}</TinyTableCell>
							<TinyTableCell className="text-center">{standing.goalsDiff}</TinyTableCell>
							<TinyTableCell
								className="text-center"
								last
							>
								{standing.points}
							</TinyTableCell>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
