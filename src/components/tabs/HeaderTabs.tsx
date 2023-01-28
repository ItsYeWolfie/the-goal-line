import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ITab } from '../../types/Tab.types';
import DropdownList from '../dropdowns/DropdownList';

export default function HeaderTabs({ params, dir, tabs }: { params: string | undefined; dir: string; tabs: ITab[] }) {
	const { pathname } = useLocation();
	const [dropdownName, setDropdownName] = useState(
		tabs.find((tab: ITab) => {
			return `/${dir}/${params}${tab.href}` === pathname;
		})?.name || 'League',
	);
	return (
		<>
			<DropdownList
				title={dropdownName}
				className="relative z-20 w-full items-center border border-transparent text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 md:hidden"
			>
				<div className="absolute top-full right-0 z-10 w-full rounded-b-md bg-gray-300 shadow-lg dark:bg-gray-700">
					{tabs.map((tab: ITab) => (
						<NavLink
							to={`/${dir}/${params}${tab.href}`}
							key={tab.name}
							onClick={() => setDropdownName(tab.name)}
							className={({ isActive }) =>
								`${
									isActive ? 'dark:bg-gray-600' : 'dark:bg-gray-700'
								} block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 dark:hover:bg-gray-600`
							}
							type="button"
						>
							{tab.name}
						</NavLink>
					))}
				</div>
			</DropdownList>
			<nav className="hidden flex-wrap items-center space-x-4 md:flex">
				{tabs.map((tab: ITab) => (
					<NavLink
						to={`/${dir}/${params}${tab.href}`}
						key={tab.name}
						className={({ isActive }) =>
							`${
								isActive ? 'border-indigo-400 text-indigo-500' : 'border-transparent hover:border-gray-300'
							} border-b-2 px-3 py-2 text-center text-sm font-medium text-gray-200 transition-colors duration-300 ease-in-out hover:text-gray-400`
						}
						type="button"
					>
						{tab.name}
					</NavLink>
				))}
			</nav>
		</>
	);
}
