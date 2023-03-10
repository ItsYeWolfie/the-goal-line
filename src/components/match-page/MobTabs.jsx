/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import H2h from './H2H';
import Standings from './Standings';
import Odds from './Odds';
import Formation from './Formation';
import Statistics from './Statistics';
import MatchTabs from './LineupTabs';
import TabIS from './TabIS';

// @ts-ignore
// eslint-disable-next-line react/prop-types
function Tab({ Component }) {
	return <div>{Component}</div>;
}

function Tabs() {
	const tabs = [
		{
			name: 'INFO',
			Component: (
				<div className="flex flex-col gap-y-2">
					<TabIS />
					<h6 className="mt-2 pl-1 text-xs">ODDS</h6>
					<Odds />
					<h6 className="mt-2 pl-1 text-xs">H2H</h6>
					<H2h />
					<img
						className="mx-auto hidden md:block"
						src="/images/gjirafa.png"
						alt=""
					/>
				</div>
			),
		},
		{
			name: 'LINEUPS',
			Component: (
				<div className="flex flex-col">
					<h6 className=" pl-1 text-xs">FORMATION</h6>
					<Formation />
					<MatchTabs />
				</div>
			),
		},
		{ name: 'STATISTICS', Component: <Statistics /> },
		{ name: 'STANDINGS', Component: <Standings /> },
	];
	const [activeTab, setActiveTab] = useState('INFO');

	// @ts-ignore
	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<div className="lg:hidden">
			<div className="my-4 flex w-full justify-around rounded-t-md border-b-2 border-gray-200 border-opacity-30 bg-gray-200 p-2 dark:bg-gray-800 md:mx-auto">
				{tabs.map((tab) => (
					<button
						type="button"
						key={tab.name}
						className={`${
							tab.name === activeTab ? 'border-b-2 border-sky-600 text-sm text-sky-600 md:text-base' : ''
						}my-auto flex cursor-pointer flex-col items-center text-xs hover:text-sky-600
							md:text-sm`}
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

export default Tabs;
