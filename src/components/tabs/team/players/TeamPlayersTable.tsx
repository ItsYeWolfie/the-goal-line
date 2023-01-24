import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faFutbol, faRug, faShirt } from '@fortawesome/free-solid-svg-icons';
import { IPlayerWithStatistics } from '../../../../types/Player.types';
import TableHeader from '../../../table/TableHeader';
import SmallTableCell from '../../../table/SmallTableCell';

export default function TeamPlayersTable({
	title,
	players,
	activeLeagueId,
}: {
	title: string;
	players: IPlayerWithStatistics[];
	activeLeagueId: number;
}) {
	return (
		<article className="mb-2">
			<header className="mb-2 text-xl font-medium text-neutral-300">{title}</header>
			<table className="w-full divide-y-2 divide-neutral-600 rounded-md border border-neutral-700 text-sm">
				<thead className="bg-neutral-800">
					<tr>
						<TableHeader className="px-3 text-left sm:pl-6">Name</TableHeader>
						<TableHeader className="px-3 text-center">Age</TableHeader>
						<TableHeader className="px-3 text-center">
							<FontAwesomeIcon icon={faShirt} />
						</TableHeader>
						<TableHeader className="px-3 text-center">
							<FontAwesomeIcon icon={faFutbol} />
						</TableHeader>
						<TableHeader className="px-3 text-center">
							<FontAwesomeIcon
								icon={faRug}
								className="rotate-90 text-yellow-500"
							/>
						</TableHeader>
						<TableHeader className="px-3 py-1 text-center">
							<FontAwesomeIcon
								icon={faRug}
								className="rotate-90 text-red-500"
							/>
						</TableHeader>
					</tr>
				</thead>
				<tbody className="divide-y divide-neutral-600 text-sm text-neutral-300">
					{players.map((statistic, index) => (
						<tr
							className={`${index % 2 === 1 ? 'bg-neutral-600 ' : 'bg-neutral-700 '}`}
							key={statistic.player.id}
						>
							<SmallTableCell className="sm:pl-6">
								{statistic.player.firstname} {statistic.player.lastname}
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.games.captain)
									.reduce((a, b) => a || b, false) && (
									<FontAwesomeIcon
										icon={faCrown}
										className="text-yellow-500"
									/>
								)}
							</SmallTableCell>
							<SmallTableCell className="text-center">{statistic.player.age}</SmallTableCell>

							<SmallTableCell className="text-center">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.games.appearences)
									.reduce((a, b) => a + b, 0)}
							</SmallTableCell>
							<SmallTableCell className="text-center">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.goals.total)
									.reduce((a, b) => a + b, 0)}
							</SmallTableCell>
							<SmallTableCell className="text-center">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.cards.yellow)
									.reduce((a, b) => a + b, 0)}
							</SmallTableCell>
							<SmallTableCell className="text-center">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.cards.red)
									.reduce((a, b) => a + b, 0)}
							</SmallTableCell>
						</tr>
					))}
				</tbody>
			</table>
		</article>
	);
}
