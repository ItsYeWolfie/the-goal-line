import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaRing } from 'react-icons/fa';

function FixtureInfo() {
	const [fixtures, setFixtures] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
			const data = await response.json();
			setFixtures(data);
			setLoading(false);
		};
		fetchData();
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

	const day = fixtures.fixture.date;
	const date = new Date(day).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});

	return (
		<div className="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:flex lg:w-full lg:justify-around">
			<p className="flex items-center text-xs md:text-base">
				<FaCalendarAlt className="mr-1 text-[20px] text-gray-200" />
				{date}
			</p>
			<p className="flex items-center text-xs md:text-base">
				<img
					className="pr-1"
					src="src/images/icons8-whistle.svg"
					width="25px"
					alt=""
				/>
				{fixtures.fixture.referee}
			</p>
			<p className="flex items-center text-xs md:text-base">
				<FaRing className="mr-1 text-[20px] text-gray-200" />
				{fixtures.fixture.venue.name}
			</p>
		</div>
	);
}

export default FixtureInfo;
