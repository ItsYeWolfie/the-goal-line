import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/404';
import Root from '../pages/Root';
import ContactPage from '../pages/ContactPage';
import TeamRoutes from './TeamRoutes';
import LeagueRoutes from './LeagueRoutes';
import PlayerRoutes from './PlayerRoutes';
import CoachPage from '../components/coach-page/CoachPage';
import Home from '../components/Home/Home';
import News from '../components/news/News';
import VenuePage from '../components/venue/VenuePage';
import MatchPage from '../pages/matches/match/Match';
import MatchesPage from '../pages/matches/Matches';
import NewsByTitle from '../components/news/NewsByTitle';

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
				],
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
				path: '/coach/:id',
				element: <CoachPage />,
			},
			{
				path: '/venue/:id',
				element: <VenuePage />,
			},
			{
				path: '/matches',
				children: [
					{
						element: <MatchesPage />,
						index: true,
					},
					{
						path: ':id',
						element: <MatchPage />,
					},
				],
			},
		],
	},
]);

export default router;
