/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Injuries from './Injuries';
import Substitutes from './Substitutes';
import LineUps from './Lineups';
// @ts-ignore
function Tab({ name, Component }) {
	return <div>{Component}</div>;
}

function MatchTabs() {
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
		setActiveTab(tabName);
		const url = new URL(window.location.href);
		url.searchParams.set('tab', tabs.find((tab) => tab.name === tabName).name);
		window.history.replaceState({}, '', url);
	};

	return (
		<div className="">
			<div className="mt-2 flex w-full justify-between md:mx-auto md:w-4/5 lg:w-full">
				{tabs.map((tab) => (
					<div
						className={`${
							tab.name === activeTab ? 'border-b-[0.5px] border-sky-700 text-[0.78rem] text-sky-600' : ''
						}my-auto flex cursor-pointer flex-col items-center text-xs hover:text-sky-600`}
						onClick={() => handleTabClick(tab.name)}
					>
						<p>{tab.name}</p>
					</div>
				))}
			</div>
			{tabs.map((tab) => tab.name === activeTab && <Tab {...tab} />)}
		</div>
	);
}

export default MatchTabs;
