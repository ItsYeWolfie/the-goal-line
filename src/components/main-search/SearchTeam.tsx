import { FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { IFixture } from '../../types/Fixture.types';

interface SearchTeamResultProps {
	match: IFixture;
	onClick: () => void;
}

export default function SearchTeamResult({ match, onClick }: SearchTeamResultProps) {
	return (
		<div className="mt-2 flex h-[44px] w-full items-center sm:mt-[4] sm:h-[55px] md:mt-[2%]  md:h-[54px] ">
			<div className="h-full w-[15%] rounded-[10px]  md:w-[10%] ">
				<Link
					to={`/teams/${match.teams.home.id}/`}
					onClick={onClick}
				>
					<img
						src={match.teams.home.logo}
						alt="a"
						className="m-auto mt-[8%] h-10 w-10 rounded-full"
					/>
				</Link>
			</div>
			<div className=" grid h-full w-[70%] grid-rows-2 md:w-[75%] ">
				<div className="flex h-full items-end pl-[4%] text-[17px] sm:text-[20px]">
					{' '}
					<Link
						to={`/teams/${match.teams.home.id}/`}
						onClick={onClick}
					>
						{match.teams.home.name}
					</Link>
				</div>
				<div className="flex h-full items-end pl-[4%] text-[13px] text-gray-600 dark:text-gray-200 sm:text-[15px]">
					{match.league.country}: {match.league.name}
				</div>
			</div>
			<div className="h-full w-[10%] ">
				<Link
					to={`/teams/${match.teams.home.id}/`}
					onClick={onClick}
				>
					{' '}
					<FiChevronsRight className=" mx-auto mt-[25%] text-[25px] text-gray-700 dark:text-gray-200  md:mt-[15%]  md:text-[25px]" />
				</Link>
			</div>
		</div>
	);
}
