import { useEffect, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { filterSelfDuplicates } from '../../../../lib/helpers/ArrayMethods';
import { IFixture } from '../../../../types/Fixture.types';
import { ILeagueWithSeason } from '../../../../types/League.types';
import { ITeamAndVenue } from '../../../../types/Team.types';
import TeamFixturesTable from './FixturesTable';
import TeamFixturesLeagueCard from './LeagueCard';
import TeamFixturesLeagueSelection from './LeagueSelection';

export default function TeamFixtures({ teamFixtures }: { teamFixtures: IFixture[] }) {
	const {
		team: { id },
	} = useOutletContext<ITeamAndVenue>();
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
		<section className="">
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
				teamID={id}
				fixtures={filteredFixtures}
			/>
		</section>
	);
}
