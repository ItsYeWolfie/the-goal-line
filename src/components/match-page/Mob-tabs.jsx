import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import Formation from './Formation';
import H2h from './H2H';
import LineUps from './Lineups';
import MatchInfo from './MatchInfo';
import Odds from './Odds';
import Standings from './Standings';
import Statistics from './Statistics';

const tabs = [
	{
		name: 'INFO',
		component: () => (
			<>
				<h6 className="pl-1 text-xs text-gray-300 md:ml-20">MATCH INFO</h6>
				<MatchInfo />
				<h6 className="mt-2 pl-1 text-xs text-gray-300 md:ml-20">ODDS</h6>
				<Odds className="mx-auto w-full md:w-4/5" />
				<h6 className="mt-2 pl-1 text-xs text-gray-300 md:ml-20">H2H</h6>
				<H2h className="mx-auto w-full md:w-4/5" />
				<img
					className="mx-auto hidden w-4/5 md:block"
					src="../images/gjirafa.png"
					alt=""
				/>
			</>
		),
	},
	{
		name: 'LINEUPS',
		component: () => (
			<>
				<h6 className=" pl-1 text-xs md:ml-20">FORMATION</h6>
				<Formation />
				<h6 className="mt-4 pl-1 text-xs md:ml-20">LINEUPS</h6>
				<LineUps />
			</>
		),
	},
	{
		name: 'STATISTICS',
		component: () => <Statistics />,
	},
	{
		name: 'STANDINGS',
		component: () => (
			<div className="mx-auto w-full md:w-4/5">
				<Standings />
			</div>
		),
	},
];

function MobTabs() {
	const [activeTab, setActiveTab] = useState('LINEUPS');
	const history = useHistory();

	const handleTabChange = (tabName) => {
		setActiveTab(tabName);
		history.replace({
			search: `?tab=${tabName}`,
		});
	};

	return (
		<div>
			<div className="mb-4 flex w-full justify-around rounded-t-md border-b-2 border-gray-200 border-opacity-30 bg-gray-800 p-2 md:mx-auto md:w-4/5">
				{tabs.map((tab) => (
					<div
						key={tab.name}
						className={`${
							tab.name === activeTab ? 'border-b-2 border-sky-600 text-sm text-sky-600 md:text-base' : ''
						} my-auto flex cursor-pointer flex-col items-center text-xs hover:text-sky-600 md:text-sm`}
						onClick={() => this.setActiveTab(tab.name)}
					>
						{tab.name}
					</div>
				))}
			</div>
			<div className="mt-2">{this.tabs.find((tab) => tab.name === this.activeTab).html}</div>
		</div>
	);
}

export default MobTabs;
