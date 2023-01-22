import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { IFixture } from '../../../../../types/Fixture.types';
import TableHeader from '../../../table/TableHeader';
import SmallTableCell from '../../../table/SmallTableCell';

export default function TeamFixturesTable({ fixtures, teamIDInt }: { fixtures: IFixture[]; teamIDInt: number }) {
	return (
		<table className="min-w-full">
			<thead className="sticky top-0 bg-gray-800 text-left text-xs">
				<tr>
					<TableHeader className="p-3 sm:pl-6 md:table-cell">Opponent</TableHeader>
					<TableHeader className="hidden p-3 lg:table-cell">Round</TableHeader>
					<TableHeader className="hidden p-3 md:table-cell">Date</TableHeader>
					<TableHeader className="hidden p-3 md:table-cell">Side</TableHeader>
					<TableHeader className="p-3 md:table-cell">Status</TableHeader>
					<TableHeader className="p-3  md:table-cell">Result</TableHeader>
				</tr>
			</thead>

			<tbody className="divide-y divide-gray-500 text-sm text-gray-300">
				{fixtures.map((fixture, index) => {
					const { fixture: match, goals, league, teams } = fixture;
					const { home, away } = teams;
					const isHome = home.id === teamIDInt;
					const isWinner = Object.values(teams).find((team) => team.id === teamIDInt && team.winner);
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
							key={fixture.fixture.id}
						>
							<SmallTableCell className="text-sm sm:pl-6">
								<div className="font-medium text-gray-200">
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
