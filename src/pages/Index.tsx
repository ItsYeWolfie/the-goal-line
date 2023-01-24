import { useMemo, useState } from 'react';
import { Outlet } from 'react-router';
import { BreadcrumbContext } from '../contexts/Breadcrumb.context';
import { IBreadCrumb } from '../types/BreadCrumb.types';

export default function Index() {
	const [breadcrumbs, setBreadcrumbs] = useState<IBreadCrumb[]>([
		{
			href: '/',
			name: 'Home',
		},
	]);

	const value = useMemo(() => {
		return {
			breadcrumbs,
			setBreadcrumbs,
		};
	}, [breadcrumbs]);

	return (
		<BreadcrumbContext.Provider value={value}>
			<Outlet />
		</BreadcrumbContext.Provider>
	);
}
