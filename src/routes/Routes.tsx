import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import NotFound from '../pages/404';

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />,
				index: true,
			},
			{
				path: '/team',
				element: 'Test',
			},
			{
				path: '/news',
				element: 'News',
			},
		],
	},
]);

export default router;
