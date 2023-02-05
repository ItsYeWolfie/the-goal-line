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
		<div className="mt-2 flex h-auto w-full justify-center rounded-md bg-gray-200 p-2 text-sm dark:bg-gray-700 md:mx-auto md:text-lg">
			<table className="w-full text-center">
				<thead>
					<tr className="border-[0.2px] border-gray-700 border-opacity-30 dark:border-gray-300">
						<td className="w-1/6">Team</td>
						<td className="w-1/3">Player</td>
						<td className="w-1/3">Reason</td>
					</tr>
				</thead>
				<tbody>
					{injuries.map((player) => (
						<tr className="border-[0.2px] border-gray-700 border-opacity-30 text-center dark:border-gray-300">
							<td className="mt-0.5 flex items-center justify-center align-middle">
								<img
									className="h-4 w-4 rounded-full object-cover sm:h-6 sm:w-6"
									src={player.team.logo}
									alt={player.team.name}
								/>
							</td>
							<td className="text-xs sm:text-sm">{player.player.name}</td>
							<td className="text-xs sm:text-sm">{player.player.reason}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default Injuries;
