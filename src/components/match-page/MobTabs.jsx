/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import FixtureInfo from './MatchInfo';
import H2h from './H2H';
import Standings from './Standings';
import Odds from './Odds';
import Formation from './Formation';
import Statistics from './Statistics';
import MatchTabs from './LineupTabs';

// @ts-ignore
function Tab({ Component }) {
	return <div>{Component}</div>;
}

function Tabs() {
	const tabs = [
		{
			name: 'INFO',
			Component: (
				<div className="flex flex-col gap-y-2">
					<h6 className="pl-1 text-xs text-gray-300 md:ml-20">MATCH INFO</h6>
					<FixtureInfo />
					<h6 className="mt-2 pl-1 text-xs text-gray-300 md:ml-20">ODDS</h6>
					<Odds />
					<h6 className="mt-2 pl-1 text-xs text-gray-300 md:ml-20">H2H</h6>
					<H2h />
					<img
						className="mx-auto hidden w-4/5 md:block"
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
					<h6 className=" pl-1 text-xs md:ml-20">FORMATION</h6>
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
		const url = new URL(window.location.href);
		// @ts-ignore
		url.searchParams.set('tab', tabs.find((tab) => tab.name === tabName).name);
		window.history.replaceState({}, '', url);
	};

	return (
		<div className="lg:hidden">
			<div className="my-4 flex w-full justify-around rounded-t-md border-b-2 border-gray-200 border-opacity-30 bg-gray-800 p-2 md:mx-auto md:w-4/5">
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
