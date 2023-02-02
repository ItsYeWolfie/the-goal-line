import { useState, useEffect } from 'react';
import { FaChevronLeft, FaSearch } from 'react-icons/fa';
import { ICountry } from '../../types/Country.types';
import { ILeagueAndCountry } from '../../types/General.types';

function Countries() {
	const [countries, setCountries] = useState<ICountry[]>([] as ICountry[]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');
	const [groupedLeagues, setGroupedLeagues] = useState<ILeagueAndCountry[][]>([] as ILeagueAndCountry[][]);
	const [selectedCountry, setSelectedCountry] = useState<ICountry>({} as ICountry);
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.npoint.io/c1b77191c0cc9d3ae051');
			const data = await response.json();
			setCountries(data);
			setLoading(false);

			const res = await fetch('https://api.npoint.io/484684e50cfa51dfed36');
			const dataC: ILeagueAndCountry[] = await res.json();

			const tempGroupedLeagues: { [key: string]: ILeagueAndCountry[] } = {};
			dataC.forEach((cup) => {
				const country = cup.country.name;
				if (!tempGroupedLeagues[country]) {
					tempGroupedLeagues[country] = [cup];
				} else {
					tempGroupedLeagues[country].push(cup);
				}
			});
			setGroupedLeagues(Object.values(tempGroupedLeagues));
		};
		fetchData();
	}, []);

	const topCountries = ['England', 'Italy', 'Spain', 'France', 'Germany', 'World'];

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
			{selectedCountry ? (
				<div className="mt-2">
					<span className="flex items-center text-sky-600">
						{' '}
						<FaChevronLeft />
						<p className="ml-2 text-base">Leagues of {selectedCountry.name}</p>
					</span>
					<span>
						{groupedLeagues.map((leagues) =>
							leagues
								.filter((league) => league.country.name === selectedCountry.name)
								.map((league) => (
									<span
										className="flex items-center p-2"
										key={league.league.id}
									>
										<img
											className="rounded-sm"
											src={league.league.logo === null ? '/images/noimg.png' : league.league.logo}
											width="20px"
											height="20px"
											alt=""
										/>
										<p className="ml-2">{league.league.name}</p>
									</span>
								)),
						)}
					</span>
				</div>
			) : null}
			{countries

				.filter((c) => topCountries.includes(c.name))

				.filter((country) => country.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
				.map((country) => (
					<button
						type="button"
						className="flex h-auto p-2"
						onClick={() => setSelectedCountry(country)}
						key={country.name}
					>
						<span className="my-auto">
							<img
								className="rounded-sm"
								src={country.flag === null ? '/images/noimg.png' : country.flag}
								width="30px"
								alt=""
							/>
						</span>
						<span className="ml-2 cursor-pointer text-sm text-gray-300 hover:text-sky-600">{country.name}</span>
					</button>
				))}
			{countries
				.filter((c) => !topCountries.includes(c.name))
				.filter((country) => country.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
				.map((country) => (
					<button
						key={country.name}
						type="button"
						className="flex h-auto p-2"
						onClick={() => setSelectedCountry(country)}
					>
						<span className="my-auto">
							<img
								className="rounded-sm"
								src={country.flag === null ? '/images/noimg.png' : country.flag}
								width="30px"
								alt=""
							/>
						</span>
						<span className="ml-2 cursor-pointer text-sm text-gray-300 hover:text-sky-600">{country.name}</span>
					</button>
				))}
		</div>
	);
}
export default Countries;
