import { Link } from 'react-router-dom';
import { PlayerDataRow } from './overview/DataGroup';
import { IPlayerWithStatistics } from '../../../../types/Player.types';

export default function PlayerCard({ playerData }: { playerData: IPlayerWithStatistics }) {
	return (
		<div className="col-span-full flex flex-none flex-col overflow-auto rounded-lg border border-gray-400 dark:border-gray-600 sm:col-span-6 md:col-span-4">
			<div className="flex justify-evenly px-4">
				<div className="flex w-3/12 shrink-0 grow-0 flex-col justify-evenly">
					<Link to={`/teams/${playerData?.statistics[playerData.statistics.length - 1].team.id}/`}>
						<img
							src={playerData?.statistics[playerData.statistics.length - 1].team.logo}
							alt={playerData?.statistics[playerData.statistics.length - 1].team.name}
						/>
					</Link>
					<Link to={`/teams/${playerData?.statistics[0].team.id}/`}>
						<img
							src={playerData?.statistics[0].team.logo}
							alt={playerData?.statistics[0].team.name}
						/>
					</Link>
				</div>
				<img
					src={playerData?.player.photo}
					alt={playerData?.player.name}
					className="w-7/12 shrink-0 grow-0"
				/>
			</div>
			<h1 className="bg-blue-700 py-2 text-center text-sm font-medium uppercase text-white">
				10. {playerData?.player.name}
			</h1>

			<div className="flex flex-col text-sm">
				<PlayerDataRow
					title="Name"
					paragraph={`${playerData?.player.firstname} ${playerData?.player.lastname}`}
				/>
				<PlayerDataRow
					title="Age"
					paragraph={`${playerData?.player.age} years old (${playerData?.player.birth.date})`}
					even
				/>
				<PlayerDataRow
					title="Nationality"
					paragraph={playerData?.player.nationality}
				/>
				<PlayerDataRow
					title="Height"
					paragraph={playerData?.player.height}
					even
				/>
				<PlayerDataRow
					title="Weight"
					paragraph={playerData?.player.weight}
				/>
			</div>
		</div>
	);
}
