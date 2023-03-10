import { useOutletContext, Link } from 'react-router-dom';
import GetRankColor from '../../../../lib/helpers/rank-color';
import { ILeagueStanding } from '../../../../types/League.types';
import { ITeamAndVenue } from '../../../../types/Team.types';
import FormIconArray from '../../../icons/FormIconArray';
import SmallTableCell from '../../../table/SmallCell';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import LogoAndImage from '../../../image/LogoAndImage';

export default function StandingsTable({ standings }: { standings: ILeagueStanding[] }) {
	const { team: teamContext } = useOutletContext() as { team: ITeamAndVenue['team'] };
	return (
		<table className="basis-8/12">
			<TableHead className="sticky top-0">
				<tr>
					<TableHeader className="px-6 py-3">#</TableHeader>
					<TableHeader className="p-3 text-left">Team</TableHeader>
					<TableHeader className="p-3 text-left">MP</TableHeader>
					<TableHeader className="hidden p-3 text-left md:table-cell">W</TableHeader>
					<TableHeader className="hidden p-3 text-left md:table-cell">D</TableHeader>
					<TableHeader className="hidden p-3 text-left md:table-cell">L</TableHeader>
					<TableHeader className="hidden p-3 text-left sm:table-cell">GF</TableHeader>
					<TableHeader className="hidden p-3 text-left sm:table-cell">GA</TableHeader>
					<TableHeader className="p-3 text-left">PTS</TableHeader>
					<TableHeader className="hidden p-3 text-left sm:table-cell">Form</TableHeader>
				</tr>
			</TableHead>
			<tbody className="text-sm text-gray-300">
				{standings.map((standing, index) => {
					const backgroundColor = GetRankColor(standing.rank, index);

					const { team, form } = standing;
					const formArray = form.split('');
					return (
						<tr
							className={`transition-colors duration-300 dark:bg-opacity-40  dark:hover:bg-gray-600 ${backgroundColor}`}
							key={team.id}
						>
							<SmallTableCell className="w-16 text-center">{standing.rank}</SmallTableCell>
							<SmallTableCell className={`${teamContext.id === team.id ? 'text-yellow-400' : ''}`}>
								<Link to={`/teams/${team.id}/`}>
									<LogoAndImage
										src={team.logo}
										alt={`${team.name} Logo`}
										name={team.name}
									/>
								</Link>
								<div className="mt-1 ml-2 flex flex-col text-xs">
									<div className="flex items-center gap-1 md:hidden">
										<span className="font-semibold">Matches:</span>
										<span>
											(W: {standing.all.win}, D: {standing.all.draw}, L: {standing.all.lose})
										</span>
									</div>
									<div className="flex items-center gap-1 sm:hidden">
										<span className="font-semibold">Goals:</span>
										<span>
											(GF: {standing.all.goals.for}, GA: {standing.all.goals.against})
										</span>
									</div>
									<div className="flex items-center gap-1 sm:hidden">
										<span className="font-semibold">Form:</span>
										<FormIconArray array={formArray} />
									</div>
								</div>
							</SmallTableCell>
							<SmallTableCell>{standing.all.played}</SmallTableCell>
							<SmallTableCell className="hidden md:table-cell">{standing.all.win}</SmallTableCell>
							<SmallTableCell className="hidden md:table-cell">{standing.all.draw}</SmallTableCell>
							<SmallTableCell className="hidden md:table-cell">{standing.all.lose}</SmallTableCell>
							<SmallTableCell className="hidden sm:table-cell">{standing.all.goals.for}</SmallTableCell>
							<SmallTableCell className="hidden sm:table-cell">{standing.all.goals.against}</SmallTableCell>
							<SmallTableCell>{standing.points}</SmallTableCell>
							<SmallTableCell className="hidden sm:table-cell">
								<FormIconArray array={formArray} />
							</SmallTableCell>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
