/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import moment from 'moment/moment';
import TodayMatches from './TodayMatches';
import LiveMatches from './LiveMatches';
import YesterdayMatches from './YesterdayMatches';
import BeforeYesterdayMatches from './BeforeYesterdayMatches';
import TomorrowMatches from './TomorrowMatches';
import AfterTomorrowMatches from './AfterTomorrowMatches';
import Countries from './Countries';

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
	const [listHidden, setListHidden] = useState(true);

	return (
		<div>
			<div className="fixed z-20 -ml-4 -mt-2 flex w-full justify-around border-b-2 border-gray-700 border-opacity-30 bg-gray-100 p-2 pt-4 dark:border-gray-200 dark:border-opacity-30 dark:bg-gray-900 md:-ml-[2.65rem] lg:-ml-2 lg:w-[39.5%] lg:bg-gray-200 lg:pt-2 dark:lg:bg-gray-800">
				<FaChevronRight
					className="absolute left-0 z-50 mt-2 pl-2 text-base md:mt-3 lg:hidden"
					style={{ transform: `rotate(${listHidden ? 0 : 90}deg)` }}
					onClick={() => setListHidden(!listHidden)}
				/>
				{tabs.map((tab) => (
					<div
						className={`${
							tab.name === activeTab ? 'text-sm text-sky-600 md:text-[18px]' : ''
						} my-auto flex cursor-pointer flex-col items-center text-xs hover:text-sky-600 md:text-sm`}
						onClick={() => handleTabClick(tab.name)}
					>
						<span>{tab.slug === 'LIVE' ? '' : tab.slug}</span>
						<p>{tab.name}</p>
					</div>
				))}
			</div>
			<div className={`absolute  mt-12 w-full lg:hidden ${listHidden ? 'hidden' : ''}`}>
				<div className="no-scrollbar relative z-10 -ml-4 flex h-[78vh] flex-col overflow-hidden overflow-y-auto rounded-md bg-gray-200 p-2 text-sm dark:bg-gray-800 md:h-full">
					<Countries />
				</div>
			</div>
			{tabs.map((tab) => tab.name === activeTab && <Tab {...tab} />)}
		</div>
	);
}

export default Tabs;
