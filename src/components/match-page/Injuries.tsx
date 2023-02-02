import { useState, useEffect } from 'react';
import InjuriesLoader from '../../loaders/match-page/InjuriesLoader';
import { IPlayerInjury } from '../../types/Player.types';

function Injuries() {
	const [injuries, setInjnuries] = useState<IPlayerInjury[]>([] as IPlayerInjury[]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/e9ac66d8e3236722fa86');
			const data = await response.json();
			setInjnuries(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return <InjuriesLoader />;
	}
	return (
		<div className="flex h-auto w-full justify-center rounded-md bg-gray-800 p-2 text-xs md:mx-auto md:w-4/5 md:text-lg lg:w-full">
			<table className="w-[45rem] text-center">
				<thead>
					<tr className="border-[0.2px] border-gray-300 border-opacity-30">
						<td className="w-1/6">Team</td>
						<td className="w-1/3">Player</td>
						<td className="w-1/3">Reason</td>
					</tr>
				</thead>
				<tbody>
					{injuries.map((player) => (
						<tr className="border-[0.2px] border-gray-300 border-opacity-30 text-center">
							<td className="flex items-center justify-center align-middle">
								<img
									className=""
									src={player.team.logo}
									alt=""
									width="15px"
									height="15px"
								/>
							</td>
							<td className="text-sm md:text-base">{player.player.name}</td>
							<td className="text-sm md:text-base">{player.player.reason}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default Injuries;
