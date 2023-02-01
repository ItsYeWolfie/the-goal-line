import { PlusIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import MainLoadingSpinner from '../../../components/MainLoadingSpinner';
import LeagueFixturesDisplay from '../../../components/tabs/leagues/league/fixtures/Display';
import LeagueFixturesSearch from '../../../components/tabs/leagues/league/fixtures/Search';
import LeagueMobileSearch from '../../../components/tabs/leagues/league/fixtures/MobileSearch';
import fetchData from '../../../lib/helpers/Fetch';
import { IFixture } from '../../../types/Fixture.types';
import { ILeagueFixturesSearchForm } from '../../../types/General.types';
import { ITeamBasic } from '../../../types/Team.types';

const splitCount = 13;

export default function LeagueFixturesPage() {
	const [fixtures, setFixtures] = useState<IFixture[]>([]);
	const [loading, setLoading] = useState(true);
	const [filteredFixtures, setFilteredFixtures] = useState<IFixture[]>([]);
	const [displayedItems, setDisplayedItems] = useState<IFixture[]>([]);
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const [fixtureTeams, setFixtureTeams] = useState<ITeamBasic[]>([]);
	const [fixtureDates, setFixtureDates] = useState<string[]>([]);
	const [fixtureReferees, setFixtureReferees] = useState<string[]>([]);

	const handleSearch = (data: ILeagueFixturesSearchForm) => {
		let { teamId } = data;
		const { date, referee, status } = data;
		teamId = Number(teamId);

		const filtered = fixtures.filter((fixture) => {
			const teamMatch = teamId === -1 ? true : fixture.teams.home.id === teamId || fixture.teams.away.id === teamId;
			const dateMatch =
				date === 'All'
					? true
					: new Date(fixture.fixture.date).toLocaleDateString('en-GB', {
							year: 'numeric',
							month: '2-digit',
							day: '2-digit',
					  }) === date;
			const refereeMatch = referee === 'All' ? true : fixture.fixture.referee === referee;
			const statusMatch = status === 'All' ? true : fixture.fixture.status.short === status;

			return teamMatch && dateMatch && refereeMatch && statusMatch;
		});

		setFilteredFixtures(filtered);
	};

	useEffect(() => {
		fetchData<IFixture[]>('https://api.npoint.io/48683749646f145669a8').then((data: IFixture[]) => {
			setFixtures(data);

			setFilteredFixtures(data);
			setDisplayedItems(data.slice(0, splitCount));

			const teams = data
				.map((fixture) => {
					return fixture.teams.home;
				})
				.filter((team, index, self) => {
					return self.findIndex((t) => t.id === team.id) === index;
				})
				.sort((a, b) => a.name.toLowerCase().charCodeAt(0) - b.name.toLowerCase().charCodeAt(0));
			setFixtureTeams(teams);

			const dates = data
				.map((fixture) => {
					return new Date(fixture.fixture.date).toLocaleDateString('en-GB', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit',
					});
				})
				.sort((a, b) => {
					return new Date(b).getTime() - new Date(a).getTime();
				})
				.filter((date, index, self) => {
					return self.findIndex((d) => d === date) === index;
				});
			setFixtureDates(dates);

			const referees = data
				.map((fixture) => {
					return fixture.fixture.referee;
				})

				.filter((referee, index, self) => {
					return self.findIndex((r) => r === referee) === index;
				})
				.sort();

			setFixtureReferees(referees);

			setLoading(false);
		});
	}, []);

	if (loading) {
		return <MainLoadingSpinner />;
	}

	return (
		<main className="mx-auto max-w-2xl p-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
			<LeagueMobileSearch
				mobileFiltersOpen={mobileFiltersOpen}
				setMobileFiltersOpen={setMobileFiltersOpen}
				fixtureTeams={fixtureTeams}
				fixtureDates={fixtureDates}
				fixtureReferees={fixtureReferees}
				handleSearch={handleSearch}
			/>
			<div className="lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
				<aside>
					<h2 className="sr-only">Filters</h2>

					<button
						type="button"
						className="mb-8 inline-flex items-center lg:hidden"
						onClick={() => setMobileFiltersOpen(true)}
					>
						<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filters</span>
						<PlusIcon className="ml-1 h-5 w-5 shrink-0 text-gray-400 dark:text-gray-600" />
					</button>

					<div className="sticky hidden lg:block">
						<LeagueFixturesSearch
							fixtureTeams={fixtureTeams}
							fixtureDates={fixtureDates}
							fixtureReferees={fixtureReferees}
							handleSearch={handleSearch}
						/>
					</div>
				</aside>
				<LeagueFixturesDisplay
					filteredFixtures={filteredFixtures}
					displayedItems={displayedItems}
					setDisplayedItems={setDisplayedItems}
					splitCount={splitCount}
				/>
			</div>
		</main>
	);
}
