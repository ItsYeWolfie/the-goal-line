import { RouteObject } from 'react-router-dom';
import teamOverviewLoader, {
	teamCoachesLoader,
	teamFixturesLoader,
	teamInjuriesLoader,
	teamLoader,
	teamPlayersLoader,
	teamStandingsLoader,
	teamTransfersLoader,
} from '../lib/loaders/team-loaders';
import teamsLoader from '../lib/loaders/teams-loaders';
import TeamCoachesPage from '../pages/teams/team/TeamCoachesPage';
import TeamFixturesPage from '../pages/teams/team/TeamFixtures';
import TeamIndex from '../pages/teams/team/TeamIndex';
import TeamInjuriesPage from '../pages/teams/team/TeamInjuries';
import TeamOverviewPage from '../pages/teams/team/TeamOverview';
import TeamPlayers from '../pages/teams/team/TeamPlayers';
import TeamStandings from '../pages/teams/team/TeamStandings';
import TeamTransfersPage from '../pages/teams/team/TeamTransfers';
import TeamsIndex from '../pages/teams/TeamsIndex';

export const teamRoutes: RouteObject[] = [
	{
		index: true,
		element: <TeamsIndex />,
		loader: teamsLoader,
	},
	{
		path: ':teamID',
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
				element: <TeamTransfersPage />,
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
];

export default teamRoutes;
