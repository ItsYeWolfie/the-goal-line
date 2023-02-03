import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/404';
import Root from '../pages/Root';
import IndexPage from '../pages/Index';
import ContactPage from '../pages/ContactPage';
import TeamRoutes from './TeamRoutes';
import LeagueRoutes from './LeagueRoutes';
import PlayerRoutes from './PlayerRoutes';
import CoachPage from '../components/CoachPage/CoachPage';
import Home from '../components/Home/Home';
import News from '../components/News/News';
import NewsByTitle from '../components/News/NewsbyTitle';
import VenuePage from '../components/VenuePage/VenuePage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />,
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
				path: '/news',
				children: [
					{
						element: <News />,
						index: true,
					},
					{
						path: ':title',
						element: <NewsByTitle />,
					},
				]
			},
			{
				// path: '/leagues',
				children: LeagueRoutes,
			},
			{
				// path: '/players',
				children: PlayerRoutes,
			},
			{
				path: '/coach/:name',
				element: <CoachPage />,
			},
			{
				path: '/venue/:name',
				element: <VenuePage />,
			},
		],
	},
]);

export default router;
