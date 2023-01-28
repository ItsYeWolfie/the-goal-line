import { RouteObject } from 'react-router-dom';
import LeagueMainSection from '../components/tabs/leagues/league/LeagueMainSection';
import { leagueLoader } from '../lib/loaders/leagueLoaders';
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
				element: <LeagueMainSection />,
			},
		],
	},
];

export default LeagueRoutes;
