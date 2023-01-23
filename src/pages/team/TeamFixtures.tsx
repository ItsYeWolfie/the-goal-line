import { useLoaderData, useParams } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { IFixture } from '../../../types/Fixture.types';
import TeamFixturesTable from '../../components/tabs/team/fixtures/FixturesTable';
import TeamFixturesLeagueSelection from '../../components/tabs/team/fixtures/LeagueSelection';
import TeamFixturesLeagueCard from '../../components/tabs/team/fixtures/LeagueCard';
import { filterSelfDuplicates } from '../../../lib/helpers/ArrayMethods';
import { ILeagueWithSeason } from '../../../types/League.types';

export default function TeamFixtures() {
	const { teamID } = useParams<{ teamID: string }>();
	const teamIDInt = Number(teamID);
	const teamFixtures = useLoaderData() as IFixture[];
	teamFixtures.sort((a, b) => {
		return new Date(b.fixture.date).getTime() - new Date(a.fixture.date).getTime();
	});

	const leagues = useMemo(() => {
		const leaguesArray = [] as ILeagueWithSeason[];
		teamFixtures.map((fixture) => leaguesArray.push(fixture.league));
		return filterSelfDuplicates(leaguesArray, 'id');
	}, [teamFixtures]);

	const [filteredFixtures, setFilteredFixtures] = useState(teamFixtures);
	const [selectedLeague, setSelectedLeague] = useState(-1);

	useEffect(() => {
		if (selectedLeague === -1) return setFilteredFixtures(teamFixtures);
		return setFilteredFixtures(
			teamFixtures.filter((fixture) => {
				return fixture.league.id === selectedLeague;
			}),
		);
	}, [selectedLeague, teamFixtures]);

	return (
		<>
			<div className="flex flex-col justify-between gap-4 md:mb-8 md:flex-row md:items-center">
				<div className="flex items-center gap-4">
					<TeamFixturesLeagueSelection
						leagues={leagues}
						setSelectedLeague={setSelectedLeague}
					/>
				</div>
				{selectedLeague !== -1 && (
					<TeamFixturesLeagueCard
						leagues={leagues}
						selectedLeague={selectedLeague}
					/>
				)}
			</div>
			<TeamFixturesTable
				teamIDInt={teamIDInt}
				fixtures={filteredFixtures}
			/>
		</>
	);
}
