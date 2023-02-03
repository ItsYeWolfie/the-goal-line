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
