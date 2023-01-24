import React from 'react';
import { IBreadCrumb } from '../types/BreadCrumb.types';

export interface IBreadcrumbContext {
	breadcrumbs: IBreadCrumb[];
	setBreadcrumbs: (breadcrumbs: IBreadCrumb[]) => void;
}

export const BreadcrumbContext = React.createContext<IBreadcrumbContext>({
	breadcrumbs: [],
	setBreadcrumbs: (breadcrumbs: IBreadCrumb[]): void => {},
});
