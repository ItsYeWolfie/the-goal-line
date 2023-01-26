import { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import fetchData from '../../../lib/helpers/Fetch';
import { FootballMatch } from '../../../types/Fixture-Main.types';
import { SearchPlayer } from '../../../types/SearchPlayer.types';
import PlayerResult from './Search-Player';
import SearchTeamResult from './Search-Team';

export default function Search() {
	const [hidden, setHidden] = useState(true);
	const [matches, setMatches] = useState<FootballMatch[]>([]);
	const [players, setPlayers] = useState<SearchPlayer[]>([]);
	const [filterPlayers, setFilterPlayers] = useState<SearchPlayer[]>([]);
	const [filteredMatches, setFilteredMatches] = useState<FootballMatch[]>([]);
	const searchRef = useRef<HTMLInputElement>(null);
	const [selectedOption, setSelectedOption] = useState('Team');

	useEffect(() => {
		fetchData<FootballMatch[]>('https://api.npoint.io/cfdd9340ece0aa795c9e').then((data) => {
			setMatches(data);
			setFilteredMatches(data.slice(0, 10));
		});
	}, []);

	useEffect(() => {
		fetchData<SearchPlayer[]>('https://api.npoint.io/8d996f27035b708c6e9f').then((result) => {
			setPlayers(result);
			setFilterPlayers(result.slice(0, 10));
		});
	}, []);

	const handleSearchChange = () => {
		if (searchRef.current) {
			const searchText = searchRef.current.value;
			const filteredData2 = players.filter((player) => {
				return player.name.toLowerCase().includes(searchText.toLowerCase());
			});
			setFilterPlayers(filteredData2);

			const filteredData = matches.filter((match) => {
				return match.teams.home.name.toLowerCase().includes(searchText.toLowerCase());
			});
			const uniqueData = filteredData.filter((item, index, self) => {
				return self.findIndex((t) => t.teams.home.name === item.teams.home.name) === index;
			});
			const updatedFilteredData = uniqueData.map((item, index) => {
				return { ...item, position: index + 1 };
			});
			setFilteredMatches(updatedFilteredData);
		}
	};

	const handleSearchClick = () => {
		setHidden(false);
	};

	const handleCloseClick = () => {
		setHidden(true);
	};

	return (
		<>
			<div className="float-right w-auto pt-[1%] pr-[1%] ">
				<button
					type="submit"
					onClick={handleSearchClick}
					className="ml-2 rounded-lg border  bg-gray-800 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none "
				>
					<svg
						className="h-5 w-5 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
					<span className="sr-only">Search</span>
				</button>
			</div>
			<div
				className={`absolute top-[10%] z-10 ${
					hidden ? 'hidden' : ''
				} h-[60vh] w-full rounded-[20px] border-[1px] bg-gray-900  bg-opacity-[1] sm:left-[10%] sm:h-[700px] sm:w-[80%] md:left-[20%] md:h-[500px] md:w-[60%]`}
			>
				<div className="relative mb-[2%] ml-[3%] mt-[1%] flex h-[7%]  items-center text-[22px]  font-semibold text-gray-100">
					Search
					<IoClose
						onClick={handleCloseClick}
						className="absolute right-[6%] top-[10%] cursor-pointer text-[35px] text-white hover:text-red-700"
					/>{' '}
				</div>
				<div className=" rounded-t-[20px]">
					<div className="relative ">
						<div className="relative mx-auto flex w-[95%] cursor-pointer items-center rounded-md border-[1px]  px-4 py-2 text-sm leading-5">
							<input
								id="search"
								className="block w-full rounded-md border-none bg-transparent py-2 pl-8 text-[19px] leading-5 text-white transition duration-150 ease-in-out placeholder:text-gray-400  focus:border-transparent focus:outline-none
								 sm:text-[17px] sm:leading-5"
								ref={searchRef}
								onChange={handleSearchChange}
								placeholder="Type to search..."
							/>
							<div className="absolute right-4 top-2 border-none">
								<select
									className=" block w-full rounded-md border-[1px] bg-transparent py-2 pl-3 pr-10 leading-5  text-lime-400 focus:border-transparent  focus:outline-none  sm:text-[15px] sm:leading-5"
									onChange={(event) => setSelectedOption(event.target.value)}
								>
									<option>Team</option>
									<option>Player</option>
								</select>
							</div>
							<div className="absolute left-3 top-3">
								<svg
									className="h-7 w-7 text-gray-200"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={3}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className=" mx-auto mt-[5%] grid h-[72%] w-[95%] grid-flow-row gap-[1%]  overflow-y-scroll scroll-smooth md:h-[67%]">
					{selectedOption === 'Team'
						? filteredMatches.map((match) => (
								<SearchTeamResult
									key={match.teams.home.id}
									match={match}
								/>
						  ))
						: filterPlayers.map((player) => (
								<PlayerResult
									key={player.id}
									player={player}
								/>
						  ))}
				</div>
			</div>
		</>
	);
}
