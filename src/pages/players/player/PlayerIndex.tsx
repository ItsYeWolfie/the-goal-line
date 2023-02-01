import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MainLoadingSpinner from '../../../components/MainLoadingSpinner';
import HeaderTabs from '../../../components/tabs/HeaderTabs';
import PlayerCard from '../../../components/tabs/players/PlayerCard';
import { GlobalHeaderContext } from '../../../contexts/GlobalHeader.context';
import fetchData from '../../../lib/helpers/Fetch';
import playerTabs from '../../../lib/tabs/player-tabs';
import { IPlayerWithStatistics } from '../../../types/Player.types';
import { DataGroup } from './DataGroup';
import PlayerOverviewBiography from './overview/Biography';

export default function PlayerIndex() {
	const { playerID } = useParams<{ playerID: string }>();
	const [playerData, setPlayerData] = useState<IPlayerWithStatistics>({} as IPlayerWithStatistics);
	const { setBreadcrumbs, setTabsComponent } = useContext(GlobalHeaderContext);
	const [activeStatistic, setActiveStatistic] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData<IPlayerWithStatistics>('https://api.npoint.io/baf455cddaed9af22ec1').then((data) => {
			setPlayerData(data);
			setLoading(false);

			setBreadcrumbs([
				{
					name: 'Players',
					href: '/players',
				},
				{
					name: (
						<div className="flex items-center gap-2">
							<img
								src={data.player.photo}
								alt={data.player.name}
								className="h-6 w-6 rounded-full"
							/>
							<span>{data.player.name}</span>
						</div>
					),
					href: `/players/${data.player.id}`,
				},
			]);
		});
	}, [setBreadcrumbs]);

	useEffect(() => {
		setTabsComponent(
			<HeaderTabs
				dir="players"
				params={`${playerID}`}
				tabs={playerTabs}
			/>,
		);

		return () => setTabsComponent(null);
	}, [playerID, setTabsComponent]);

	if (loading) {
		return <MainLoadingSpinner />;
	}

	return (
		<section className="grid grid-cols-12 items-start gap-2 xl:items-stretch">
			<PlayerCard playerData={playerData} />
			<PlayerOverviewBiography />
			<div className="col-span-full flex flex-col gap-4 sm:col-span-6 sm:col-start-1 sm:row-span-1 sm:row-start-2 md:col-span-4 md:col-start-9 md:row-start-1 lg:col-span-3 lg:col-start-7 lg:row-start-1 lg:row-end-3 xl:col-span-2 xl:col-start-5 xl:row-span-2 xl:row-start-1">
				<select className="w-full text-xs dark:bg-gray-700">
					{playerData?.statistics.map((statistic, index) => (
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
					src={playerData?.statistics[activeStatistic].league.logo}
					alt={playerData?.statistics[activeStatistic].league.name}
					className="h-72"
				/>
			</div>
			<DataGroup
				object={playerData?.statistics[activeStatistic].games}
				title="Games"
				className="col-span-6 row-span-2 md:col-span-4 md:col-start-1 md:row-start-2 lg:col-span-3 lg:col-start-1 lg:row-start-3 xl:col-span-2"
			/>
			<DataGroup
				object={playerData?.statistics[activeStatistic].substitutes}
				title="Substitutes"
				className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
			/>
			<DataGroup
				object={playerData?.statistics[activeStatistic].duels}
				title="Duels"
				className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
			/>
			<DataGroup
				object={playerData?.statistics[activeStatistic].goals}
				title="Goals"
				className="col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2"
			/>
			<DataGroup
				object={playerData?.statistics[activeStatistic].shots}
				title="Shots"
				className="col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2"
			/>
			<DataGroup
				object={playerData?.statistics[activeStatistic].passes}
				title="Passes"
				className="col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2"
			/>
			<DataGroup
				object={playerData?.statistics[activeStatistic].penalty}
				title="Penalty"
				className="col-span-6 row-span-2 md:col-span-3 md:row-span-2 lg:col-span-2 xl:col-span-2 xl:row-span-1"
			/>
			<DataGroup
				object={playerData?.statistics[activeStatistic].fouls}
				title="Fouls"
				className="col-span-6 md:col-span-3 md:col-start-7 md:row-start-5 lg:col-span-2 xl:col-span-2 xl:row-start-auto"
			/>
			<DataGroup
				object={playerData?.statistics[activeStatistic].cards}
				title="Cards"
				className="col-span-6 md:col-span-3 lg:col-span-2"
			/>
			<DataGroup
				object={playerData?.statistics[activeStatistic].tackles}
				title="Tackles"
				className="col-span-6 md:col-span-3 lg:col-span-2"
			/>
			<DataGroup
				object={playerData?.statistics[activeStatistic].dribbles}
				title="Dribbles"
				className="col-span-6 md:col-span-3 lg:col-span-2"
			/>
		</section>
	);
}
