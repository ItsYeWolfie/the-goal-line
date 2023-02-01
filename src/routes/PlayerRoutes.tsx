import { RouteObject } from 'react-router-dom';
import PlayerOverview from '../components/tabs/players/player/overview/Index';
import playerDataLoader from '../lib/loaders/player-loaders';
import PlayerIndex from '../pages/players/player/Index';

export const PlayerRoutes: RouteObject[] = [
	{
		index: true,
		element: <div>Players</div>,
	},
	{
		path: ':playerID',
		element: <PlayerIndex />,
		loader: playerDataLoader,
		children: [
			{
				index: true,
				element: <PlayerOverview />,
			},
		],
	},
];

export default PlayerRoutes;
