import React, { useState, useEffect } from 'react';

function Statistics() {
	const [statistics, setStatistics] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
			const data = await response.json();
			setStatistics(data);
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
					src="../images/icons8-wait.svg"
					alt=""
				/>
			</div>
		);
	}
	return (
		<div className="flex h-auto w-full flex-col justify-evenly gap-2 rounded-md bg-gray-800 p-8 md:mx-auto md:w-4/5 md:px-16 lg:mb-4 lg:ml-0 lg:w-full">
			{statistics.statistics[0].statistics.map((statistic, index) => {
				let value1 = statistics.statistics[0].statistics[index].value;
				let value2 = statistics.statistics[1].statistics[index].value;

				if (typeof value1 === 'string' && value1.includes('%')) {
					value1 = parseFloat(value1);
				}
				if (typeof value2 === 'string' && value2.includes('%')) {
					value2 = parseFloat(value2);
				}

				const maxValue = value1 + value2;
				const proportion1 = (value1 / maxValue) * 100;
				const proportion2 = (value2 / maxValue) * 100;

				return (
					<div className="flex flex-col gap-1">
						<span className="flex justify-between">
							<span className="shrink-0 grow-0">{statistics.statistics[0].statistics[index].value || 0}</span>
							<div className="block text-center">{statistic.type}</div>
							<span className="shrink-0 grow-0">{statistics.statistics[1].statistics[index].value || 0}</span>
						</span>
						<span className="flex justify-center">
							<span className="flex h-2 w-full justify-end rounded-md bg-slate-300">
								<span
									className="rounded-md bg-lime-700"
									style={{ width: `${proportion1}%` }}
								/>
							</span>
							<span className="ml-1 flex h-2 w-full rounded-md bg-slate-300">
								<span
									className="rounded-md bg-sky-500"
									style={{ width: `${proportion2}%` }}
								/>
							</span>
						</span>
					</div>
				);
			})}
		</div>
	);
}

export default Statistics;
