/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
// @ts-ignore
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

function Countries() {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/c1b77191c0cc9d3ae051');
			const data = await response.json();
			setCountries(data);
			setLoading(false);
		};
		fetchData();
	}, [countries]);

	const topCountries = ['England', 'Italy', 'Spain', 'France', 'Germany', 'Switzerland'];

	if (loading) {
		return (
			<div className="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:flex lg:w-full lg:justify-around">
				<img
					className="animate-spin"
					src="../images/icons8-wait.svg"
					alt=""
				/>
			</div>
		);
	}
	return (
		<div className="flex flex-col">
			<span className="my-auto flex items-center pl-2 text-lg">
				<FaSearch />
				<input
					className="w-[85%] rounded-md border-0 bg-gray-800 p-2 placeholder-inherit outline-0 focus:border-0 focus:outline-0 active:border-0"
					type="text"
					placeholder="Search..."
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</span>
			<span className="mt-2 w-full border-[0.2px] border-solid border-gray-200 opacity-30" />
			{countries
				// @ts-ignore
				.filter((c) => topCountries.includes(c.name))
				// @ts-ignore
				.filter((country) => country.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
				.map((country) => (
					<div className="flex h-auto p-2">
						<span className="my-auto">
							<img
								className="rounded-sm"
								// @ts-ignore
								src={country.flag === null ? 'src/images/noimg.png' : country.flag}
								width="30px"
								alt=""
							/>
						</span>
						<span className="ml-2 cursor-pointer text-sm text-gray-300 hover:text-sky-600">
							{
								// @ts-ignore
								country.name
							}
						</span>
					</div>
				))}
			{countries
				// @ts-ignore
				.filter((c) => !topCountries.includes(c.name))
				// @ts-ignore
				.filter((country) => country.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
				.map((country) => (
					<div className="flex h-auto p-2">
						<span className="my-auto">
							<img
								className="rounded-sm"
								// @ts-ignore
								src={country.flag === null ? 'src/images/noimg.png' : country.flag}
								width="30px"
								alt=""
							/>
						</span>
						<span className="ml-2 cursor-pointer text-sm text-gray-300 hover:text-sky-600">
							{
								// @ts-ignore
								country.name
							}
						</span>
					</div>
				))}
		</div>
	);
}
export default Countries;
