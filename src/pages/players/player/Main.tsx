import { useEffect, useContext, useMemo } from 'react';
import { IPlayerModified, IPlayerWithStatistics } from '../../../types/Player.types';
import { GlobalHeaderContext } from '../../../contexts/GlobalHeader.context';
import PlayerOverview from '../../../components/tabs/players/player/overview/Index';
import PlayerTransfersPage from './transfer/Index';
import TableHead from '../../../components/table/Head';
import TableHeader from '../../../components/table/Header';
import TableRow from '../../../components/table/Row';
import SmallTableCell from '../../../components/table/SmallCell';
import LogoAndImage from '../../../components/image/LogoAndImage';

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
		<main className="flex flex-col gap-y-16">
			<PlayerOverview playerData={playerDataWithStatistics} />
			<div className="mx-auto flex w-full flex-col gap-y-4">
				<PlayerTransfersPage playerTransfers={playerData.transfers} />
				<div className="rounded-lg bg-gray-300 p-2 dark:bg-gray-700">
					<header className="py-3 text-xl font-medium">Injury History</header>
					<table className="w-full">
						<TableHead className="text-left text-xs">
							<tr>
								<TableHeader className="pl-3">Date</TableHeader>
								<TableHeader className="hidden pl-3 sm:table-cell">Type</TableHeader>
								<TableHeader className="pl-3">Reason</TableHeader>
								<TableHeader className="hidden px-3 sm:table-cell">Playing Team</TableHeader>
							</tr>
						</TableHead>
						<tbody className="text-sm">
							{playerData.injuries.map((injury, index) => (
								<TableRow
									key={new Date(injury.fixture.date).getTime()}
									even={index % 2 === 0}
								>
									<SmallTableCell className="pl-3">
										{new Date(injury.fixture.date).toLocaleDateString()}
										<div className="ml-2 sm:hidden">
											<LogoAndImage
												src={injury.team.logo}
												alt={injury.team.name}
												name={injury.team.name}
											/>
										</div>
									</SmallTableCell>

									<SmallTableCell className="hidden pl-3 sm:table-cell">{injury.player.type}</SmallTableCell>
									<SmallTableCell className="pl-3">
										{injury.player.reason}
										<span className="ml-2 block text-gray-500 sm:hidden">{injury.player.type}</span>
									</SmallTableCell>
									<SmallTableCell className="hidden px-3 sm:table-cell">
										<LogoAndImage
											src={injury.team.logo}
											alt={injury.team.name}
											name={injury.team.name}
										/>
									</SmallTableCell>
								</TableRow>
							))}
						</tbody>
					</table>
				</div>
				<div className="rounded-lg bg-gray-300 p-2 dark:bg-gray-700">
					<header className="py-3 text-xl font-medium">Career Trophies</header>
					<table className="w-full">
						<TableHead className="text-left text-xs">
							<tr>
								<TableHeader className="pl-3">Season</TableHeader>
								<TableHeader className="hidden pl-3 sm:table-cell">Country</TableHeader>
								<TableHeader className="pl-3">League</TableHeader>
								<TableHeader className="px-3">Place</TableHeader>
							</tr>
						</TableHead>
						<tbody className="text-sm">
							{playerData.trophies.map((trophy, index) => (
								<TableRow
									key={new Date(trophy.season + trophy.place).getTime()}
									even={index % 2 === 0}
								>
									<SmallTableCell>{trophy.season}</SmallTableCell>
									<SmallTableCell className="hidden sm:table-cell">{trophy.country}</SmallTableCell>
									<SmallTableCell>
										{trophy.league}
										<span className="ml-2 block text-gray-500 sm:hidden">{trophy.country}</span>
									</SmallTableCell>
									<SmallTableCell>{trophy.place}</SmallTableCell>
								</TableRow>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
}
