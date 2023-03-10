import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faFutbol, faRug, faShirt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { IPlayerWithStatistics } from '../../../../types/Player.types';
import TableHeader from '../../../table/Header';
import SmallTableCell from '../../../table/SmallCell';
import TableHead from '../../../table/Head';
import TableRow from '../../../table/Row';
import LogoAndImage from '../../../image/LogoAndImage';

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
			<header className="mb-2 text-xl font-medium text-gray-700 dark:text-gray-300">{title}</header>
			<table className="w-full text-sm">
				<TableHead>
					<tr>
						<TableHeader className="px-3 py-1 text-left sm:pl-6">Name</TableHeader>
						<TableHeader className="px-3 text-center">Age</TableHeader>
						<TableHeader className="px-3 text-center">
							<FontAwesomeIcon icon={faShirt} />
						</TableHeader>
						<TableHeader className="px-3 text-center">
							<FontAwesomeIcon icon={faFutbol} />
						</TableHeader>
						<TableHeader className="hidden px-3 text-center sm:table-cell">
							<FontAwesomeIcon
								icon={faRug}
								className="rotate-90 text-yellow-500"
							/>
						</TableHeader>
						<TableHeader className="hidden px-3 text-center sm:table-cell">
							<FontAwesomeIcon
								icon={faRug}
								className="rotate-90 text-red-500"
							/>
						</TableHeader>
					</tr>
				</TableHead>
				<tbody className="text-sm text-gray-700 dark:text-gray-300">
					{players.map((statistic, index) => (
						<TableRow
							key={statistic.player.id}
							even={index % 2 === 0}
						>
							<SmallTableCell className="sm:pl-6">
								<Link to={`/players/${statistic.player.id}/`}>
									<LogoAndImage
										alt={`${statistic.player.firstname} ${statistic.player.lastname}`}
										src={statistic.player.photo}
										name={`${statistic.player.firstname} ${statistic.player.lastname}`}
									/>
								</Link>
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
							<SmallTableCell className="hidden text-center sm:table-cell">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.cards.yellow)
									.reduce((a, b) => a + b, 0)}
							</SmallTableCell>
							<SmallTableCell className="hidden text-center sm:table-cell">
								{statistic.statistics
									.filter((stat) => stat.league.id === activeLeagueId)
									.map((stat) => stat.cards.red)
									.reduce((a, b) => a + b, 0)}
							</SmallTableCell>
						</TableRow>
					))}
				</tbody>
			</table>
		</article>
	);
}
