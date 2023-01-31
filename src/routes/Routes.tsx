import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/404';
import Root from '../pages/Root';
import IndexPage from '../pages/Index';
import ContactPage from '../pages/ContactPage';
import TeamRoutes from './TeamRoutes';
import LeagueRoutes from './LeagueRoutes';
import PlayerRoutes from './PlayerRoutes';

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
				children: TeamRoutes,
			},
			{
				path: '/contact-us',
				element: <ContactPage />,
			},
			{
				path: '/leagues',
				children: LeagueRoutes,
			},
			{
				path: '/players',
				children: PlayerRoutes,
			},
		],
	},
]);

export default router;
