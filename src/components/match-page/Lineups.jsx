/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
// @ts-ignore
// @ts-ignore
import React, { useState, useEffect } from 'react';
import LineupLoader from '../../loaders/match-page/LineupLoader';

function LineUps() {
	const [lineups, setLineups] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
			const data = await response.json();
			setLineups(data);
			setLoading(false);
		};
		fetchData();
		// console.log(data);
	}, []);

	if (loading) {
		return <LineupLoader />;
	}
	return (
		<div className="flex h-auto w-full justify-around rounded-md bg-gray-800 p-2 text-xs md:mx-auto md:w-4/5 md:text-lg lg:w-full">
			<span className="my-auto flex flex-col">
				<img
					// @ts-ignore
					src={lineups.teams.home.logo}
					width="50px"
					height="50px"
					alt=""
				/>
			</span>
			<div className="flex flex-col">
				<h3 className="text-left">
					<span className="text-lime-700">Coach</span>{' '}
					{
						// @ts-ignore
						lineups.lineups[0].coach.name
					}
				</h3>
				<span className="w-auto border-[0.2px] border-solid border-gray-200 text-left opacity-30" />
				{lineups.lineups[0].startXI // @ts-ignore // @ts-ignore // @ts-ignore
					.map((player) => (
						<h3 className="text-left">
							<span className="text-lime-700">{player.player.pos}</span> {player.player.name}
						</h3>
					))}
			</div>
			<div className="flex flex-col">
				<h3 className="text-right">
					{
						// @ts-ignore
						lineups.lineups[1].coach.name
					}{' '}
					<span className="text-sky-600">Coach</span>
				</h3>
				<span className=" border-[0.2px] border-solid border-gray-200 text-right opacity-30" />

				{lineups.lineups[1].startXI // @ts-ignore
					.map((player) => (
						<h3 className="text-right">
							{player.player.name}
							<span className="text-sky-600"> {player.player.pos}</span>
						</h3>
					))}
			</div>
			<span className="my-auto flex flex-col">
				<img
					// @ts-ignore
					src={lineups.teams.away.logo}
					width="50px"
					height="50px"
					alt=""
				/>
			</span>
		</div>
	);
}
export default LineUps;
