import { useLoaderData } from 'react-router-dom';
import { ILeagueWithStanding } from '../../../types/League.types';
import TableCell from '../../components/table/TableCell';
import TableHeader from '../../components/table/TableHeader';

export default function TeamStandings() {
	const league = useLoaderData() as ILeagueWithStanding;
	const { standings } = league;
	return (
		<table className="min-w-full">
			<thead className="sticky top-0 bg-gray-800 text-xs">
				<tr>
					<TableHeader className="px-6 py-3">#</TableHeader>
					<TableHeader className="p-3 text-left">Team</TableHeader>
					<TableHeader className="p-3 text-left">MP</TableHeader>
					<TableHeader className="hidden p-3 text-left md:table-cell">
						W
					</TableHeader>
					<TableHeader className="hidden p-3 text-left md:table-cell">
						D
					</TableHeader>
					<TableHeader className="hidden p-3 text-left md:table-cell">
						L
					</TableHeader>
					<TableHeader className="hidden p-3 text-left sm:table-cell">
						GF
					</TableHeader>
					<TableHeader className="hidden p-3 text-left sm:table-cell">
						GA
					</TableHeader>
					<TableHeader className="p-3 text-left">PTS</TableHeader>
					<TableHeader className="p-3 text-left">Form</TableHeader>
				</tr>
			</thead>
			<tbody className="divide-y divide-gray-500 text-sm text-gray-300">
				{standings.map((standing, index) => {
					const { team, form } = standing;
					const formArray = form.split('');
					return (
						<tr
							className={`${index % 2 === 1 ? 'bg-gray-600' : 'bg-gray-700'}`}
							key={team.id}
						>
							<TableCell className="w-16 text-center">
								{standing.rank}
							</TableCell>
							<TableCell>
								<img
									className="inline-block h-6 w-6"
									src={team.logo}
									alt={`${team.name} Logo`}
									loading="lazy"
								/>
								<span className="ml-2 font-semibold">{team.name}</span>
								<div className="mt-1 flex flex-col text-xs text-gray-300">
									<div className="flex items-center gap-1 md:hidden">
										<span className="font-semibold">Matches:</span>
										<span>
											(W: {standing.all.win}, D: {standing.all.draw}, L:{' '}
											{standing.all.lose})
										</span>
									</div>
									<div className="flex items-center gap-1 sm:hidden">
										<span className="font-semibold">Goals:</span>
										<span>
											(GF: {standing.all.goals.for}, GA:{' '}
											{standing.all.goals.against})
										</span>
									</div>
								</div>
							</TableCell>
							<TableCell>{standing.all.played}</TableCell>
							<TableCell className="hidden md:table-cell">
								{standing.all.win}
							</TableCell>
							<TableCell className="hidden md:table-cell">
								{standing.all.draw}
							</TableCell>
							<TableCell className="hidden md:table-cell">
								{standing.all.lose}
							</TableCell>
							<TableCell className="hidden sm:table-cell">
								{standing.all.goals.for}
							</TableCell>
							<TableCell className="hidden sm:table-cell">
								{standing.all.goals.against}
							</TableCell>
							<TableCell>{standing.points}</TableCell>
							<TableCell>
								{formArray.map((f, i) => {
									let color = 'bg-gray-500';
									switch (f) {
										case 'W':
											color = 'bg-green-500';
											break;
										case 'D':
											color = 'bg-yellow-500';
											break;
										case 'L':
											color = 'bg-red-500';
											break;

										default:
											break;
									}
									return (
										<div
											key={i}
											className={`${color} mr-1 inline-block h-4 w-4 rounded-full`}
										>
											<span className="sr-only">{f}</span>
										</div>
									);
								})}
							</TableCell>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
