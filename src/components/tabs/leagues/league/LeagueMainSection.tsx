import { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useOutletContext } from 'react-router-dom';
import fetchData from '../../../../lib/helpers/Fetch';
import GetRankColor from '../../../../lib/helpers/rank-color';
import RankToString from '../../../../lib/helpers/rank-string';
import { ILeagueData, ILeagueStanding } from '../../../../types/League.types';
import TableHead from '../../../table/TableHead';
import TableHeader from '../../../table/TableHeader';
import TinyTableCell from '../../../table/TinyTableCell';
import LeagueInjuriesTable from './LeagueInjuriesTable';
import LeagueTopStatistics from './LeagueTopStatistics';

export default function LeagueMainSection() {
	const [standings, setStandings] = useState<ILeagueStanding[]>([]);
	const { league } = useOutletContext() as { league: ILeagueData };
	const [currentDate, setCurrentDate] = useState(
		new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
	);

	useEffect(() => {
		fetchData<ILeagueStanding[]>(`https://api.npoint.io/c48f56e5c56c613c22ab`).then((data) => {
			setStandings(data);
		});
	}, []);

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
		<main className="row-auto grid grid-cols-12 gap-2">
			<section className="col-span-4 row-span-2 flex flex-col gap-8 bg-gray-700 p-4">
				<header className="flex flex-col gap-4">
					<div className="flex items-center">
						<img
							src={league.country.flag}
							alt={league.country.name}
							className="mr-2 h-6 w-6 rounded-full object-cover"
						/>
						<h3 className="text-sm uppercase">{league.country.name}</h3>
					</div>
					<div className="flex gap-1">
						<img
							src={league.league.logo}
							alt={league.league.name}
							className="mr-2 h-12 w-12 rounded-md bg-white object-cover"
						/>

						<div className="flex flex-col items-start justify-evenly">
							<h3>{league.league.name}</h3>
							<select className="border-none bg-transparent text-xs">
								{league.seasons
									.sort((a, b) => b.year - a.year)
									.map((season) => (
										<option
											key={season.year}
											value={season.year}
											className="bg-gray-700 text-sm text-white"
										>
											{season.year} / {season.year + 1}
										</option>
									))}
							</select>
						</div>
					</div>
				</header>
				<table className="w-full">
					<TableHead className="text-xs">
						<tr>
							<TableHeader className="pl-3 text-left">Pos</TableHeader>
							<TableHeader className="pl-3 text-left">Team</TableHeader>
							<TableHeader className="pl-3">P</TableHeader>
							<TableHeader className="pl-3">W</TableHeader>
							<TableHeader className="pl-3">D</TableHeader>
							<TableHeader className="pl-3">L</TableHeader>
							<TableHeader className="pl-3">GD</TableHeader>
							<TableHeader className="pl-3">PTS</TableHeader>
						</tr>
					</TableHead>
					<tbody className="text-sm text-gray-300">
						{standings.map((standing, index) => {
							const backgroundColor = GetRankColor(standing.rank, index);
							const rankString = RankToString(standing.rank);
							return (
								<tr
									key={standing.team.id}
									className={`transition-colors duration-300 dark:bg-opacity-40  dark:hover:bg-gray-600 ${backgroundColor}`}
								>
									<TinyTableCell>{rankString}</TinyTableCell>
									<TinyTableCell>
										<div className="flex items-center gap-2">
											<img
												src={standing.team.logo}
												alt={standing.team.name}
												className="h-4 w-4 rounded-full object-cover"
											/>
											<span>{standing.team.name}</span>
										</div>
									</TinyTableCell>
									<TinyTableCell className="text-center">{standing.all.played}</TinyTableCell>
									<TinyTableCell className="text-center">{standing.all.win}</TinyTableCell>
									<TinyTableCell className="text-center">{standing.all.draw}</TinyTableCell>
									<TinyTableCell className="text-center">{standing.all.lose}</TinyTableCell>
									<TinyTableCell className="text-center">{standing.goalsDiff}</TinyTableCell>
									<TinyTableCell
										className="text-center"
										last
									>
										{standing.points}
									</TinyTableCell>
								</tr>
							);
						})}
					</tbody>
				</table>
			</section>
			<section className="col-span-8 grid h-80 grid-cols-12 divide-x divide-gray-500 border-b border-gray-500">
				<div className="col-span-6 flex flex-col gap-1 overflow-auto px-4 py-2">
					<header className="text-xs font-medium uppercase">Matches/Results &rarr;</header>
					<div className="flex items-center justify-between">
						<h3 className="text-sm font-medium">{currentDate}</h3>
						<div className="flex shrink-0 gap-[1px]">
							<button
								type="button"
								className="flex h-7 w-10 items-center justify-center rounded-l-lg bg-gray-700 text-sm text-white"
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
								className="flex h-7 w-10 items-center justify-center rounded-r-lg bg-gray-700 text-sm text-white"
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
				</div>
				<div className="col-span-4 flex flex-col gap-1 overflow-auto px-4 py-2">
					<header className="text-xs font-medium uppercase">Competition Reputation</header>
					<div className="overflow-auto">
						{[
							{
								id: 39,
								league: 'Premier League',
								flag: 'https://media.api-sports.io/flags/gb.svg',
								name: 'England',
							},
							{
								id: 140,
								league: 'La Liga',
								flag: 'https://media.api-sports.io/flags/es.svg',
								name: 'Spain',
							},
							{
								id: 135,
								league: 'Serie A',
								flag: 'https://media.api-sports.io/flags/it.svg',
								name: 'Italy',
							},
							{
								id: 78,
								league: 'Bundesliga',
								flag: 'https://media.api-sports.io/flags/de.svg',
								name: 'Germany',
							},
							{
								id: 61,
								league: 'Ligue 1',
								flag: 'https://media.api-sports.io/flags/fr.svg',
								name: 'France',
							},
							{
								id: 2,
								league: 'Liga Portugal',
								flag: 'https://media.api-sports.io/flags/pt.svg',
								name: 'Portugal',
							},
							{
								id: 132,
								league: 'Eredevise',
								flag: 'https://media.api-sports.io/flags/nl.svg',
								name: 'Netherlands',
							},
							{
								id: 141,
								league: 'Austrian Football Bundesliga',
								flag: 'https://media.api-sports.io/flags/at.svg',
								name: 'Austria',
							},
						].map((_league, index) => (
							<div
								key={_league.id}
								className={`${
									_league.id === league.league.id && 'bg-green-600'
								} flex items-center gap-4 overflow-auto rounded-md px-2`}
							>
								<div className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium text-white">
									{index + 1}
								</div>
								<div>
									<span className="text-sm">{_league.league}</span>
									<div className="flex items-center gap-2">
										<img
											src={_league.flag}
											alt={_league.name}
											className="h-4 w-4"
										/>
										<span className="text-xs text-gray-400">{_league.name}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="col-span-8 col-start-5 grid h-96 grid-cols-12">
				<header className="col-span-12 text-xs font-medium uppercase">Player Stats &rarr;</header>
				<div className="col-span-8 grid grid-cols-12 gap-8 px-1 py-2">
					<div className="col-span-6 flex flex-col gap-1">
						<header className="text-xs font-medium uppercase">Goals &rarr;</header>
						<LeagueTopStatistics
							url="https://api.npoint.io/85ea319f8ea05af3e11d"
							type="goals"
						/>
					</div>
					<div className="col-span-6 flex flex-col gap-1">
						<header className="text-xs font-medium uppercase">Assists &rarr;</header>
						<LeagueTopStatistics
							url="https://api.npoint.io/f071335311dda656b656"
							type="assists"
						/>
					</div>
					<div className="col-span-6 flex flex-col gap-1">
						<header className="text-xs font-medium uppercase">Yellow Cards &rarr;</header>
						<LeagueTopStatistics
							url="https://api.npoint.io/4b3f817285714aaf9f87"
							type="yellowCards"
						/>
					</div>
					<div className="col-span-6 flex flex-col gap-1">
						<header className="text-xs font-medium uppercase">Red Cards &rarr;</header>
						<LeagueTopStatistics
							url="https://api.npoint.io/e703a80403f01ca5408b"
							type="redCards"
						/>
					</div>
				</div>

				<div className="col-span-4 flex flex-col gap-1 overflow-auto px-4 py-2">
					<header className="text-xs font-medium uppercase">Injury League Table &rarr;</header>
					<LeagueInjuriesTable />
				</div>
			</section>
		</main>
	);
}
