import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/404';

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
				path: '/team',
				element: 'Test',
			},
		],
	},
]);

export default router;
