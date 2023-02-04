import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MatchLoader from '../../loaders/match-page/MatchLoader';
import { IEvent } from '../../types/Event.types';
import { IFixture, IFixtureWithEvents } from '../../types/Fixture.types';

function Match() {
	const [fixture, setFixture] = useState<IFixture>({} as IFixture);
	const [loading, setLoading] = useState(true);
	const [filteredEvents, setFilteredEvents] = useState<IEvent[]>([] as IEvent[]);
	const [filteredEvents1, setFilteredEvents1] = useState<IEvent[]>([] as IEvent[]);

	const filterEvents = (data: IFixtureWithEvents) => {
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

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
			const data = await response.json();
			setFixture(data);
			setLoading(false);
			filterEvents(data);
		};
		fetchData();
	}, []);

	if (loading) {
		return <MatchLoader />;
	}
	return (
		<div className="h-auto w-full justify-between rounded-md bg-gray-200 align-middle text-gray-900 dark:bg-gray-700 dark:text-gray-100 md:mx-auto md:justify-around lg:block">
			<div className="flex justify-around">
				<div className="mt-6 flex flex-col">
					<Link
						to={`/teams/${fixture.teams.home.id}/`}
						rel="noreferrer"
					>
						<span className="mb-2 flex flex-col items-center hover:text-sky-600 md:flex md:flex-row">
							<img
								src={fixture.teams.home.logo}
								width="50px"
								height="50px"
								alt=""
							/>
							<h2 className="my-auto ml-1 flex w-12 items-center justify-center text-center text-sm md:w-auto md:text-xl">
								{fixture.teams.home.name}
							</h2>
						</span>
					</Link>
					{filteredEvents.map((event) => (
						<span
							className="flex text-[0.65rem] text-gray-700 dark:text-gray-300 md:ml-12 md:text-xs"
							key={event.time.elapsed}
						>
							<p>{event.player.name}</p>
							<p className="ml-2">{event.time.elapsed}&apos;</p>
						</span>
					))}
				</div>
				<div className="mt-9 flex flex-col items-center">
					<div className="flex gap-4 md:gap-8">
						<h1 className="text-xl md:text-2xl">{fixture.goals.home}</h1>
						<h3 className="text-base">{fixture.fixture.status.short}</h3>
						<h1 className="text-xl md:text-2xl">{fixture.goals.away}</h1>
					</div>
					<div className="flex gap-1 text-gray-600 dark:text-gray-400 md:gap-3">
						<h1 className="text-sm md:text-lg">{fixture.score.halftime.home}</h1>
						<h3 className="text-xs md:text-sm">HT</h3>
						<h1 className="text-sm md:text-lg">{fixture.score.halftime.away}</h1>
					</div>
					<div className="mt-24 flex justify-center text-sm text-gray-700 dark:text-gray-300 md:mt-11">
						{fixture.league.round}
					</div>
				</div>
				<div className="mt-6 flex flex-col">
					<Link
						to={`/teams/${fixture.teams.away.id}/`}
						rel="noreferrer"
					>
						<span className="mb-2 flex flex-col items-center hover:text-sky-600 md:flex md:flex-row">
							<img
								src={fixture.teams.away.logo}
								width="50px"
								height="50px"
								alt=""
							/>
							<h2 className="my-auto ml-1 break-words text-sm md:text-xl">{fixture.teams.away.name}</h2>
						</span>
					</Link>
					{filteredEvents1.map((event) => (
						<span
							className="flex text-[0.65rem] text-gray-700 dark:text-gray-300 md:ml-12 md:text-xs"
							key={event.time.elapsed}
						>
							<p>{event.player.name}</p>
							<p className="ml-2">{event.time.elapsed}&apos;</p>
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
export default Match;
