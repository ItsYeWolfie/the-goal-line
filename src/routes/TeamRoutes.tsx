import { RouteObject } from 'react-router-dom';
import {
	teamOverviewLoader,
	teamCoachesLoader,
	teamFixturesLoader,
	teamInjuriesLoader,
	teamLoader,
	teamPlayersLoader,
	teamStandingsLoader,
	teamTransfersLoader,
} from '../lib/loaders/team-loaders';
import teamsLoader from '../lib/loaders/teams-loaders';
import TeamCoachesPage from '../pages/teams/team/Coaches';
import TeamFixturesPage from '../pages/teams/team/Fixtures';
import TeamIndex from '../pages/teams/team/Index';
import TeamInjuriesPage from '../pages/teams/team/Injuries';
import TeamOverviewPage from '../pages/teams/team/Overview';
import TeamPlayers from '../pages/teams/team/Players';
import TeamStandings from '../pages/teams/team/Standings';
import TeamTransfersPage from '../pages/teams/team/Transfers';
import TeamsIndex from '../pages/teams/Index';

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
