import { useState, useEffect } from 'react';
import moment from 'moment';
import { FaInfoCircle } from 'react-icons/fa';

import fetchData from '../../../lib/helpers/Fetch';
import { FootballMatch } from '../../../types/Fixture-Main.types';
import FixtureHeader from './Fixture-Header';
import FixtureMainInfo from './Fixture-Main-Info';
import FixtureLoader from '../Index-Loaders/Fixtures-Loader';

const urls = [
	'https://api.npoint.io/cfdd9340ece0aa795c9e',
	'https://api.npoint.io/832db32c2f7ed1d3b542',
	'https://api.npoint.io/1ba04a17c40d1ca4244d',
];

export default function FixturesMain() {
	const [matches, setMatches] = useState<FootballMatch[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [currentUrl, setCurrentUrl] = useState<string>(urls[0]);
	const [activeButton, setActiveButton] = useState<number>(0);
	const [hoveredMatchId, setHoveredMatchId] = useState<number | null>(null);

	const handleButtonClick = (index: number) => {
		setCurrentUrl(urls[index]);
		setActiveButton(index);
	};

	useEffect(() => {
		setLoading(true);
		const fetchAPI = async () => {
			const data = await fetchData<FootballMatch[]>(currentUrl);
			setMatches(data.slice(20, 30));
			setLoading(false);
		};
		fetchAPI();
	}, [currentUrl]);

	return (
		<section className="mx-[1%]  md:mx-[5%]   2xl:container 2xl:mx-auto">
			<div className="w-full rounded-t-[40px]">
				<FixtureHeader
					activeButton={activeButton}
					handleButtonClick={handleButtonClick}
				/>
				<div className="no-scrollbar mx-auto mt-[10px] h-[610px] w-[100%] cursor-pointer ">
					{loading ? (
						<div>
							<FixtureLoader />
						</div>
					) : (
						matches.map((match: FootballMatch, index: number) => (
							<div
								key={match.fixture.id}
								className={`${
									index % 2 === 0 ? 'bg-slate-800' : 'bg-slate-600'
								} mt-[0.5%] grid h-[55px] w-full items-center gap-[1%] rounded-xl md:grid-cols-2`}
							>
								<div className="col-span-1 h-full w-full">
									<div className="relative flex h-full w-full items-center">
										<FixtureMainInfo
											match={match}
											hoverdMatchId={hoveredMatchId}
										/>
										<img
											className="absolute left-[2%] h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[35px] md:w-[35px]"
											src={match.teams.home.logo}
											alt=""
										/>
										<p className="absolute left-[15%] w-[25%] text-[15px] text-gray-200 sm:left-[12%] sm:text-[17px] md:left-[15%] md:text-[17px] lg:left-[15%] xl:left-[10%] xl:text-[17px] 2xl:text-[22px]">
											{match.teams.home.name}
										</p>
										<p className="absolute left-[42.5%] w-[15%] rounded-[20px] bg-slate-500 py-[5px] px-[10px] text-center text-lime-400 sm:text-[18px] 2xl:text-[23px]">
											{match.goals.home}:{match.goals.away}
										</p>
										<p className=" absolute right-[13%] w-[25%] text-[15px] text-gray-200 sm:right-[10%] sm:text-[17px] md:right-[15%] md:text-[17px] lg:right-[10%] xl:right-[10%] xl:text-[17px] 2xl:text-[22px]">
											{match.teams.away.name}
										</p>
										<img
											className="absolute right-[2%] h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[35px] md:w-[35px]"
											src={match.teams.away.logo}
											alt=""
										/>
									</div>
								</div>

								<div className="relative col-span-1 hidden h-full w-full md:grid">
									<div className="flex h-full w-full items-center">
										<p
											className={`${
												match.fixture.status.short === 'FT' ? 'bg-red-200 text-red-500' : 'bg-lime-400 text-slate-800'
											} ml-[10%] flex w-[20%] items-center justify-center rounded-[10px] bg-red-200  px-[10px] py-[5px] text-red-500 2xl:text-[22px]`}
										>
											{match.fixture.status.short}
										</p>
										<p className="ml-[20%] w-[20%] text-yellow-400 2xl:text-[22px]">
											Time: {moment(match.fixture.date).format('HH:MM')}
										</p>
										<p className="absolute right-[5%]">
											<FaInfoCircle
												className="text-[25px] text-yellow-400 2xl:text-[30px]"
												onMouseEnter={() => setHoveredMatchId(match.fixture.id)}
												onMouseLeave={() => setHoveredMatchId(null)}
											/>
										</p>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
}
