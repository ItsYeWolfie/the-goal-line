import { Await, useLoaderData, useOutletContext } from 'react-router-dom';
import { Suspense } from 'react';
import { ITeamAndVenue, ITeamStatistics } from '../../types/Team.types';
import TeamOverviewSequences from '../../components/tabs/team/overview/Sequences';
import TeamOverviewFixtures from '../../components/tabs/team/overview/Fixtures';
import TeamOverviewStatistics from '../../components/tabs/team/overview/Statistics';
import TeamOverviewLineups from '../../components/tabs/team/overview/Lineups';
import TeamOverviewGoals from '../../components/tabs/team/overview/Goals';
import TeamOverviewGoalsAtMinute from '../../components/tabs/team/overview/GoalsAtMinute';
import TeamOverviewGoalsAverage from '../../components/tabs/team/overview/GoalsAverage';
import TeamOverviewPenalties from '../../components/tabs/team/overview/Penalties';
import TeamOverviewCardsAtMinute from '../../components/tabs/team/overview/CardsAtMinute';
import TeamOverviewVenueCard from '../../components/tabs/team/overview/VenueCard';
import TeamOverviewTeamCard from '../../components/tabs/team/overview/TeamCard';
import MainLoadingSpinner from '../../components/MainLoadingSpinner';

export default function TeamOverviewPage() {
	const { team, venue } = useOutletContext<ITeamAndVenue>();

	const { teamStatistics } = useLoaderData() as { teamStatistics: ITeamStatistics };

	return (
		<Suspense fallback={<MainLoadingSpinner />}>
			<Await resolve={teamStatistics}>
				{(teamStatisticsData: ITeamStatistics) => {
					const {
						form,
						league,
						biggest,
						fixtures,
						cards,
						penalty,
						clean_sheet: cleanSheet,
						failed_to_score: failedToScore,
						lineups,
						goals,
					} = teamStatisticsData;
					return (
						<>
							<section className="mb-4">
								<div className="w-full md:flex md:space-x-4">
									<TeamOverviewTeamCard
										team={team}
										form={form}
										league={league}
									/>
									<TeamOverviewVenueCard venue={venue} />
								</div>
							</section>
							<div className="grid grid-cols-12 md:space-x-4">
								<div className="col-span-12 flex flex-col space-y-4 md:col-span-6">
									<TeamOverviewFixtures fixtures={fixtures} />
									<TeamOverviewStatistics
										cleanSheet={cleanSheet}
										failedToScore={failedToScore}
									/>
									<TeamOverviewGoals goals={goals} />
									<TeamOverviewLineups lineups={lineups} />
									<TeamOverviewSequences biggest={biggest} />
								</div>
								<div className="col-span-12 flex flex-col space-y-4 md:col-span-6">
									<TeamOverviewGoalsAtMinute goals={goals} />
									<TeamOverviewGoalsAverage goals={goals} />
									<TeamOverviewPenalties
										scored={penalty.scored}
										missed={penalty.missed}
									/>
									<TeamOverviewCardsAtMinute cards={cards} />
								</div>
							</div>
						</>
					);
				}}
			</Await>
		</Suspense>
	);
}
