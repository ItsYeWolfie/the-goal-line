import React from 'react';
import { IBreadCrumb } from '../types/BreadCrumb.types';

export interface IGlobalHeader {
	breadcrumbs: IBreadCrumb[];
	tabsComponent: JSX.Element | null;
	setBreadcrumbs: (breadcrumbs: IBreadCrumb[]) => void;
	setTabsComponent: (tabsComponent: JSX.Element | null) => void;
}

export const GlobalHeaderContext = React.createContext<IGlobalHeader>({
	breadcrumbs: [],
	tabsComponent: null,
	setBreadcrumbs: (breadcrumbs: IBreadCrumb[]): void => {},
	setTabsComponent: (tabsComponent: JSX.Element | null): void => {},
});
