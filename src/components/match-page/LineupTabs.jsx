/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from 'react';
import Injuries from './Injuries';
import Substitutes from './Substitutes';
import LineUps from './Lineups';

function Tab({ Component }) {
	return <div>{Component}</div>;
}

function LineupTabs() {
	const tabs = [
		{
			name: 'TEAMS LINEUPS',
			Component: <LineUps />,
		},
		{
			name: 'SUBSTITUTES',
			Component: <Substitutes />,
		},
		{ name: 'MISSING', Component: <Injuries /> },
	];
	const [activeTab, setActiveTab] = useState('TEAMS LINEUPS');

	const handleTabClick = (tabName) => {
		if (tabName === activeTab) {
			setActiveTab('TEAMS LINEUPS');
		} else {
			setActiveTab(tabName);
		}
	};

	return (
		<div className="">
			<div className="mt-4 flex w-full justify-between px-2 md:mx-auto">
				{tabs.map((tab) => (
					<button
						type="button"
						key={tab.name}
						className={`${
							tab.name === activeTab ? 'border-b-2 border-sky-700 text-[0.78rem] text-sky-600' : ''
						}my-auto flex cursor-pointer flex-col items-center border-b-2 border-gray-300 text-xs hover:border-sky-700 hover:text-sky-600`}
						onClick={() => handleTabClick(tab.name)}
					>
						<p>{tab.name}</p>
					</button>
				))}
			</div>
			{tabs.map(
				(tab) =>
					tab.name === activeTab && (
						<Tab
							key={tab.name}
							{...tab}
						/>
					),
			)}
		</div>
	);
}

export default LineupTabs;
