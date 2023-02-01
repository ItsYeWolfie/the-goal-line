import { createBrowserRouter } from 'react-router-dom';
import LiveMatches from './components/allMatches/LiveMatches';
import TodayMatches from './components/allMatches/TodayMatches';
import NotFound from './pages/404';
import MatchPage from './pages/match';
import MatchesPage from './pages/matches';

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
		],
	},
	{
		path: '/matches',
		errorElement: <NotFound />,
		element: <MatchesPage />,
		children: [
			{
				path: '/matches',
				index: true,
				element: <MatchesPage />,
			},
		],
	},
	{
		path: '/matches/match',
		errorElement: <NotFound />,
		element: <MatchPage />,
		children: [
			{
				path: '/matches/match',
				index: true,
				element: <MatchPage />,
			},
		],
	},
]);

export default router;
