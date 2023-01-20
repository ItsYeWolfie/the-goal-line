import { useParams, NavLink } from 'react-router-dom';
import teamTabs from '../../../lib/tabs/TeamTabs';
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
						className="block w-full rounded-md border-gray-600 bg-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
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
								isActive ? 'border-indigo-400 text-indigo-500' : 'border-transparent hover:border-gray-300'
							} border-b-2 p-4 text-center text-sm font-medium text-gray-200 transition-colors duration-300 ease-in-out hover:text-gray-400`
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
