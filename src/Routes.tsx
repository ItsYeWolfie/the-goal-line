import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/404';
import MatchPage from './pages/Match';
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
		element: <MatchesPage />,
	},
	{
		path: '/matches/match',
		element: <MatchPage />,
	},
]);

export default router;
