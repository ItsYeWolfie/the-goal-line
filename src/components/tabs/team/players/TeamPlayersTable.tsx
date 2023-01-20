import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faFutbol, faRug, faShirt } from '@fortawesome/free-solid-svg-icons';
import { IPlayerWithStatistics } from '../../../../../types/Player.types';
import TableCell from '../../../table/TableCell';
import TableHeader from '../../../table/TableHeader';

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
		<article>
			<header className="mb-2 text-xl font-medium text-gray-300">{title}</header>
			<table className="mb-8 w-full divide-y-2 divide-gray-600 rounded-md border border-gray-700 text-sm">
				<thead className="bg-gray-800">
					<tr>
						<TableHeader className="p-3 text-left sm:pl-6">Name</TableHeader>
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
						<TableHeader className="p-3 text-center">
							<FontAwesomeIcon
								icon={faRug}
								className="rotate-90 text-red-500"
							/>
						</TableHeader>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-600 text-sm text-gray-300">
					{players.map((statistic, index) => (
						<tr
							className={`${index % 2 === 1 ? 'bg-gray-600 ' : 'bg-gray-700 '}`}
							key={statistic.player.id}
						>
							<TableCell className="sm:pl-6">
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
							</TableCell>
							<TableCell className="text-center">{statistic.player.age}</TableCell>

							<TableCell className="text-center">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.games.appearences)
									.reduce((a, b) => a + b, 0)}
							</TableCell>
							<TableCell className="text-center">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.goals.total)
									.reduce((a, b) => a + b, 0)}
							</TableCell>
							<TableCell className="text-center">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.cards.yellow)
									.reduce((a, b) => a + b, 0)}
							</TableCell>
							<TableCell className="text-center">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.cards.red)
									.reduce((a, b) => a + b, 0)}
							</TableCell>
						</tr>
					))}
				</tbody>
			</table>
		</article>
	);
}
