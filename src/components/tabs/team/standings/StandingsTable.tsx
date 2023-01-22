import { ILeagueStanding } from '../../../../../types/League.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function StandingsTable({ standings }: { standings: ILeagueStanding[] }) {
	return (
		<table className="basis-8/12">
			<thead className="sticky top-0 bg-gray-800 text-xs">
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
							<SmallTableCell className="w-16 text-center">{standing.rank}</SmallTableCell>
							<SmallTableCell>
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
										{formArray.map((formItem, formIndex) => {
											let formClass = '';

											switch (formItem) {
												case 'W':
													formClass = 'bg-green-500';
													break;

												case 'D':
													formClass = 'bg-yellow-500';
													break;

												case 'L':
													formClass = 'bg-red-500';
													break;

												default:
													formClass = 'bg-gray-500';
											}

											return (
												<i
													key={formIndex}
													className={`h-3 w-3 rounded-full ${formClass}`}
												>
													<span className="sr-only">{formItem}</span>
												</i>
											);
										})}
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
							</SmallTableCell>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
