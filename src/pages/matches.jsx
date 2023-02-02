/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-use-before-define */

// @ts-ignore
import React, { useEffect, useRef } from 'react';
import Countries from '../components/allMatches/Countries';
import DaysTab from '../components/allMatches/DaysTab';

export default function MatchesPage() {
	const searchIcon = useRef(null);
	const country = useRef(null);

	useEffect(() => {
		// @ts-ignore
		searchIcon.current.addEventListener('click', toggleCountry);

		return () => {
			// @ts-ignore
			searchIcon.current.removeEventListener('click', toggleCountry);
		};
	}, []);

	function toggleCountry() {
		// @ts-ignore
		country.current.classList.toggle('hidden');
	}

	return (
		<div className="bg-gray-900">
			<div className="flex h-12 w-full justify-center lg:hidden">
				<span className="my-auto ml-auto">
					<img
						src="/images/logo-no-background.svg"
						width="170px"
						alt=""
					/>
				</span>
				<span
					className="my-auto ml-auto cursor-pointer pr-2"
					ref={searchIcon}
				>
					<img
						src="/images/icons8-search.svg"
						width="30px"
						alt=""
					/>
				</span>
			</div>
			<div className="justify-center lg:flex">
				<div
					className="absolute z-10 hidden w-full lg:relative lg:block lg:w-1/5 lg:pt-4"
					ref={country}
				>
					<div className="scrollbar-hide relative flex h-[95vh] flex-col overflow-hidden overflow-y-auto rounded-md bg-gray-800 p-2 text-sm text-gray-200 lg:mr-4">
						<Countries />
					</div>
				</div>
				<div className="scrollbar-hide relative mr-4 flex h-[95vh] w-full flex-col overflow-hidden overflow-y-auto rounded-md bg-gray-800 p-2 text-sm text-gray-200 lg:mt-4 lg:w-1/3">
					<DaysTab />
				</div>
				<div className="hidden h-[95vh] overflow-hidden lg:ml-3 lg:mt-4 lg:flex lg:w-1/4 lg:flex-col">
					<img
						className="pb-4"
						src="/images/ads2.jpg"
						alt=""
					/>
					<img
						className="pb-4"
						src="/images/reklam.png"
						alt=""
					/>
					<img
						className="pb-4"
						src="/images/ads3.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
