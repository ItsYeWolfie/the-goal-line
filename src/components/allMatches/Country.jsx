import React, { useState, useEffect } from 'react';

function Country() {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCountry, setSelectedCountry] = useState({});
	const [selectedCountryData, setSelectedCountryData] = useState({});
	const [showList, setShowList] = useState(true);
	const [showSelectedCountryData, setShowSelectedCountryData] = useState(true);
	const [cups, setCups] = useState([]);
	const [groupedCups, setGroupedCups] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/c1b77191c0cc9d3ae051');
			const data = await response.json();
			setCountries(data);
			setLoading(false);

			const res = await fetch('https://api.npoint.io/484684e50cfa51dfed36');
			const dataC = await res.json();
			setCups(dataC);

			const groupedCups = {};
			dataC.forEach((cup) => {
				const country = cup.country.name;
				if (!groupedCups[country]) {
					groupedCups[country] = [cup];
				} else {
					groupedCups[country].push(cup);
				}
				groupedCups[country].name = cup.name;
			});
			setGroupedCups(groupedCups);

			if (selectedCountry) {
				const selectedCountryDataResponse = await fetch(`https://api.npoint.io/699acd2fa754e5bd47d6`);
				const selectedCountryData = await selectedCountryDataResponse.json();
				setSelectedCountryData(selectedCountryData);
			}
		};

		fetchData();
	}, []);

	const selectCountry = (country) => {
		setSelectedCountry(country);
		setShowSelectedCountryData(true);
		setShowList(false);
	};

	const filterCountries = () => {
		const filteredCountries = countries.filter((country) =>
			country.name.toLowerCase().startsWith(searchTerm.toLowerCase()),
		);
		const filteredGroupedCups =
			groupedCups.World.filter((cups) => cups.league.name.toLowerCase().startsWith(searchTerm.toLowerCase())) || [];
		return [...filteredCountries, ...filteredGroupedCups];
	};

	const sortedCountries = (countries) => {
		const topCountries = ['England', 'Italy', 'Spain', 'France', 'Germany', 'Switzerland'];

		return countries.sort((a, b) => {
			if (topCountries.includes(a.name) && !topCountries.includes(b.name)) {
				return -1;
			}
			if (!topCountries.includes(a.name) && topCountries.includes(b.name)) {
				return 1;
			}
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
	};

	if (loading) {
		return (
			<div className="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:flex lg:w-full lg:justify-around">
				<img
					className="animate-spin"
					src="src/images/icons8-wait.svg"
					alt=""
				/>
			</div>
		);
	}

	const topCountries = ['England', 'Italy', 'Spain', 'France', 'Germany', 'Switzerland'];
		const topCups = [
			'UEFA Champions League',
			'UEFA Europa League',
			'Confederations Cup',
			'World Cup',
			'Copa America',
			'Euro Championship',
			'Asian Games',
			'World Cup - Women',
			'African Nations Championship',
			'UEFA Super Cup',
			'Friendlies',
			'UEFA Nations League',
		];
	
	return (
		<div>
				<div className="bg-gray-800 flex flex-col">
					<span className="my-auto pl-2 text-lg"
						><i class="fa-solid fa-magnifying-glass"></i>
						<input
							className="w-[85%] rounded-md border-0 bg-gray-800 p-2 placeholder-inherit outline-0 focus:border-0 focus:outline-0 active:border-0"
							type="text"
							placeholder="Search..."
							@input=${(e) => (this.searchTerm = e.target.value)}
					/></span>
					<span
						className="b-10 mt-2 w-full border-[0.2px] border-solid border-gray-200 opacity-30"
					></span>
				</div>
				
			{this.showList
					? (
						{ sortedCountries(filterCountries())
									.filter((c) => topCountries.includes(c.name))
									.map(
										(country) => (
											<div className="flex h-auto p-2">
												<span className="my-auto"
													><img
														className="rounded-sm"
														src={country.flag === null ? '../images/noimg.png' : country.flag}
														width="30px"
												/></span>
												<span className="ml-2 cursor-pointer text-sm text-gray-300 hover:text-sky-600"
													@click=${() => {
														selectCountry(country);
														selectedCountry = country;
														showList = false;
														showSelectedCountryData = true;
													}}
													>${country.name}</span>
											</div>
										)
									)}
								{groupedCups.World.filter((c) => topCups.includes(c.league.name)).map(
									(cups) =>
										( <div class="flex h-auto p-2">
											<span class="my-auto"
												><img
													class="rounded-sm bg-gray-200"
													src="${cups.league.logo === null
														? '../images/noimg.png'
														: cups.league.logo}"
													width="30px"
													height="20px"
													
											/></span>
											<a href="../fixtures-page/league-matches.html"
												><span class="ml-2 cursor-pointer text-sm text-gray-300 hover:text-sky-600"
													>${cups.league.name}</span></a>
										</div>)
								)}
								{sortedCountries(filterCountries())
									.filter((c) => !topCountries.includes(c.name))
									.map(
										(country) => (
											<div class="flex h-auto p-2">
												<span class="my-auto"
													><img
														class="rounded-sm"
														src="${country.flag === null ? '../images/noimg.png' : country.flag}"
														width="30px"
												/></span>
												<span
													class="ml-2 cursor-pointer text-sm text-gray-300 hover:text-sky-600"
													@click=${() => {
														selectCountry(country);
														selectedCountry = country;
														showList = false;
														showSelectedCountryData = true;
													}}
													>{country.name}</span>
											</div>
										)
									)}
						  )
						: ``
				}
				${
					this.showSelectedCountryData
						? (
								<div>
									<button
										class="p-3 text-sky-600"
										@click=${() => {
											if (this.selectedCountry !== '' && this.showSelectedCountryData === true) {
												this.showList = true;
												this.showSelectedCountryData = false;
											}
										}}
									>
										<i class="fa fa-chevron-left"></i
										><span className="ml-4 text-lg">Leagues of ${selectedCountryName}</span>
									</button>
									{selectedCountryData && selectedCountryName === 'England'
										? selectedCountryData.map(
											(league) =>
											(<span class="flex items-center p-2"
														><img
															className="bg-gray-200"
															src="${league.league.logo === null
																? '../images/noimg.png'
																: league.league.logo}"
															width="30px"
													height="30px"
													alt=''
														/>
														<a href="../fixtures-page/league-matches.html"
															><p
																className="cursor-pointer pl-2 text-sm text-gray-300 hover:text-sky-600"
															>
																${league.league.name}
													</p>
												</a>
											</span>
											)
										  )
										: ''}
								</div>
						  )
						: html``
				}
			</div>
	</div>
	);
}

export default Country;
