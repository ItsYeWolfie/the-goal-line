import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LineupLoader from '../../loaders/match-page/LineupLoader';
import { ILineup } from '../../types/Formation.types';

function LineUps() {
	const [lineup, setLineup] = useState<ILineup>({} as ILineup);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
			const data = await response.json();
			setLineup(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return <LineupLoader />;
	}
	return (
		<div className="mt-2 flex h-auto w-full justify-around rounded-md bg-gray-200 p-2 text-xs dark:bg-gray-700 md:mx-auto md:text-lg">
			<span className="my-auto flex flex-col">
				<img
					src={lineup.teams.home.logo}
					width="50px"
					height="50px"
					alt=""
				/>
			</span>
			<div className="flex flex-col">
				<Link
					to="/coach/Solskjær"
					rel="noreferrer"
				>
					<h3 className="text-left hover:text-sky-600">
						<span className="text-lime-700">Coach</span> {lineup.lineups[0].coach.name}
					</h3>
				</Link>
				<span className="w-auto border-[0.2px] border-solid border-gray-200 text-left opacity-30" />
				{lineup.lineups[0].startXI.map((player) => (
					<Link
						to={`/players/${player.player.id}/`}
						rel="noreferrer"
					>
						<h3
							className="text-left hover:text-sky-600"
							key={player.player.id}
						>
							<span className="text-lime-700">{player.player.pos}</span> {player.player.name}
						</h3>
					</Link>
				))}
			</div>
			<div className="flex flex-col">
				<Link
					to="/coach/Solskjær"
					rel="noreferrer"
				>
					<h3 className="text-right hover:text-sky-600">
						{lineup.lineups[1].coach.name} <span className="text-sky-600">Coach</span>
					</h3>
				</Link>
				<span className=" border-[0.2px] border-solid border-gray-200 text-right opacity-30" />

				{lineup.lineups[1].startXI.map((player) => (
					<Link
						to={`/players/${player.player.id}/`}
						rel="noreferrer"
					>
						<h3
							className="text-right hover:text-sky-600"
							key={player.player.id}
						>
							{player.player.name}
							<span className="text-sky-600"> {player.player.pos}</span>
						</h3>
					</Link>
				))}
			</div>
			<span className="my-auto flex flex-col">
				<img
					src={lineup.teams.away.logo}
					width="50px"
					height="50px"
					alt=""
				/>
			</span>
		</div>
	);
}
export default LineUps;
