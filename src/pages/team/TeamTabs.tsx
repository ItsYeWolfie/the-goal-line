import { useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { ITab } from '../../types/Tab.types';
import DropdownList from '../../components/dropdowns/DropdownList';
import teamTabs from '../../lib/tabs/TeamTabsLinks';

export default function TeamTabs() {
	const { teamID } = useParams<{ teamID: string }>();
	const { pathname } = useLocation();
	const [dropdownName, setDropdownName] = useState(
		teamTabs.find((tab: ITab) => {
			return `/team/${teamID}${tab.href}` === pathname;
		})?.name || 'Team',
	);
	return (
		<>
			<DropdownList
				title={dropdownName}
				className="relative z-20 w-full items-center border border-transparent text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 md:hidden"
			>
				<div className="absolute top-full right-0 z-10 w-full rounded-md bg-gray-700 shadow-lg">
					{teamTabs.map((tab: ITab) => (
						<NavLink
							to={`/team/${teamID}${tab.href}`}
							key={tab.name}
							onClick={() => setDropdownName(tab.name)}
							className={({ isActive }) =>
								`${
									isActive ? 'dark:bg-gray-600' : 'dark:bg-gray-700'
								} block px-4 py-2 text-sm text-gray-200 dark:hover:bg-gray-600`
							}
							type="button"
						>
							{tab.name}
						</NavLink>
					))}
				</div>
			</DropdownList>
			<nav className="hidden flex-wrap items-center space-x-4 md:flex">
				{teamTabs.map((tab: ITab) => (
					<NavLink
						to={`/team/${teamID}${tab.href}`}
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
