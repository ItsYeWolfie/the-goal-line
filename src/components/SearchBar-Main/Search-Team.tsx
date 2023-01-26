import { FiChevronsRight } from 'react-icons/fi';
import { FootballMatch } from '../../../types/Fixture-Main.types';

interface SearchTeamResultProps {
	match: FootballMatch;
}

export default function SearchTeamResult({ match }: SearchTeamResultProps) {
	return (
		<div className="mt-[2%] flex h-[45px] w-full items-center md:h-[54px] ">
			<div className="h-full w-[15%] rounded-[10px] bg-gray-200 md:w-[10%] ">
				<img
					src={match.teams.home.logo}
					alt="a"
					className="m-auto mt-[5%]  h-[90%] w-[70%] rounded-full"
				/>
			</div>
			<div className="grid h-full w-[70%] grid-rows-2 overflow-hidden md:w-[75%] ">
				<div className="flex h-full items-end pl-[2%] text-[20px]">{match.teams.home.name}</div>
				<div className="flex h-full items-end pl-[2%] text-[15px] text-gray-200">
					{match.league.country}: {match.league.name}
				</div>
			</div>
			<div className="h-full w-[10%] ">
				<FiChevronsRight className=" mx-auto mt-[25%] text-[25px] text-gray-200  md:mt-[15%]  md:text-[25px]" />
			</div>
		</div>
	);
}
