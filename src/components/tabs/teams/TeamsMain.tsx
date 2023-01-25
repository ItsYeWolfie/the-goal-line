import { PlusIcon } from '@heroicons/react/20/solid';
import { useState, useContext, useEffect } from 'react';
import { GlobalHeaderContext, IGlobalHeader } from '../../../contexts/GlobalHeader.context';
import teamsFilters from '../../../lib/data/teams-filters';
import { ITeamAndVenue } from '../../../types/Team.types';
import TeamsPageMobileOverlay from './MobileOverlay';
import TeamsDisplaySection from './TeamDisplaySection';

export default function TeamsMain({ teams }: { teams: ITeamAndVenue[] }) {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const { setBreadcrumbs } = useContext<IGlobalHeader>(GlobalHeaderContext);
	useEffect(() => {
		setBreadcrumbs([
			{
				name: 'Teams',
				href: '/teams',
			},
		]);
	});
	return (
		<div className="bg-white dark:bg-gray-800">
			<TeamsPageMobileOverlay
				mobileFiltersOpen={mobileFiltersOpen}
				setMobileFiltersOpen={setMobileFiltersOpen}
			/>

			<main className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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
											<legend className="block text-sm font-medium text-gray-900 dark:text-gray-100">
												{section.name}
											</legend>
										</fieldset>
									</div>
								))}
							</form>
						</div>
					</aside>

					<TeamsDisplaySection teams={teams} />
				</div>
			</main>
		</div>
	);
}
