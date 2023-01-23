import { useParams, NavLink } from 'react-router-dom';
import teamTabs from '../../../lib/tabs/TeamTabsLinks';
import { ITab } from '../../../types/Tab.types';

export default function TeamTabs() {
	const { teamID } = useParams();
	return (
		<>
			<div className="mb-8 md:hidden">
				<label htmlFor="tabs">
					<span className="sr-only">Select a tab</span>
					<select
						name="tabs"
						className="block w-full rounded-md border-neutral-600 bg-neutral-700 focus:border-indigo-500 focus:ring-indigo-500"
						onChange={(e) => {
							window.location.href = `/team/${teamID}/${e.target.value}`;
						}}
					>
						{teamTabs.map((tab) => (
							<option
								value={tab.slug}
								key={tab.slug}
							>
								{tab.name}
							</option>
						))}
					</select>
				</label>
			</div>
			<nav className="hidden flex-wrap items-center space-x-4 md:flex">
				{teamTabs.map((tab: ITab) => (
					<NavLink
						to={tab.href}
						key={tab.name}
						className={({ isActive }) =>
							`${
								isActive ? 'border-indigo-400 text-indigo-500' : 'border-transparent hover:border-neutral-300'
							} border-b-2 px-3 py-2 text-center text-sm font-medium text-neutral-200 transition-colors duration-300 ease-in-out hover:text-neutral-400`
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
