import { useState, useContext, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { ITeamAndVenue } from '../../types/Team.types';
import { GlobalHeaderContext, IGlobalHeader } from '../../contexts/GlobalHeader.context';
import TeamsPageMobileOverlay from '../../components/tabs/teams/MobileOverlay';
import TeamsDisplaySection from '../../components/tabs/teams/TeamDisplaySection';
import LoadingTeamsDisplaySection from '../../components/tabs/teams/loading/LoadingTeamDisplaySection';
import fetchData from '../../lib/helpers/Fetch';
import TeamSearch from '../../components/tabs/teams/TeamSearch';

export default function TeamsIndex() {
	const [teams, setTeams] = useState<ITeamAndVenue[]>([]);
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	const [filteredTeams, setFilteredTeams] = useState<ITeamAndVenue[]>(teams);
	const [searchData, setSearchData] = useState({
		name: '',
		country: 'All',
		season: 'All',
		league: 'All',
	});

	const { setBreadcrumbs } = useContext<IGlobalHeader>(GlobalHeaderContext);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setSearchData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { name, country } = searchData;
		const filtered = teams.filter((team) => {
			const nameMatch = team.team.name.toLowerCase().includes(name.toLowerCase());
			const countryMatch = country === 'All' ? true : team.team.country === country;
			// const seasonMatch = season === 'All' ? true : team.team.season === season;
			// const leagueMatch = league === 'All' ? true : team.league.name === league;
			return nameMatch && countryMatch;
		});

		setFilteredTeams(filtered);
	};

	useEffect(() => {
		setBreadcrumbs([
			{
				name: 'Teams',
				href: '/teams',
			},
		]);
	}, [setBreadcrumbs]);

	useEffect(() => {
		fetchData<ITeamAndVenue[]>('https://api.npoint.io/bd094ce005a62650121b').then((data) => {
			setTeams(data);
			setFilteredTeams(data);
			setLoading(false);
		});
	}, []);

	return (
		<main className="mx-auto max-w-2xl p-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
			<TeamsPageMobileOverlay
				handleSearch={handleSearch}
				handleChange={handleChange}
				mobileFiltersOpen={mobileFiltersOpen}
				setMobileFiltersOpen={setMobileFiltersOpen}
			/>
			<div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
				<aside>
					<h2 className="sr-only">Filters</h2>

					<button
						type="button"
						className="inline-flex items-center lg:hidden"
						onClick={() => setMobileFiltersOpen(true)}
					>
						<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filters</span>
						<PlusIcon
							className="ml-1 h-5 w-5 shrink-0 text-gray-400 dark:text-gray-600"
							aria-hidden="true"
						/>
					</button>

					<div className="sticky hidden lg:block">
						<TeamSearch
							handleChange={handleChange}
							handleSearch={handleSearch}
						/>
					</div>
				</aside>
				<div className="mt-6 grid grid-cols-12 items-start gap-4 text-gray-900 dark:text-gray-100 lg:col-span-2 lg:mt-0 xl:col-span-3">
					{loading ? <LoadingTeamsDisplaySection /> : <TeamsDisplaySection filteredTeams={filteredTeams} />}
				</div>
			</div>
		</main>
	);
}
