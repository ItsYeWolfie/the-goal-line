import { Suspense } from 'react';
import { Await, useLoaderData, useOutletContext } from 'react-router-dom';
import { ILeagueData, ILeagueStanding } from '../../../../../types/League.types';
import LeagueOverviewDailyMatches from './DailyMatxhes';
import LeaguOverviewHeader from './Header';
import LeagueOverviewInjuriesTable from './InjuriesTable';
import LeagueOverviewReputation from './Reputation';
import LeagueOverviewStandings from './Standings';
import LeagueOverviewTopPlayersGrid from './TopPlayersGrid';

export default function LeagueOverview() {
	const { leagueStandings } = useLoaderData() as { leagueStandings: ILeagueStanding[] };
	const { league } = useOutletContext() as { league: ILeagueData };

	return (
		<main className="row-auto grid grid-cols-12 gap-y-8 gap-x-4 md:gap-y-4">
			<section className="col-span-12 flex h-full flex-col gap-8 bg-gray-200 p-4 dark:bg-gray-700 md:col-span-9 xl:col-span-4 xl:row-span-2">
				<LeaguOverviewHeader league={league} />
				<Suspense fallback={<div>Loading...</div>}>
					<Await resolve={leagueStandings}>{(standings) => <LeagueOverviewStandings standings={standings} />}</Await>
				</Suspense>
			</section>
			<LeagueOverviewDailyMatches />
			<LeagueOverviewReputation id={league.league.id} />
			<LeagueOverviewTopPlayersGrid />
			<LeagueOverviewInjuriesTable />
		</main>
	);
}
