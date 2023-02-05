/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from 'react';
import FixtureInfo from './MatchInfo';
import Summary from './Summary';

function Tab({ Component }) {
	return <div>{Component}</div>;
}

function TabIS() {
	const tabs = [
		{
			name: 'MATCH INFO',
			Component: <FixtureInfo />,
		},
		{
			name: 'SUMMARY',
			Component: <Summary />,
		},
	];
	const [activeTab, setActiveTab] = useState('MATCH INFO');

	const handleTabClick = (tabName) => {
		if (tabName === activeTab) {
			setActiveTab('MATCH INFO');
		} else {
			setActiveTab(tabName);
		}
	};

	return (
		<div className="">
			<div className="flex w-full justify-between px-2 md:mx-auto lg:mt-4">
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

export default TabIS;
