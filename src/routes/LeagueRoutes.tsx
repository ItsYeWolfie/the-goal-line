import { RouteObject } from 'react-router-dom';
import LeagueOverview from '../components/tabs/leagues/league/overview/Index';
import {
	leagueFixturesLoader,
	leagueLoader,
	leagueOverviewLoader,
	leaguePlayerStatisticsLoader,
} from '../lib/loaders/league-loaders';
import LeagueFixturesPage from '../pages/leagues/league/Fixtures';
import LeagueIndex from '../pages/leagues/league/Index';
import LeaguePlayerStatistics from '../pages/leagues/league/PlayerStatistics';
// import LeaguesIndex from '../pages/leagues/Index';

export const LeagueRoutes: RouteObject[] = [
	// {
	// 	// index: true,
	// 	// element: <LeaguesIndex />,
	// },
	{
		path: '/leagues/:leagueID',
		element: <LeagueIndex />,
		loader: leagueLoader,
		children: [
			{
				index: true,
				element: <LeagueOverview />,
				loader: leagueOverviewLoader,
			},
			{
				path: 'fixtures',
				element: <LeagueFixturesPage />,
				loader: leagueFixturesLoader,
			},
			{
				path: 'player-statistics',
				element: <LeaguePlayerStatistics />,
				loader: leaguePlayerStatisticsLoader,
			},
		],
	},
];

export default LeagueRoutes;
