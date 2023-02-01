import { Outlet } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { IPlayerWithStatistics } from '../../../types/Player.types';
import { GlobalHeaderContext } from '../../../contexts/GlobalHeader.context';

export default function PlayerMain({ playerData }: { playerData: IPlayerWithStatistics }) {
	const { setBreadcrumbs } = useContext(GlobalHeaderContext);
	useEffect(() => {
		setBreadcrumbs([
			{
				name: 'Players',
				href: '/players',
			},
			{
				name: (
					<div className="flex items-center gap-2">
						<img
							src={playerData.player.photo}
							alt={playerData.player.name}
							className="h-6 w-6 rounded-full"
						/>
						<span>{playerData.player.name}</span>
					</div>
				),
				href: `/players/${playerData.player.id}`,
			},
		]);
	}, [playerData, setBreadcrumbs]);

	return <Outlet context={{ playerData }} />;
}
