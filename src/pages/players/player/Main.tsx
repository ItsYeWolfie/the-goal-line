import { useEffect, useContext, useMemo } from 'react';
import { IPlayerModified, IPlayerWithStatistics } from '../../../types/Player.types';
import { GlobalHeaderContext } from '../../../contexts/GlobalHeader.context';
import PlayerOverview from '../../../components/tabs/players/player/overview/Index';
import PlayerTransfers from '../../../components/tabs/players/player/Transfers';
import PlayerInjuries from '../../../components/tabs/players/player/Injuries';
import PlayerSidelines from '../../../components/tabs/players/player/Sidelines';
import PlayerTrophies from '../../../components/tabs/players/player/Trophies';

export default function PlayerMain({ playerData }: { playerData: IPlayerModified }) {
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

	const playerDataWithStatistics: IPlayerWithStatistics = useMemo(
		() => ({
			player: playerData.player,
			statistics: playerData.statistics,
		}),
		[playerData],
	);

	return (
		<main className="mx-auto flex flex-col gap-y-16 lg:max-w-4xl">
			<PlayerOverview playerData={playerDataWithStatistics} />
			<div className="mx-auto flex w-full flex-col gap-y-4">
				<PlayerTransfers playerTransfers={playerData.transfers} />
				<PlayerInjuries injuries={playerData.injuries} />
				<PlayerSidelines sidelines={playerData.sidelines} />
				<PlayerTrophies trophies={playerData.trophies} />
			</div>
		</main>
	);
}
