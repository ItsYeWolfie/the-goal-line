import React, { useState, useEffect } from 'react';

function H2h() {
	const [h2h, setH2h] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/fc39023d6bc500b8f692');
			const data = await response.json();
			setH2h(data);
			setLoading(false);
		};
		fetchData();
		// console.log(data);
	}, []);

	const firstThree = h2h.slice(0, 3);
	const lastThree = h2h.slice(-3);
	if (loading) {
		return (
			<div className="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:flex lg:w-full lg:justify-around">
				<img
					className="animate-spin"
					src="../images/icons8-wait.svg"
					alt=""
				/>
			</div>
		);
	}

	return (
		<div className="h-auto w-full rounded-md bg-gray-800 p-2 lg:h-auto">
			<table className="w-full text-center">
				<tbody className="table-row-group lg:mx-auto">
					{firstThree.map((h2h) => (
						<tr className="h-8 rounded-md border-b-[0.2px] border-solid border-gray-400 border-opacity-30 text-center">
							<td className="pl-1 text-right text-sm">
								<span className="flex w-full justify-center">
									<img
										src={h2h.teams.home.logo}
										width="15px"
										alt=""
									/>
									<p className="pl-1">{h2h.teams.home.name}</p>
								</span>
							</td>
							<td className="pl-1 text-sm">{h2h.goals.home}</td>
							<td className="pl-1 text-sm">-</td>
							<td className="pl-1 text-sm">{h2h.goals.away}</td>
							<td className="pl-1 text-left text-sm">
								<span className="flex w-full justify-center">
									<img
										src={h2h.teams.away.logo}
										width="15px"
										alt=""
									/>
									<p className="pl-1">{h2h.teams.away.name}</p>
								</span>
							</td>
						</tr>
					))}
					{lastThree.map((h2h) => (
						<tr className="h-8 rounded-md border-b-[0.2px] border-solid border-gray-400 border-opacity-30">
							<td className="pl-1 text-right text-sm">
								<span className="flex w-full justify-center">
									<img
										src={h2h.teams.home.logo}
										width="15px"
										alt=""
									/>
									<p className="pl-1">{h2h.teams.home.name}</p>
								</span>
							</td>
							<td className="pl-1 text-center text-sm">{h2h.goals.home}</td>
							<td className="pl-1 text-center text-sm">-</td>
							<td className="pl-1 text-center text-sm">{h2h.goals.away}</td>
							<td className="pl-1 text-left text-sm">
								<span className="flex w-full justify-center">
									<img
										src={h2h.teams.away.logo}
										width="15px"
										alt=""
									/>
									<p className="pl-1">{h2h.teams.away.name}</p>
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default H2h;
