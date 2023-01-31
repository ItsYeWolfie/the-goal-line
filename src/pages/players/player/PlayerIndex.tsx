import { useState, useEffect, ReactNode, useContext } from 'react';
import MainLoadingSpinner from '../../../components/MainLoadingSpinner';
import { GlobalHeaderContext } from '../../../contexts/GlobalHeader.context';
import fetchData from '../../../lib/helpers/Fetch';
import { IPlayerWithStatistics } from '../../../types/Player.types';

function PlayerDataRow({ title, paragraph, even }: { title: string; paragraph: string | ReactNode; even?: boolean }) {
	return (
		<div className={`flex justify-between${even ? ' bg-gray-200 dark:bg-gray-700' : ''} py-1 px-2`}>
			<p className="capitalize text-gray-600 dark:text-gray-400">{title}</p>
			<p className="text-right">{paragraph}</p>
		</div>
	);
}
PlayerDataRow.defaultProps = {
	even: false,
};

function DataGroup({ object, title }: { object: any; title: string }) {
	return (
		<div>
			<header className="text-sm font-medium uppercase text-gray-700 dark:text-gray-300">{title}</header>
			{Object.entries(object).map(([key, value], index) => (
				<PlayerDataRow
					key={key}
					title={key}
					paragraph={value || '-'}
					even={index % 2 === 0}
				/>
			))}
		</div>
	);
}

export default function PlayerIndex() {
	const [playerData, setPlayerData] = useState<IPlayerWithStatistics>();
	const { setBreadcrumbs } = useContext(GlobalHeaderContext);
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

	if (loading) {
		return <MainLoadingSpinner />;
	}

	return (
		<section className="flex items-start gap-2">
			<div className="flex flex-none basis-2/12 flex-col gap-2 rounded-md">
				<img
					src="https://i.imgur.com/kL7MrRA.png"
					alt="Neymar Kit"
					className="rounded-lg bg-gray-200 p-2 dark:bg-gray-700"
				/>
				<p className="h-80 overflow-auto bg-gray-200 p-2 text-sm dark:bg-gray-700">
					Neymar da Silva Santos Júnior (born 5 February 1992), known as Neymar, is a Brazilian professional footballer
					who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team. A prolific
					goalscorer and renowned playmaker, he is regarded as one of the best players in the world. Neymar has scored
					at least 100 goals for three different clubs, making him one of three players to achieve this. Neymar came
					into prominence at Santos, where he made his professional debut aged 17. He helped the club win two successive
					Campeonato Paulista championships, a Copa do Brasil, and the 2011 Copa Libertadores; the latter being
					Santos&apos; first since 1963. Neymar was twice named the South American Footballer of the Year, in 2011 and
					2012, and soon relocated to Europe to join Barcelona. As part of Barcelona&apos;s attacking trio with Lionel
					Messi and Luis Suárez, dubbed MSN, he won the continental treble of La Liga, the Copa del Rey, and the UEFA
					Champions League. He then attained a domestic double in the 2015–16 season. Motivated to be a talisman at club
					level, Neymar transferred to PSG in 2017 in a move worth €222 million, making him the most expensive player
					ever. In France, he won four league titles, among other honours, and was voted Ligue 1 Player of the Year in
					his debut season. Notably, he helped PSG attain a domestic quadruple in the 2019–20 season, and led the club
					to its first ever Champions League Final.
				</p>
			</div>
			<div className="flex flex-none basis-2/12 flex-col overflow-auto rounded-lg border border-gray-400 dark:border-gray-600">
				<div className="flex justify-evenly px-4">
					<div className="flex w-3/12 shrink-0 grow-0 flex-col justify-evenly">
						<img
							src={playerData?.statistics[playerData.statistics.length - 1].team.logo}
							alt={playerData?.statistics[playerData.statistics.length - 1].team.name}
						/>
						<img
							src={playerData?.statistics[0].team.logo}
							alt={playerData?.statistics[0].team.name}
						/>
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

			<div className="flex basis-6/12 gap-4 text-sm">
				<div className="flex basis-4/12 flex-col gap-2 text-sm">
					<DataGroup
						object={playerData?.statistics[activeStatistic].games}
						title="Games"
					/>
					<DataGroup
						object={playerData?.statistics[activeStatistic].substitutes}
						title="Substitutes"
					/>
					<DataGroup
						object={playerData?.statistics[activeStatistic].duels}
						title="Duels"
					/>
				</div>
				<div className="flex basis-4/12 flex-col gap-2 text-sm">
					<DataGroup
						object={playerData?.statistics[activeStatistic].goals}
						title="Goals"
					/>
					<DataGroup
						object={playerData?.statistics[activeStatistic].shots}
						title="Shots"
					/>
					<DataGroup
						object={playerData?.statistics[activeStatistic].passes}
						title="Passes"
					/>
					<DataGroup
						object={playerData?.statistics[activeStatistic].penalty}
						title="Penalty"
					/>
				</div>
				<div className="flex basis-4/12 flex-col gap-2 text-sm">
					<DataGroup
						object={playerData?.statistics[activeStatistic].fouls}
						title="Fouls"
					/>
					<DataGroup
						object={playerData?.statistics[activeStatistic].cards}
						title="Cards"
					/>
					<DataGroup
						object={playerData?.statistics[activeStatistic].tackles}
						title="Tackles"
					/>
					<DataGroup
						object={playerData?.statistics[activeStatistic].dribbles}
						title="Dribbles"
					/>
				</div>
			</div>
			<div className="flex flex-none basis-2/12 flex-col gap-4">
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
				/>
			</div>
		</section>
	);
}
