import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/404';
import TeamPage from '../pages/team/TeamOverview';
import TeamIndex from '../pages/team/Index';
import teamOverviewLoader, {
	teamFixturesLoader,
	teamLoader,
} from '../../lib/loaders/TeamLoaders';
import TeamFixtures from '../pages/team/TeamFixtures';

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
				],
			},
		],
	},
]);

export default router;
