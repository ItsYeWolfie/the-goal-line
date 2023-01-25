import { useMemo, useState } from 'react';
import { Outlet } from 'react-router';
import MainBreadCrumb from '../components/header/MainBreadCrumb';
import GlobalHeader from '../components/header/GlobalHeader';
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
			<div className="flex-1">
				<GlobalHeaderContext.Provider value={value}>
					<div className="sticky top-0 z-20 flex flex-col bg-sky-900 p-2 dark:bg-gray-900">
						<MainBreadCrumb />
						{tabsComponent && tabsComponent}
					</div>
					<Outlet />
				</GlobalHeaderContext.Provider>
			</div>
		</main>
	);
}
