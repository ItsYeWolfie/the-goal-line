import React, { useState, useEffect } from 'react';

function Match() {
	const [fixtures, setFixtures] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filteredEvents, setFilteredEvents] = useState([]);
	const [filteredEvents1, setFilteredEvents1] = useState([]);
	const [combinedEvents, setCombinedEvents] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
			const data = await response.json();
			setFixtures(data);
			setLoading(false);
			filterEvents(data);
			filterEvents1(data);
		};
		fetchData();
		// console.log(data);
	}, []);

	const filterEvents = (data) => {
		const { events } = data;
		setFilteredEvents(
			events.filter((event) => {
				return event.team.id === 33 && event.type === 'Goal';
			}),
		);
		setFilteredEvents1(
			events.filter((event) => {
				return event.team.id === 34 && event.type === 'Goal';
			}),
		);
	};
	if (loading) {
		return (
			<div className="h-auto w-full justify-between rounded-md bg-gray-800 p-4 align-middle md:mx-auto md:w-4/5 md:justify-around  lg:w-full">
				<div className="flex animate-pulse space-x-4">
					<div className="h-10 w-10 rounded-full bg-slate-700" />
					<div className="flex-1 space-y-6 py-1">
						<div className="h-2 rounded bg-slate-700" />
						<div className="space-y-3">
							<div className="grid grid-cols-3 gap-4">
								<div className="col-span-2 h-2 rounded bg-slate-700" />
								<div className="col-span-1 h-2 rounded bg-slate-700" />
							</div>
							<div className="h-2 rounded bg-slate-700" />
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<>
			<div className="flex h-12 w-full justify-center lg:hidden">
				<span className="my-auto ml-auto">
					<img
						src="src/images/logo-no-background.svg"
						width="170px"
						alt=""
					/>
				</span>
			</div>
			<div className="h-auto w-full justify-between rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5  md:justify-around lg:block  lg:w-full">
				<div className="flex justify-around">
					<div className="mt-6 flex flex-col">
						<span className="mb-2 flex flex-col items-center md:flex md:flex-row">
							<img
								src={fixtures.teams.home.logo}
								width="50px"
								height="50px"
								alt=""
							/>
							<h2 className="my-auto ml-1 flex w-12 items-center justify-center text-center text-sm md:w-auto md:text-xl">
								{fixtures.teams.home.name}
							</h2>
						</span>
						{filteredEvents.map((event) => (
							<span className="flex text-[0.65rem] text-gray-300 md:ml-12 md:text-xs">
								<p>{event.player.name}</p>
								<p className="ml-2">{event.time.elapsed}'</p>
							</span>
						))}
					</div>
					<div className="mt-9 flex flex-col items-center">
						<div className="flex gap-4 md:gap-8">
							<h1 className="text-xl md:text-2xl">{fixtures.goals.home}</h1>
							<h3 className="text-base">{fixtures.fixture.status.short}</h3>
							<h1 className="text-xl md:text-2xl">{fixtures.goals.away}</h1>
						</div>
						<div className="flex gap-1 text-gray-400 md:gap-3">
							<h1 className="text-sm md:text-lg">{fixtures.score.halftime.home}</h1>
							<h3 className="text-xs md:text-sm">HT</h3>
							<h1 className="text-sm md:text-lg">{fixtures.score.halftime.away}</h1>
						</div>
					</div>
					<div className="mt-6 flex flex-col">
						<span className="mb-2 flex flex-col items-center md:flex md:flex-row">
							<img
								src={fixtures.teams.away.logo}
								width="50px"
								height="50px"
								alt=""
							/>
							<h2 className="my-auto ml-1 break-words text-sm md:text-xl">{fixtures.teams.away.name}</h2>
						</span>
						{filteredEvents1.map((event) => (
							<span className="flex text-[0.65rem] text-gray-300 md:ml-12 md:text-xs">
								<p>{event.player.name}</p>
								<p className="ml-2">{event.time.elapsed}'</p>
							</span>
						))}
					</div>
				</div>
				<div className="flex justify-center text-sm text-gray-300 md:-mt-2">{fixtures.league.round}</div>
			</div>
		</>
	);
}
export default Match;
