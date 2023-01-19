import { useLoaderData } from 'react-router-dom';
import { ILeagueWithStanding } from '../../../types/League.types';

export default function TeamStandings() {
	const league = useLoaderData() as ILeagueWithStanding;
	const { standings } = league;
	return (
		<table className="min-w-full">
			<thead className="sticky top-0 bg-gray-800">
				<tr>
					<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
						#
					</th>
					<th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
						Team
					</th>
					<th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
						MP
					</th>
					<th className="hidden p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300 md:table-cell">
						W
					</th>
					<th className="hidden p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300 md:table-cell">
						D
					</th>
					<th className="hidden p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300 md:table-cell">
						L
					</th>
					<th className="hidden p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300 sm:table-cell">
						GF
					</th>
					<th className="hidden p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300 sm:table-cell">
						GA
					</th>
					<th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
						PTS
					</th>
					<th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
						Form
					</th>
				</tr>
			</thead>
			<tbody className="divide-y divide-gray-500">
				{standings.map((standing, index) => {
					const { team, form } = standing;
					const formArray = form.split('');
					return (
						<tr
							className={`${index % 2 === 1 ? 'bg-gray-600' : 'bg-gray-700'}`}
							key={team.id}>
							<td className="px-6 py-3.5 text-sm text-gray-300">
								{standing.rank}
							</td>
							<td className="px-3 py-3.5 text-sm text-gray-300">
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
							</td>
							<td className="px-3 py-3.5 text-sm text-gray-300">
								{standing.all.played}
							</td>
							<td className="hidden px-3 py-3.5 text-sm text-gray-300 md:table-cell">
								{standing.all.win}
							</td>
							<td className="hidden px-3 py-3.5 text-sm text-gray-300 md:table-cell">
								{standing.all.draw}
							</td>
							<td className="hidden px-3 py-3.5 text-sm text-gray-300 md:table-cell">
								{standing.all.lose}
							</td>
							<td className="hidden px-3 py-3.5 text-sm text-gray-300 sm:table-cell">
								{standing.all.goals.for}
							</td>
							<td className="hidden px-3 py-3.5 text-sm text-gray-300 sm:table-cell">
								{standing.all.goals.against}
							</td>
							<td className="px-3 py-3.5 text-sm text-gray-300">
								{standing.points}
							</td>
							<td className="px-3 py-3.5 text-sm text-gray-300">
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
											className={`${color} mr-1 inline-block h-4 w-4 rounded-full`}>
											<span className="sr-only">{f}</span>
										</div>
									);
								})}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
