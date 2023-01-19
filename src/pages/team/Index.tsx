import { NavLink, Outlet, useLoaderData, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ITeamAndVenue } from '../../../types/Team.types';
import { ITab } from '../../../types/Tab.types';
import teamTabs from '../../../lib/tabs/TeamTabs';

export default function TeamIndex() {
	const { team, venue } = useLoaderData() as ITeamAndVenue;
	const { teamID } = useParams();

	useEffect(() => {
		document.title = `${team.name} - The Goal Line`;
		document.body.classList.add('overflow-y-scroll');
	}, [team]);

	return (
		<section className="container mx-auto p-2 sm:p-8 md:px-8">
			<div className="mb-8 md:hidden">
				<label htmlFor="tabs">
					<span className="sr-only">Select a tab</span>
					<select
						name="tabs"
						className="block w-full rounded-md border-gray-600 bg-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
						onChange={(e) => {
							window.location.href = `/team/${teamID}/${e.target.value}`;
						}}>
						{teamTabs.map((tab) => (
							<option
								value={tab.slug}
								key={tab.slug}>
								{tab.name}
							</option>
						))}
					</select>
				</label>
			</div>
			<nav className="hidden w-max flex-wrap items-center space-x-4 md:flex">
				{teamTabs.map((tab: ITab) => (
					<NavLink
						to={tab.href}
						key={tab.name}
						className={({ isActive }) =>
							`${
								isActive
									? 'border-indigo-400 text-indigo-500'
									: 'border-transparent hover:border-gray-300'
							} tab-button border-b-2 p-4 text-center text-sm font-medium text-gray-200 transition-colors duration-300 ease-in-out hover:text-gray-400`
						}
						type="button">
						{tab.name}
					</NavLink>
				))}
			</nav>
			<section className="py-8">
				<Outlet context={{ team, venue }} />
			</section>
		</section>
	);
}
