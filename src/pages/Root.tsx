import { useMemo, useState } from 'react';
import { Outlet } from 'react-router';
import MainBreadCrumb from '../components/header/MainBreadCrumb';
import GlobalHeader from '../components/header/Global';
import { GlobalHeaderContext } from '../contexts/GlobalHeader.context';
import { IBreadCrumb } from '../types/BreadCrumb.types';

export default function Root() {
	const [breadcrumbs, setBreadcrumbs] = useState<IBreadCrumb[]>([]);

	const [tabsComponent, setTabsComponent] = useState<JSX.Element | null>(null);

	const value = useMemo(() => {
		return {
			breadcrumbs,
			tabsComponent,
			setBreadcrumbs,
			setTabsComponent,
		};
	}, [breadcrumbs, tabsComponent]);

	return (
		<main className="flex">
			<GlobalHeader />
			<div className="flex flex-1 flex-col">
				<GlobalHeaderContext.Provider value={value}>
					<div className="sticky top-0 z-20 flex flex-col bg-sky-900 p-2 dark:bg-gray-900">
						<MainBreadCrumb />
						{tabsComponent && tabsComponent}
					</div>
					<main className="overflow-auto">
						<section className="container mx-auto mb-16 shrink-0 grow-0 p-4 px-2 sm:py-8 md:mb-0">
							<Outlet />
						</section>
					</main>
				</GlobalHeaderContext.Provider>
			</div>
		</main>
	);
}
