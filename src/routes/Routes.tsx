import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/404';
import TeamOverviewPage from '../pages/team/TeamOverview';
import TeamIndex from '../pages/team/Index';
import teamOverviewLoader, {
	teamCoachesLoader,
	teamFixturesLoader,
	teamInjuriesLoader,
	teamLoader,
	teamPlayersLoader,
	teamStandingsLoader,
	teamTransfersLoader,
} from '../lib/loaders/TeamLoaders';
import TeamFixturesPage from '../pages/team/TeamFixtures';
import TeamStandings from '../pages/team/TeamStandings';
import TeamPlayers from '../pages/team/TeamPlayers';
import TeamTransfers from '../pages/team/TeamTransfers';
import TeamCoachesPage from '../pages/team/TeamCoaches';
import TeamInjuriesPage from '../pages/team/TeamInjuries';
import Root from '../pages/Root';
import IndexPage from '../pages/Index';
import TeamsIndexPage from '../pages/teams/Index';
import teamsLoader from '../lib/loaders/TeamsLoaders';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <IndexPage />,
				index: true,
			},
			{
				path: 'teams',
				children: [
					{
						index: true,
						element: <TeamsIndexPage />,
						loader: teamsLoader,
					},
				],
			},
			{
				path: '/team/:teamID',
				element: <TeamIndex />,
				loader: teamLoader,
				children: [
					{
						index: true,
						element: <TeamOverviewPage />,
						loader: teamOverviewLoader,
					},
					{
						path: 'fixtures',
						element: <TeamFixturesPage />,
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
						element: <TeamCoachesPage />,
						loader: teamCoachesLoader,
					},
					{
						path: 'injuries',
						element: <TeamInjuriesPage />,
						loader: teamInjuriesLoader,
					},
				],
			},
		],
	},
]);

export default router;
