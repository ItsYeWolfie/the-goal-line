/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-shadow */
// @ts-ignore
import React, { useState, useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MatchesLoader from '../../loaders/allMatches-page/MatchesLoader';

function AfterTomorrowMatches() {
	const [fixture, setFixture] = useState([]);
	const [loading, setLoading] = useState(true);
	const [groupedMatches, setGroupedMatches] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/21137151d671e81998f1');
			const data = await response.json();
			setFixture(data);
			setLoading(false);

			const groupedMatches = {};
			fixture.forEach((fixture) => {
				// @ts-ignore
				const leagueId = fixture.league.id;
				// @ts-ignore
				if (!groupedMatches[leagueId]) {
					// @ts-ignore
					groupedMatches[leagueId] = [fixture];
				} else {
					// @ts-ignore
					groupedMatches[leagueId].push(fixture);
				}
				// @ts-ignore
				groupedMatches[leagueId].league = fixture.league;
			});
			setGroupedMatches(groupedMatches);
		};
		fetchData();
	}, [loading]);

	if (loading) {
		return <MatchesLoader />;
	}

	return (
		<div className="mt-14">
			{Object.keys(groupedMatches).map((leagueId) => {
				return (
					<div key={leagueId}>
						<Link
							to={`/leagues/${groupedMatches[leagueId].league.id}/`}
							rel="noreferrer"
						>
							<div className="flex cursor-pointer p-2 hover:text-sky-600">
								<span className="my-auto">
									<img
										className="rounded-sm"
										src={
											// @ts-ignore
											groupedMatches[leagueId].league.flag === null
												? '/images/noimg.png'
												: // @ts-ignore
												  groupedMatches[leagueId].league.flag
										}
										width="30px"
										height="20px"
										alt=""
									/>
								</span>
								<span className="ml-2 flex flex-col">
									<span className="text-sm">
										{
											// @ts-ignore
											groupedMatches[leagueId].league.name
										}
									</span>
									<span className="text-xs text-gray-500">
										{
											// @ts-ignore
											groupedMatches[leagueId].league.country
										}
									</span>
								</span>
								<span className="my-auto ml-auto">
									<FaChevronRight className="mr-1 text-base" />
								</span>
							</div>
						</Link>
						{
							// @ts-ignore
							groupedMatches[leagueId].map((fixture) => {
								const day = fixture.fixture.date;
								const date = new Date(day).toLocaleTimeString('en-GB', {
									hour: '2-digit',
									minute: '2-digit',
								});
								return (
									<Link
										to={`/matches/${fixture.fixture.id}/`}
										target="_blank"
										rel="noreferrer"
									>
										<div className="mb-2 flex cursor-pointer items-center rounded-md border-gray-400 bg-gray-300 duration-150 ease-in hover:h-16 hover:border-2 hover:border-solid hover:bg-gray-200 dark:bg-gray-700 dark:hover:border-gray-700 dark:hover:bg-gray-800">
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
									</Link>
								);
							})
						}
					</div>
				);
			})}
		</div>
	);
}
export default AfterTomorrowMatches;
