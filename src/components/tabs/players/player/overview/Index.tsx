import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGroup } from './DataGroup';
import PlayerOverviewBiography from './Biography';
import { IPlayerWithStatistics } from '../../../../../types/Player.types';
import PlayerCard from '../PlayerCard';

export default function PlayerOverview({ playerData }: { playerData: IPlayerWithStatistics }) {
	const [activeStatistic, setActiveStatistic] = useState(0);
	return (
		<section className="grid grid-cols-12 items-start gap-2 xl:items-stretch">
			<PlayerCard playerData={playerData} />
			<PlayerOverviewBiography />
			<div className="col-span-full flex flex-col gap-4 sm:col-span-6 sm:col-start-1 sm:row-span-1 sm:row-start-2 md:col-span-4 md:col-start-9 md:row-start-1">
				<select className="w-full text-xs dark:bg-gray-700">
					{playerData.statistics.map((statistic, index) => (
						<option
							key={statistic.league.id}
							value={index}
							onClick={() => setActiveStatistic(index)}
							className="text-base"
						>
							{statistic.league.name}
						</option>
					))}
				</select>
				<Link to={`/leagues/${playerData.statistics[activeStatistic].league.id}/`}>
					<img
						src={playerData.statistics[activeStatistic].league.logo}
						alt={playerData.statistics[activeStatistic].league.name}
						className="h-72 w-full md:h-[17rem]"
					/>
				</Link>
			</div>
			<DataGroup
				object={playerData.statistics[activeStatistic].games}
				title="Games"
				className="col-span-6 row-span-2 md:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].substitutes}
				title="Substitutes"
				className="col-span-6 md:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].duels}
				title="Duels"
				className="col-span-6 md:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].goals}
				title="Goals"
				className="col-span-6 md:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].shots}
				title="Shots"
				className="col-span-6 md:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].passes}
				title="Passes"
				className="col-span-6 md:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].penalty}
				title="Penalty"
				className="col-span-6 sm:row-span-2 md:col-span-2 md:row-span-1"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].fouls}
				title="Fouls"
				className="col-span-6 md:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].cards}
				title="Cards"
				className="col-span-6 md:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].tackles}
				title="Tackles"
				className="col-span-6 md:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].dribbles}
				title="Dribbles"
				className="col-span-6 md:col-span-2"
			/>
		</section>
	);
}
