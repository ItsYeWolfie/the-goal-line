import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IFixture } from '../../../../types/Fixture.types';
import TableHeader from '../../../table/Header';
import SmallTableCell from '../../../table/SmallCell';
import TableHead from '../../../table/Head';
import PaginatedPrevAndNext from '../../../pagination/PrevAndNext';
import LogoAndImage from '../../../image/LogoAndImage';

export default function TeamFixturesTable({ fixtures, teamID: teamIDInt }: { fixtures: IFixture[]; teamID: number }) {
	const [displayedItems, setDisplayedItems] = useState([] as IFixture[]);

	return (
		<>
			<table className="min-w-full">
				<TableHead className="sticky top-0 text-left text-xs">
					<tr>
						<TableHeader className="p-3 sm:pl-6 md:table-cell">Opponent</TableHeader>
						<TableHeader className="hidden p-3 lg:table-cell">Round</TableHeader>
						<TableHeader className="hidden p-3 md:table-cell">Date</TableHeader>
						<TableHeader className="hidden p-3 md:table-cell">Side</TableHeader>
						<TableHeader className="p-3 md:table-cell">Status</TableHeader>
						<TableHeader className="p-3  md:table-cell">Result</TableHeader>
					</tr>
				</TableHead>

				<tbody className="text-sm text-gray-300">
					{displayedItems.map((fixture) => {
						const { fixture: match, goals, league, teams } = fixture;
						const { home, away } = teams;
						const isHome = home.id === teamIDInt;
						const isWinner = Object.values(teams).find((team) => team.id === teamIDInt && team.winner);

						const { status } = match;
						let backgroundColor = 'bg-gray-700';
						if (isWinner) {
							backgroundColor = 'bg-green-600 dark:bg-green-700';
						} else if (status.short === 'FT' && goals.home === goals.away) {
							backgroundColor = 'bg-yellow-600 dark:bg-yellow-700';
						} else if (!isWinner && status.short === 'FT') {
							backgroundColor = 'bg-red-600 dark:bg-red-700';
						} else if (status.short === 'NS') {
							backgroundColor = 'bg-blue-600 dark:bg-blue-800';
						}
						const { date } = match;
						const formattedDate = new Date(date).toLocaleDateString('en-GB', {
							year: 'numeric',
							month: 'numeric',
							day: 'numeric',
						});
						return (
							<tr
								className={`${backgroundColor} transition-colors duration-300 dark:bg-opacity-40`}
								key={fixture.fixture.id}
							>
								<SmallTableCell className="text-sm sm:pl-6">
									<div className="font-medium text-gray-200">
										<Link to={`/teams/${isHome ? away.id : home.id}/`}>
											<LogoAndImage
												alt={isHome ? away.name : home.name}
												src={isHome ? away.logo : home.logo}
												name={isHome ? away.name : home.name}
											/>
										</Link>
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
								<SmallTableCell className="hidden lg:table-cell">
									<Link to={`/matches/${match.id}/`}>{league.round}</Link>
								</SmallTableCell>
								<SmallTableCell className="hidden md:table-cell">
									<Link to={`/matches/${match.id}/`}>{formattedDate}</Link>
								</SmallTableCell>
								<SmallTableCell className="hidden text-xs uppercase md:table-cell">
									<Link to={`/matches/${match.id}/`}>{isHome ? 'Home' : 'Away'}</Link>
								</SmallTableCell>
								<SmallTableCell className="text-xs uppercase">
									<Link to={`/matches/${match.id}/`}>{status.short}</Link>
								</SmallTableCell>
								<SmallTableCell className="text-xs uppercase">
									<Link to={`/matches/${match.id}/`}>
										{goals.home} - {goals.away}
										{isWinner && (
											<FontAwesomeIcon
												icon={faTrophy}
												className="ml-2 text-green-500"
											/>
										)}
									</Link>
								</SmallTableCell>
							</tr>
						);
					})}
				</tbody>
			</table>
			<PaginatedPrevAndNext
				items={fixtures}
				setDisplayedItems={setDisplayedItems}
				splitCount={10}
				className="flex justify-between"
			/>
		</>
	);
}
