import { RouteObject } from 'react-router-dom';
import LeagueOverview from '../components/tabs/leagues/league/overview/Index';
import { leagueFixturesLoader, leagueLoader, leagueOverviewLoader } from '../lib/loaders/league-loaders';
import LeagueFixturesPage from '../pages/leagues/league/LeagueFixtures';
import LeagueIndex from '../pages/leagues/league/LeagueIndex';
import LeaguesIndex from '../pages/leagues/LeaguesIndex';

export const LeagueRoutes: RouteObject[] = [
	{
		index: true,
		element: <LeaguesIndex />,
	},
	{
		path: ':leagueID',
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
		],
	},
];

export default LeagueRoutes;
