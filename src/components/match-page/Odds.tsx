import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import OddsLoader from '../../loaders/match-page/OddsLoader';
import { IOdd } from '../../types/Odds.types';

function Odds() {
	const [odds, setOdds] = useState<IOdd>({} as IOdd);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/e55bdbd19828e3e8f80f');
			const data = await response.json();
			setOdds(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return <OddsLoader />;
	}

	return (
		<div className="mx-auto flex h-auto w-full justify-around gap-2 rounded-md bg-gray-200 p-4 text-gray-900 dark:bg-gray-700 dark:text-gray-200 lg:h-auto">
			<div className="flex h-8 w-28 items-center justify-around rounded-md border-[1px] border-gray-400">
				<span>1</span>
				<span>
					<FaArrowUp className="mr-1 text-[20px] text-green-700" />
				</span>
				<span>{odds.bookmakers[0].bets[0].values[0].odd}</span>
			</div>
			<div className="flex h-8 w-28 items-center justify-around rounded-md border-[1px] border-gray-400">
				<span>x</span>
				<span>
					<FaArrowDown className="mr-1 text-[20px] text-red-700" />
				</span>
				<span>{odds.bookmakers[0].bets[0].values[1].odd}</span>
			</div>
			<div className="flex h-8 w-28 items-center justify-around rounded-md border-[1px] border-gray-400">
				<span>2</span>
				<span>
					<FaArrowDown className="mr-1 text-[20px] text-red-700" />
				</span>
				<span>{odds.bookmakers[0].bets[0].values[2].odd}</span>
			</div>
		</div>
	);
}

export default Odds;
