import { useState, useEffect } from 'react';
import LineupLoader from '../../loaders/match-page/LineupLoader';
import { IFormation } from '../../types/Formation.types';

function Substitutes() {
	const [formation, setFormation] = useState<IFormation[]>([] as IFormation[]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/f7cb825e4feb737b6771');
			const data = await response.json();
			setFormation(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return <LineupLoader />;
	}
	return (
		<div className="mt-2 flex h-auto w-full justify-around rounded-md bg-gray-200 p-2 text-xs dark:bg-gray-800 md:mx-auto md:w-4/5 md:text-lg lg:w-full">
			<span className="my-auto flex flex-col">
				<img
					src={formation[0].team.logo}
					width="50px"
					height="50px"
					alt=""
				/>
			</span>
			<div className="flex flex-col">
				{formation[0].substitutes.map((player) => (
					<h3 className="text-left">
						<span className="text-lime-700">{player.player.pos}</span> {player.player.name}
					</h3>
				))}
			</div>
			<div className="flex flex-col">
				{formation[1].substitutes.map((player) => (
					<h3 className="text-right">
						{player.player.name}
						<span className="text-sky-600"> {player.player.pos}</span>
					</h3>
				))}
			</div>
			<span className="my-auto flex flex-col">
				<img
					src={formation[1].team.logo}
					width="50px"
					height="50px"
					alt=""
				/>
			</span>
		</div>
	);
}
export default Substitutes;
