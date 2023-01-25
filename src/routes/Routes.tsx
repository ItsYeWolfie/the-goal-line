import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import News from '../components/News/News';
import NewsByTitle from '../components/News/NewsbyTitle';
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
				element: <News />,
			},
			{
				path: '/news/:title',
				element: <NewsByTitle />,
			},
		],
	},
]);

export default router;
