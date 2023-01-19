import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { IFixture } from '../../../../../types/Fixture.types';

export default function TeamFixturesTable({
	fixtures,
	teamIDInt,
}: {
	fixtures: IFixture[];
	teamIDInt: number;
}) {
	return (
		<table className="min-w-full">
			<thead className="sticky top-0 bg-gray-800">
				<tr>
					<th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300 sm:pl-6 md:table-cell">
						Opponent
					</th>
					<th className="hidden p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300 lg:table-cell">
						Round
					</th>
					<th className="hidden p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300 md:table-cell">
						Date
					</th>
					<th className="hidden p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300 md:table-cell">
						Side
					</th>
					<th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300 md:table-cell">
						Status
					</th>
					<th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300 md:table-cell">
						Result
					</th>
				</tr>
			</thead>

			<tbody className="divide-y divide-gray-500">
				{fixtures.map((fixture, index) => {
					const { fixture: match, goals, league, teams } = fixture;
					const { home, away } = teams;
					const isHome = home.id === teamIDInt;
					const isWinner = Object.values(teams).find(
						(team) => team.id === teamIDInt && team.winner,
					);
					const { status } = match;
					const { date } = match;
					const formattedDate = new Date(date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					});
					return (
						<tr
							className={`${index % 2 === 1 ? 'bg-gray-600' : 'bg-gray-700'}`}
							key={fixture.fixture.id}>
							<td className="p-3 text-sm sm:pl-6">
								<div className="font-medium text-gray-200">
									{isHome ? away.name : home.name}
								</div>
								<div className="mt-1 flex flex-col text-xs text-gray-300">
									<div className="flex items-center gap-1 lg:hidden">
										<span className="font-semibold">Round:</span>
										<span>{league.round}</span>
									</div>
									<div className="flex items-center gap-1 md:hidden">
										<span className="font-semibold">Date:</span>
										<span>{formattedDate}</span>
									</div>
									<div className="flex items-center gap-1 md:hidden">
										<span className="font-semibold">Side:</span>
										<span>{isHome ? 'Home' : 'Away'}</span>
									</div>
								</div>
							</td>
							<td className=" hidden px-3 py-3.5 text-sm text-gray-300 lg:table-cell">
								{league.round}
							</td>
							<td className="hidden px-3 py-3.5 text-sm text-gray-300 md:table-cell">
								{formattedDate}
							</td>
							<td className="hidden px-3 py-3.5 text-xs uppercase text-gray-300 md:table-cell">
								{isHome ? 'Home' : 'Away'}
							</td>
							<td className="px-3 py-3.5 text-xs uppercase text-gray-300">
								{status.short}
							</td>
							<td className="px-3 py-3.5 text-xs uppercase text-gray-300">
								{goals.home} - {goals.away}
								{isWinner && (
									<FontAwesomeIcon
										icon={faTrophy}
										className="ml-2 text-green-500"
									/>
								)}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
