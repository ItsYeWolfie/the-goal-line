import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import OddsLoader from '../../loaders/match-page/OddsLoader';

function Odds() {
	const [odds, setOdds] = useState([]);
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
		<div className="mx-auto flex h-auto w-full justify-around rounded-md bg-gray-800 p-4 md:w-4/5 lg:h-auto lg:w-full">
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
