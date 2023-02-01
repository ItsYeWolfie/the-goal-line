/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
import React, { useState, useEffect } from 'react';

function Injuries() {
	const [injuries, setInjnuries] = useState([]);
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
		return (
			<div className="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:flex lg:w-full lg:justify-around">
				<img
					className="animate-spin"
					src="src/images/icons8-wait.svg"
					alt=""
				/>
			</div>
		);
	}
	return (
		<div className="flex h-auto w-full justify-center rounded-md bg-gray-800 p-2 text-xs md:mx-auto md:w-4/5 md:text-lg lg:w-full">
			<table className="w-[45rem]">
				<tr className="border-[0.2px] border-gray-300 border-opacity-30">
					<td className="w-1/3">Team</td>
					<td className="w-1/3">Player</td>
					<td className="w-1/3">Reason</td>
				</tr>
				{injuries.map((player) => (
					<tr className="border-[0.2px] border-gray-300 border-opacity-30">
						<td>
							<img
								className="ml-4"
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
			</table>
		</div>
	);
}
export default Injuries;
