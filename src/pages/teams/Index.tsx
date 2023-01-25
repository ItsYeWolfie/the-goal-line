import { Suspense, useState, useContext, useEffect } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/20/solid';
import { ITeamAndVenue } from '../../types/Team.types';
import { GlobalHeaderContext, IGlobalHeader } from '../../contexts/GlobalHeader.context';
import TeamsPageMobileOverlay from '../../components/tabs/teams/MobileOverlay';
import TeamsDisplaySection from '../../components/tabs/teams/TeamDisplaySection';
import teamsFilters from '../../lib/data/teams-filters';
import LoadingTeamsDisplaySection from '../../components/tabs/teams/loading/LoadingTeamDisplaySection';

export default function TeamsIndexPage() {
	const { teams } = useLoaderData() as { teams: ITeamAndVenue[] };
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const { setBreadcrumbs } = useContext<IGlobalHeader>(GlobalHeaderContext);
	useEffect(() => {
		setBreadcrumbs([
			{
				name: 'Teams',
				href: '/teams',
			},
		]);
	}, [setBreadcrumbs]);

	return (
		<main className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<TeamsPageMobileOverlay
				mobileFiltersOpen={mobileFiltersOpen}
				setMobileFiltersOpen={setMobileFiltersOpen}
			/>
			<div className="border-b border-gray-200 pb-10 dark:border-gray-800">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
					Latest High-Performing Teams
				</h1>
				<p className="mt-4 text-base text-gray-500 dark:text-gray-500">
					Checkout and browse the latest teams which had a very performing run!
				</p>
			</div>

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
						<form className="space-y-10 divide-y divide-gray-200 dark:divide-gray-800">
							{teamsFilters.map((section, sectionIdx) => (
								<div
									key={section.name}
									className={sectionIdx === 0 ? '' : 'pt-10'}
								>
									<fieldset>
										<label
											htmlFor={section.id}
											className="block text-sm font-medium text-gray-700 dark:text-gray-300"
										>
											{section.name}
											<input
												type="text"
												id={section.id}
												name={section.name}
												className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
											/>
										</label>
									</fieldset>
								</div>
							))}
							<button
								className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								type="button"
							>
								Filter
							</button>
						</form>
					</div>
				</aside>
				<div className="mt-6 grid grid-cols-12 gap-4 text-gray-900 dark:text-gray-100 lg:col-span-2 lg:mt-0 xl:col-span-3">
					<Suspense fallback={<LoadingTeamsDisplaySection />}>
						<Await resolve={teams}>{(_teams) => <TeamsDisplaySection teams={_teams} />}</Await>
					</Suspense>
				</div>
			</div>
		</main>
	);
}
