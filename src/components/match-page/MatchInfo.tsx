import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaRing } from 'react-icons/fa';
import MatchInfoLoader from '../../loaders/match-page/MatchInfoLoader';
import { IFixture } from '../../types/Fixture.types';

function FixtureInfo() {
	const [fixture, setFixture] = useState<IFixture>({} as IFixture);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
			const data = await response.json();
			setFixture(data);
			setLoading(false);
		};
		fetchData();
	}, []);

	if (loading) {
		return <MatchInfoLoader />;
	}

	const day = fixture.fixture.date;
	const date = new Date(day).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});

	return (
		<div className="mt-2 flex h-12 w-full items-center justify-around rounded-md bg-gray-200 align-middle text-gray-900 dark:bg-gray-800 dark:text-gray-200 md:mx-auto md:w-4/5 lg:flex lg:w-full lg:justify-around">
			<p className="flex items-center text-xs md:text-base">
				<FaCalendarAlt className="mr-1 text-[20px]" />
				{date}
			</p>
			<p className="flex items-center text-xs md:text-base">
				<img
					className="pr-1"
					src="/images/icons8-whistle.svg"
					width="25px"
					alt=""
				/>
				{fixture.fixture.referee}
			</p>
			<p className="flex items-center text-xs md:text-base">
				<FaRing className="mr-1 text-[20px]" />
				{fixture.fixture.venue.name}
			</p>
		</div>
	);
}

export default FixtureInfo;
