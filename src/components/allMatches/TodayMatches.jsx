import React, { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';

function TodayMatches() {
	const [fixture, setFixture] = useState([]);
	const [loading, setLoading] = useState(true);
	const [groupedMatches, setGroupedMatches] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/e8b6e47d59c88aec9aaa');
			const data = await response.json();
			setFixture(data);
			setLoading(false);

			const groupedMatches = {};
			fixture.forEach((fixture) => {
				const leagueId = fixture.league.id;
				if (!groupedMatches[leagueId]) {
					groupedMatches[leagueId] = [fixture];
				} else {
					groupedMatches[leagueId].push(fixture);
				}
				groupedMatches[leagueId].league = fixture.league;
			});
			setGroupedMatches(groupedMatches);
		};

		fetchData();
	}, []);

	if (loading) {
		return (
			<div className="mt-4 flex h-14 w-full items-center justify-around rounded-md bg-gray-700 align-middle md:mx-auto lg:flex lg:w-full lg:justify-around">
				<img
					className="animate-spin"
					src="src/images/icons8-wait.svg"
					alt=""
				/>
			</div>
		);
	}

	return (
		<div className="scrollbar-hide relative flex h-[95vh] flex-col overflow-hidden overflow-y-auto rounded-md bg-gray-800 px-2 text-sm text-gray-200">
			{Object.keys(groupedMatches).map((leagueId) => {
				return (
					<div key={leagueId}>
						<a href="../fixtures-page/league-matches.html">
							<div className="flex cursor-pointer p-2 hover:text-sky-600">
								<span className="my-auto">
									<img
										className="rounded-sm"
										src={
											groupedMatches[leagueId].league.flag === null
												? '../images/noimg.png'
												: groupedMatches[leagueId].league.flag
										}
										width="30px"
										height="20px"
										alt=""
									/>
								</span>
								<span className="ml-2 flex flex-col">
									<span className="text-sm">{groupedMatches[leagueId].league.name}</span>
									<span className="text-xs text-gray-500">{groupedMatches[leagueId].league.country}</span>
								</span>
								<span className="my-auto ml-auto">
									<FaChevronRight className="mr-1 text-[20px] text-gray-200" />
								</span>
							</div>
						</a>
						{groupedMatches[leagueId].map((fixture) => {
							const day = fixture.fixture.date;
							const date = new Date(day).toLocaleTimeString('en-GB', {
								hour: '2-digit',
								minute: '2-digit',
							});
							return (
								<a
									href="./fixture.html"
									target="_blank"
								>
									<div className="mb-2 flex cursor-pointer items-center rounded-md bg-gray-700 duration-150 ease-in hover:h-16 hover:border-2 hover:border-solid hover:border-gray-700 hover:bg-gray-800">
										<span className="ml-2 flex w-8 justify-center">
											{fixture.fixture.status.elapsed === null
												? `${date}`
												: `${fixture.fixture.status.elapsed}'` && fixture.fixture.status.elapsed === 90
												? fixture.fixture.status.short
												: `${fixture.fixture.status.elapsed}'`}
										</span>
										<div className="flex flex-col p-2">
											<span className="ml-2 mb-1 flex">
												<img
													className="mr-2"
													src={fixture.teams.home.logo}
													width="20px"
													height="20px"
													alt=""
												/>
												<p>{fixture.teams.home.name}</p>
												<p>{fixture.id}</p>
											</span>
											<span className="ml-2 flex">
												<img
													className="mr-2"
													src={fixture.teams.away.logo}
													alt=""
													width="20px"
													height="20px"
												/>
												<p>{fixture.teams.away.name}</p>
											</span>
										</div>
										<div className="my-auto ml-auto mr-4 flex flex-col">
											<span>{fixture.goals.home === null ? '-' : fixture.goals.home}</span>
											<span>{fixture.goals.away === null ? '-' : fixture.goals.away}</span>
										</div>
									</div>
								</a>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}
export default TodayMatches;
