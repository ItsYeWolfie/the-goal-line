import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/404';
import TeamPage from '../pages/team/TeamOverview';
import TeamIndex from '../pages/team/Index';
import teamOverviewLoader, {
	teamCoachesLoader,
	teamFixturesLoader,
	teamLoader,
	teamPlayersLoader,
	teamStandingsLoader,
	teamTransfersLoader,
} from '../../lib/loaders/TeamLoaders';
import TeamFixtures from '../pages/team/TeamFixtures';
import TeamStandings from '../pages/team/TeamStandings';
import TeamPlayers from '../pages/team/TeamPlayers';
import TeamTransfers from '../pages/team/TeamTransfers';
import TeamCoaches from '../pages/team/TeamCoaches';

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: 'Home',
				index: true,
			},
			{
				path: '/team/:teamID',
				element: <TeamIndex />,
				loader: teamLoader,
				children: [
					{
						index: true,
						element: <TeamPage />,
						loader: teamOverviewLoader,
					},
					{
						path: 'fixtures',
						element: <TeamFixtures />,
						loader: teamFixturesLoader,
					},
					{
						path: 'standings',
						element: <TeamStandings />,
						loader: teamStandingsLoader,
					},
					{
						path: 'players',
						element: <TeamPlayers />,
						loader: teamPlayersLoader,
					},
					{
						path: 'transfers',
						element: <TeamTransfers />,
						loader: teamTransfersLoader,
					},
					{
						path: 'coaches',
						element: <TeamCoaches />,
						loader: teamCoachesLoader,
					},
				],
			},
		],
	},
]);

export default router;
