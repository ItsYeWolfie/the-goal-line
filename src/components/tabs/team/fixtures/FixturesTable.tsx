import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { IFixture } from '../../../../types/Fixture.types';
import TableHeader from '../../../table/TableHeader';
import SmallTableCell from '../../../table/SmallTableCell';

export default function TeamFixturesTable({ fixtures, teamID: teamIDInt }: { fixtures: IFixture[]; teamID: number }) {
	return (
		<table className="min-w-full">
			<thead className="sticky top-0 bg-neutral-800 text-left text-xs">
				<tr>
					<TableHeader className="p-3 sm:pl-6 md:table-cell">Opponent</TableHeader>
					<TableHeader className="hidden p-3 lg:table-cell">Round</TableHeader>
					<TableHeader className="hidden p-3 md:table-cell">Date</TableHeader>
					<TableHeader className="hidden p-3 md:table-cell">Side</TableHeader>
					<TableHeader className="p-3 md:table-cell">Status</TableHeader>
					<TableHeader className="p-3  md:table-cell">Result</TableHeader>
				</tr>
			</thead>

			<tbody className="divide-y divide-neutral-500 text-sm text-neutral-300">
				{fixtures.map((fixture) => {
					const { fixture: match, goals, league, teams } = fixture;
					const { home, away } = teams;
					const isHome = home.id === teamIDInt;
					const isWinner = Object.values(teams).find((team) => team.id === teamIDInt && team.winner);

					const { status } = match;
					let backgroundColor = 'bg-neutral-700';
					if (isWinner) {
						backgroundColor = 'bg-green-700';
					} else if (status.short === 'FT' && goals.home === goals.away) {
						backgroundColor = 'bg-yellow-700';
					} else if (!isWinner && status.short === 'FT') {
						backgroundColor = 'bg-red-700';
					} else if (status.short === 'NS') {
						backgroundColor = 'bg-blue-800';
					}
					const { date } = match;
					const formattedDate = new Date(date).toLocaleDateString('en-GB', {
						year: 'numeric',
						month: 'numeric',
						day: 'numeric',
					});
					return (
						<tr
							className={`${backgroundColor} bg-opacity-40 transition-colors duration-300 hover:bg-neutral-600`}
							key={fixture.fixture.id}
						>
							<SmallTableCell className="text-sm sm:pl-6">
								<div className="font-medium text-neutral-200">
									<div className="flex items-center gap-3">
										<img
											src={isHome ? away.logo : home.logo}
											alt={isHome ? away.name : home.name}
											className="h-6 w-6"
										/>
										<span>{isHome ? away.name : home.name}</span>
									</div>
								</div>
								<div className="mt-1 flex flex-col text-xs">
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
							</SmallTableCell>
							<SmallTableCell className="hidden lg:table-cell">{league.round}</SmallTableCell>
							<SmallTableCell className="hidden md:table-cell">{formattedDate}</SmallTableCell>
							<SmallTableCell className="hidden text-xs uppercase md:table-cell">
								{isHome ? 'Home' : 'Away'}
							</SmallTableCell>
							<SmallTableCell className="text-xs uppercase">{status.short}</SmallTableCell>
							<SmallTableCell className="text-xs uppercase">
								{goals.home} - {goals.away}
								{isWinner && (
									<FontAwesomeIcon
										icon={faTrophy}
										className="ml-2 text-green-500"
									/>
								)}
							</SmallTableCell>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
