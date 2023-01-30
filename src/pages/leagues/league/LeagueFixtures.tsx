import { Dialog, Transition } from '@headlessui/react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PaginatedPrevAndNext from '../../../components/pagination/PaginatedPrevAndNext';
import fetchData from '../../../lib/helpers/Fetch';
import { IFixture } from '../../../types/Fixture.types';
import { ITeamBasic } from '../../../types/Team.types';

const splitCount = 13;
interface IForm {
	teamId: number;
	date: string;
	referee: string;
	status: 'FT' | 'PST' | 'NS' | 'All';
}

function LeagueFixturesSearch({
	fixtureTeams,
	fixtureDates,
	fixtureReferees,
	handleSearch,
}: {
	fixtureTeams: ITeamBasic[];
	fixtureDates: string[];
	fixtureReferees: string[];
	handleSearch: (data: IForm) => void;
}) {
	const { register, handleSubmit } = useForm<IForm>();
	return (
		<form
			className="space-y-10 divide-y divide-gray-200 px-2 dark:divide-gray-800 lg:px-2"
			onSubmit={handleSubmit(handleSearch)}
		>
			<label
				htmlFor="id"
				className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
			>
				Team
				<select
					defaultValue={-1}
					id="team"
					className="block w-full rounded-md border-gray-300 capitalize shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
					{...register('teamId')}
				>
					<option value={-1}>All</option>
					{fixtureTeams.map((team) => (
						<option
							key={team.id}
							value={Number(team.id)}
						>
							{team.name}
						</option>
					))}
				</select>
			</label>
			<label
				htmlFor="dates"
				className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
			>
				Date
				<select
					defaultValue="All"
					id="dates"
					className="block w-full rounded-md border-gray-300 capitalize shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
					{...register('date')}
				>
					<option value="All">All</option>
					{fixtureDates.map((date) => (
						<option
							key={date}
							value={date}
							className="text-base"
						>
							{date}
						</option>
					))}
				</select>
			</label>
			<label
				htmlFor="referees"
				className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
			>
				Referee
				<select
					defaultValue="All"
					id="referees"
					className="block w-full rounded-md border-gray-300 capitalize shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
					{...register('referee')}
				>
					<option value="All">All</option>
					{fixtureReferees.map((referee) => (
						<option
							key={referee}
							value={referee}
						>
							{referee}
						</option>
					))}
				</select>
			</label>
			<label
				htmlFor="status"
				className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
			>
				Status
				<select
					defaultValue="All"
					id="status"
					className="block w-full rounded-md border-gray-300 capitalize shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
					{...register('status')}
				>
					<option value="All">All</option>
					<option value="FT">Full Time</option>
					<option value="NS">Not Started</option>
					<option value="PST">Postponed</option>
				</select>
			</label>
			<button
				className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				type="submit"
			>
				Search
			</button>
		</form>
	);
}

export default function LeagueFixturesPage() {
	const [fixtures, setFixtures] = useState<IFixture[]>([]);
	const [filteredFixtures, setFilteredFixtures] = useState<IFixture[]>([]);
	const [displayedItems, setDisplayedItems] = useState<IFixture[]>([]);
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const [fixtureTeams, setFixtureTeams] = useState<ITeamBasic[]>([]);
	const [fixtureDates, setFixtureDates] = useState<string[]>([]);
	const [fixtureReferees, setFixtureReferees] = useState<string[]>([]);

	const handleSearch = (data: IForm) => {
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

			// Unique YYYY-MM-DD dates
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
		});
	}, []);
	return (
		<main className="mx-auto max-w-2xl p-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
			<Transition.Root
				show={mobileFiltersOpen}
				as={Fragment}
			>
				<Dialog
					as="div"
					className="relative z-40 lg:hidden"
					onClose={setMobileFiltersOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl dark:bg-gray-900">
								<div className="flex items-center justify-between px-4">
									<h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Filters</h2>

									<button
										type="button"
										className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-500"
										onClick={() => setMobileFiltersOpen(false)}
									>
										<span className="sr-only">Close menu</span>
										<XMarkIcon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</button>
								</div>

								<LeagueFixturesSearch
									handleSearch={handleSearch}
									fixtureDates={fixtureDates}
									fixtureTeams={fixtureTeams}
									fixtureReferees={fixtureReferees}
								/>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
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
				<div className="flex flex-col gap-y-4 px-2 lg:col-span-2 xl:col-span-3">
					{displayedItems.map((fixture: IFixture) => (
						<div
							key={fixture.fixture.id}
							className="grid grid-cols-12 items-center gap-x-4"
						>
							<div className="col-span-1 w-max rounded-sm bg-sky-800 p-1 text-sm">
								{new Date(fixture.fixture.date).toLocaleTimeString('en-GB', {
									hour: '2-digit',
									minute: '2-digit',
								})}
							</div>
							<div className="col-span-5 flex items-center gap-x-2 justify-self-end text-right sm:col-span-4">
								<div className="text-sm">{fixture.teams.home.name}</div>
								<img
									src={fixture.teams.home.logo}
									alt={fixture.teams.home.name}
									className="h-8 w-8"
								/>
							</div>
							<div className="col-span-2 rounded-sm bg-sky-600 p-1 text-center text-sm md:col-span-1">
								{fixture.goals.home} - {fixture.goals.away}
							</div>
							<div className="col-span-4 flex items-center gap-x-2 justify-self-start">
								<img
									src={fixture.teams.away.logo}
									alt={fixture.teams.away.name}
									className="h-8 w-8"
								/>
								<div className="text-sm">{fixture.teams.away.name}</div>
							</div>
							<div className="col-span-1 hidden shrink-0 grow-0 justify-self-end rounded-sm bg-sky-800 p-1 text-sm sm:block">
								{fixture.fixture.status.short}
								{fixture.fixture.status.elapsed && <span className="ml-1">{fixture.fixture.status.elapsed}&apos;</span>}
							</div>
						</div>
					))}
					<PaginatedPrevAndNext
						items={filteredFixtures}
						splitCount={splitCount}
						setDisplayedItems={setDisplayedItems}
						className="flex justify-self-center"
					/>
				</div>
			</div>
		</main>
	);
}
