/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
import React, { useState, useEffect } from 'react';

function Substitutes() {
	const [substitutes, setSubstitutes] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/f7cb825e4feb737b6771');
			const data = await response.json();
			setSubstitutes(data);
			setLoading(false);
		};
		fetchData();
		// console.log(data);
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
		<div className="flex h-auto w-full justify-around rounded-md bg-gray-800 p-2 text-xs md:mx-auto md:w-4/5 md:text-lg lg:w-full">
			<span className="my-auto flex flex-col">
				<img
					// @ts-ignore
					src={substitutes[0].team.logo}
					width="50px"
					height="50px"
					alt=""
				/>
			</span>
			<div className="flex flex-col">
				{substitutes[0].substitutes.map((player) => (
					<h3 className="text-left">
						<span className="text-lime-700">{player.player.pos}</span> {player.player.name}
					</h3>
				))}
			</div>
			<div className="flex flex-col">
				{substitutes[1].substitutes.map((player) => (
					<h3 className="text-right">
						{player.player.name}
						<span className="text-sky-600"> {player.player.pos}</span>
					</h3>
				))}
			</div>
			<span className="my-auto flex flex-col">
				<img
					// @ts-ignore
					src={substitutes[1].team.logo}
					width="50px"
					height="50px"
					alt=""
				/>
			</span>
		</div>
	);
}
export default Substitutes;
