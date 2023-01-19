import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCrown,
	faFutbol,
	faRug,
	faShirt,
} from '@fortawesome/free-solid-svg-icons';
import { IPlayerWithStatistics } from '../../../../../types/Player.types';

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
			<header className="mb-2 text-xl font-medium text-gray-300">
				{title}
			</header>
			<table className="mb-8 w-full divide-y-2 divide-gray-600 rounded-md border border-gray-700 text-sm">
				<thead className="bg-gray-800">
					<th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300 sm:pl-6">
						Name
					</th>
					<th className="pl-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
						Age
					</th>
					<th className="pl-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
						<FontAwesomeIcon icon={faShirt} />
					</th>
					<th className="pl-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
						<FontAwesomeIcon icon={faFutbol} />
					</th>
					<th className="pl-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
						<FontAwesomeIcon
							icon={faRug}
							className="rotate-90 text-yellow-500"
						/>
					</th>
					<th className="p-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
						<FontAwesomeIcon
							icon={faRug}
							className="rotate-90 text-red-500"
						/>
					</th>
				</thead>
				<tbody className="divide-y divide-gray-600">
					{players.map((statistic, index) => (
						<tr
							className={`${index % 2 === 1 ? 'bg-gray-600 ' : 'bg-gray-700 '}`}
							key={statistic.player.id}>
							<td className="py-3.5 px-6 text-sm text-gray-300">
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
							</td>
							<td className="py-3.5 pl-3 text-sm text-gray-300">
								{statistic.player.age}
							</td>

							<td className="py-3.5 pl-3 text-sm text-gray-300">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.games.appearences)
									.reduce((a, b) => a + b, 0)}
							</td>
							<td className="py-3.5 pl-3 text-sm text-gray-300">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.goals.total)
									.reduce((a, b) => a + b, 0)}
							</td>
							<td className="py-3.5 pl-3 text-sm text-gray-300">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.cards.yellow)
									.reduce((a, b) => a + b, 0)}
							</td>
							<td className="py-3.5 pl-3 text-sm text-gray-300">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.cards.red)
									.reduce((a, b) => a + b, 0)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</article>
	);
}
