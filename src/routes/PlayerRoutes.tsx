import { RouteObject } from 'react-router-dom';
import PlayerIndex from '../pages/players/player/PlayerIndex';

export const PlayerRoutes: RouteObject[] = [
	{
		index: true,
		element: <div>Players</div>,
	},
	{
		path: ':playerID',
		element: <PlayerIndex />,
		children: [
			// {
			// 	index: true,
			// 	element: <LeagueOverview />,
			// 	loader: leagueOverviewLoader,
			// },
			// {
			// 	path: 'fixtures',
			// 	element: <LeagueFixturesPage />,
			// 	loader: leagueFixturesLoader,
			// },
			// {
			// 	path: 'player-statistics',
			// 	element: <LeaguePlayerStatistics />,
			// 	loader: leaguePlayerStatisticsLoader,
			// },
		],
	},
];

export default PlayerRoutes;
