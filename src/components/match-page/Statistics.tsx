import React, { useState, useEffect } from 'react';
import StatisticsLoader from '../../loaders/match-page/StatisticsLoader';
import { ILineup } from '../../types/Formation.types';

function Statistics() {
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
		return <StatisticsLoader />;
	}
	return (
		<div className="flex h-auto w-full flex-col justify-evenly gap-2 rounded-md bg-gray-200 p-8 dark:bg-gray-700 md:mx-auto md:px-16 lg:mb-4 lg:ml-0">
			{lineup.statistics[0].statistics.map((statistic, index) => {
				const value1 = parseFloat(lineup.statistics[0].statistics[index].value);
				const value2 = parseFloat(lineup.statistics[1].statistics[index].value);

				const maxValue = value1 + value2;
				const proportion1 = (value1 / maxValue) * 100;
				const proportion2 = (value2 / maxValue) * 100;

				return (
					<div
						className="flex flex-col gap-1"
						key={index}
					>
						<span className="flex justify-between">
							<span className="shrink-0 grow-0">{lineup.statistics[0].statistics[index].value || 0}</span>
							<div className="block text-center">{statistic.type}</div>
							<span className="shrink-0 grow-0">{lineup.statistics[1].statistics[index].value || 0}</span>
						</span>
						<span className="flex justify-center">
							<span className="flex h-2 w-full justify-end rounded-md bg-slate-400 dark:bg-slate-300">
								<span
									className="rounded-md bg-lime-700"
									style={{ width: `${proportion1}%` }}
								/>
							</span>
							<span className="ml-1 flex h-2 w-full rounded-md bg-slate-400 dark:bg-slate-300">
								<span
									className="rounded-md bg-sky-600"
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
