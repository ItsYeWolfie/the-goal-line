/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import moment from 'moment/moment';
import TodayMatches from './TodayMatches';
import LiveMatches from './LiveMatches';
import YesterdayMatches from './YesterdayMatches';
import BeforeYesterdayMatches from './BeforeYesterdayMatches';
import TomorrowMatches from './TomorrowMatches';
import AfterTomorrowMatches from './AfterTomorrowMatches';

// @ts-ignore
function Tab({ Component }) {
	return <div>{Component}</div>;
}

function Tabs() {
	const dayBeforeYesterday = moment().subtract(2, 'days').format('D MMM').toLocaleUpperCase();
	const yesterday = moment().subtract(1, 'days').format('D MMM').toLocaleUpperCase();
	const today = moment().format('D MMM').toLocaleUpperCase();
	const tomorrow = moment().add(1, 'days').format('D MMM').toLocaleUpperCase();
	const dayAfterTomorrow = moment().add(2, 'days').format('D MMM').toLocaleUpperCase();

	const dayBeforeYesterdayWeek = moment().subtract(2, 'days').format('ddd').toLocaleUpperCase();
	const yesterdayWeek = moment().subtract(1, 'days').format('ddd').toLocaleUpperCase();
	const tomorrowWeek = moment().add(1, 'days').format('ddd').toLocaleUpperCase();
	const dayAfterTomorrowWeek = moment().add(2, 'days').format('ddd').toLocaleUpperCase();
	const tabs = [
		{ name: 'LIVE', slug: 'LIVE', Component: <LiveMatches /> },
		{ name: dayBeforeYesterday, slug: dayBeforeYesterdayWeek, Component: <BeforeYesterdayMatches /> },
		{ name: yesterday, slug: yesterdayWeek, Component: <YesterdayMatches /> },
		{ name: today, slug: 'TODAY', Component: <TodayMatches /> },
		{ name: tomorrow, slug: tomorrowWeek, Component: <TomorrowMatches /> },
		{ name: dayAfterTomorrow, slug: dayAfterTomorrowWeek, Component: <AfterTomorrowMatches /> },
	];
	const [activeTab, setActiveTab] = useState(today);

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
		const url = new URL(window.location.href);
		url.searchParams.set('tab', tabs.find((tab) => tab.name === tabName).name);
		window.history.replaceState({}, '', url);
	};

	return (
		<div>
			<div className="fixed z-10 -ml-2 -mt-2 mb-20 flex w-full justify-around rounded-t-md border-b-2 border-gray-200 border-opacity-30 bg-gray-100 p-2 dark:bg-gray-900 lg:w-[33.3%] lg:bg-gray-200 dark:lg:bg-gray-800">
				{tabs.map((tab) => (
					<div
						className={`${
							tab.name === activeTab ? 'text-sm text-sky-600 md:text-[17px]' : ''
						} my-auto flex cursor-pointer flex-col items-center text-xs hover:text-sky-600 md:text-sm`}
						onClick={() => handleTabClick(tab.name)}
					>
						<span>{tab.slug === 'LIVE' ? '' : tab.slug}</span>
						<p>{tab.name}</p>
					</div>
				))}
			</div>
			{tabs.map((tab) => tab.name === activeTab && <Tab {...tab} />)}
		</div>
	);
}

export default Tabs;
