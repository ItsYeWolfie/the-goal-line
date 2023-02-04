import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function LeagueOverviewDailyMatches() {
	const [currentDate, setCurrentDate] = useState(
		new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
	);

	const handleDateChange = (number: number) => {
		setCurrentDate((prevDate) => {
			const newDate = new Date(prevDate);
			newDate.setDate(newDate.getDate() + number);
			return newDate.toLocaleDateString('en-US', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			});
		});
	};
	return (
		<section className="col-span-12 flex flex-col gap-1 overflow-auto sm:col-span-6 lg:h-96 xl:col-span-4">
			<header className="text-xs font-medium uppercase">Matches/Results &rarr;</header>
			<div className="flex items-center justify-between">
				<h3 className="text-sm font-medium">{currentDate}</h3>
				<div className="flex shrink-0 gap-[1px]">
					<button
						type="button"
						className="flex h-7 w-10 items-center justify-center rounded-l-lg bg-gray-200 text-sm text-gray-900 dark:bg-gray-700 dark:text-white"
						onClick={() => {
							handleDateChange(-1);
						}}
					>
						<BsChevronLeft>
							<span className="sr-only">Previous</span>
						</BsChevronLeft>
					</button>
					<button
						type="button"
						className="flex h-7 w-10 items-center justify-center rounded-r-lg bg-gray-200 text-sm text-gray-900 dark:bg-gray-700 dark:text-white"
						onClick={() => {
							handleDateChange(1);
						}}
					>
						<BsChevronRight>
							<span className="sr-only">Next</span>
						</BsChevronRight>
					</button>
				</div>
			</div>
			<div className="mt-4 flex flex-col gap-4 overflow-auto px-2">
				{[
					{
						fixtureId: 1,
						time: '20:45',
						homeTeam: 'Manchester City',
						awayTeam: 'Manchester United',
						homeTeamLogo: 'https://media.api-sports.io/football/teams/50.png',
						awayTeamLogo: 'https://media.api-sports.io/football/teams/33.png',
					},
					{
						fixtureId: 2,
						time: '22:00',
						homeTeam: 'Liverpool',
						awayTeam: 'Chelsea',
						homeTeamLogo: 'https://media.api-sports.io/football/teams/39.png',
						awayTeamLogo: 'https://media.api-sports.io/football/teams/61.png',
					},
				].map((match) => (
					<div
						key={match.fixtureId}
						className="flex flex-col gap-1 border-b border-gray-500 pb-1"
					>
						<header className="text-xs uppercase text-gray-400">Kick Off {match.time}</header>
						<div className="grid grid-cols-12 items-center justify-between gap-2">
							<div className="col-span-5 flex items-center gap-2">
								<img
									src={match.homeTeamLogo}
									alt={match.homeTeam}
									className="h-4 w-4 rounded-full object-cover"
								/>
								<span>{match.homeTeam}</span>
							</div>
							<p className="col-span-2 text-center text-gray-400">vs</p>
							<div className="col-span-5 flex items-center gap-2 justify-self-end">
								<img
									src={match.awayTeamLogo}
									alt={match.awayTeam}
									className="h-4 w-4 rounded-full object-cover"
								/>
								<span>{match.awayTeam}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
