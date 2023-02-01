import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { DataGroup } from '../DataGroup';
import PlayerOverviewBiography from '../../../../../pages/players/player/overview/Biography';
import { IPlayerWithStatistics } from '../../../../../types/Player.types';
import PlayerCard from '../PlayerCard';

export default function PlayerOverview() {
	const [activeStatistic, setActiveStatistic] = useState(0);
	const { playerData } = useOutletContext() as { playerData: IPlayerWithStatistics };
	return (
		<section className="grid grid-cols-12 items-start gap-2 xl:items-stretch">
			<PlayerCard playerData={playerData} />
			<PlayerOverviewBiography />
			<div className="col-span-full flex flex-col gap-4 sm:col-span-6 sm:col-start-1 sm:row-span-1 sm:row-start-2 md:col-span-4 md:col-start-9 md:row-start-1 lg:col-span-3 lg:col-start-7 lg:row-start-1 lg:row-end-3 xl:col-span-2 xl:col-start-5 xl:row-span-2 xl:row-start-1">
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
				<img
					src={playerData.statistics[activeStatistic].league.logo}
					alt={playerData.statistics[activeStatistic].league.name}
					className="h-72"
				/>
			</div>
			<DataGroup
				object={playerData.statistics[activeStatistic].games}
				title="Games"
				className="col-span-6 row-span-2 md:col-span-4 md:col-start-1 md:row-start-2 lg:col-span-3 lg:col-start-1 lg:row-start-3 xl:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].substitutes}
				title="Substitutes"
				className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].duels}
				title="Duels"
				className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].goals}
				title="Goals"
				className="col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].shots}
				title="Shots"
				className="col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].passes}
				title="Passes"
				className="col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].penalty}
				title="Penalty"
				className="col-span-6 row-span-2 md:col-span-3 md:row-span-2 lg:col-span-2 xl:col-span-2 xl:row-span-1"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].fouls}
				title="Fouls"
				className="col-span-6 md:col-span-3 md:col-start-7 md:row-start-5 lg:col-span-2 xl:col-span-2 xl:row-start-auto"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].cards}
				title="Cards"
				className="col-span-6 md:col-span-3 lg:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].tackles}
				title="Tackles"
				className="col-span-6 md:col-span-3 lg:col-span-2"
			/>
			<DataGroup
				object={playerData.statistics[activeStatistic].dribbles}
				title="Dribbles"
				className="col-span-6 md:col-span-3 lg:col-span-2"
			/>
		</section>
	);
}
