import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaRing } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
		<div className="mt-2 flex h-auto flex-col items-center justify-center gap-4 rounded-md bg-gray-200 p-2 align-middle text-gray-900 dark:bg-gray-700 dark:text-gray-200 sm:flex-row sm:gap-16 md:mx-auto md:flex lg:justify-around lg:gap-4">
			<div className="flex items-center justify-center gap-4 sm:gap-16 lg:gap-32">
				<p className="flex items-center text-center text-sm md:text-base">
					<FaCalendarAlt className="mr-1 text-[20px]" />
					{date}
				</p>
				<p className="flex items-center text-center text-sm md:text-base">
					<img
						className="hidden pr-1 dark:flex"
						src="/images/icons8-whistle.svg"
						width="25px"
						alt=""
					/>
					<img
						className="flex pr-1 dark:hidden"
						src="/images/blackwhistle.svg"
						width="25px"
						alt=""
					/>
					{fixture.fixture.referee}
				</p>
			</div>
			<div className="flex">
				<Link
					to={`/venue/${fixture.fixture.venue.id}/`}
					rel="noreferrer"
				>
					<p className="flex items-center text-center text-sm hover:text-sky-600 md:text-base">
						<FaRing className="mr-1 text-[20px]" />
						{fixture.fixture.venue.name}
					</p>
				</Link>
			</div>
		</div>
	);
}

export default FixtureInfo;
