import { FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { IPlayerSearch } from '../../types/General.types';

interface PlayerResultProps {
	player: IPlayerSearch;
	onClick: () => void;
}

export default function PlayerResult({ player, onClick }: PlayerResultProps) {
	return (
		<div className="mt-2 flex h-[44px] w-full items-center sm:mt-[4] sm:h-[55px] md:mt-[2%]  md:h-[54px] ">
			<div className="h-full w-[15%] rounded-[10px] bg-gray-400 dark:bg-gray-200 md:w-[10%] ">
				<Link
					to={`/teams/${player.id}/`}
					onClick={onClick}
				>
					<img
						src={player.photo}
						alt="a"
						className="m-auto mt-[5%]  h-[90%] w-[70%] rounded-full"
					/>
				</Link>
			</div>
			<div className=" grid h-full w-[70%] grid-rows-2 md:w-[75%] ">
				<div className="flex h-full items-end pl-[4%] text-[17px] sm:text-[20px]">
					{' '}
					<Link
						to={`/teams/${player.id}/`}
						onClick={onClick}
					>
						{player.name}
					</Link>
				</div>
				<div className="flex h-full items-end pl-[4%] text-[13px] text-gray-600 dark:text-gray-200 sm:text-[15px]">
					{player.position}: {player.number === null ? '-' : player.number}
				</div>
			</div>
			<div className="h-full w-[10%] ">
				<Link
					to={`/teams/${player.id}/`}
					onClick={onClick}
				>
					{' '}
					<FiChevronsRight className=" mx-auto mt-[25%] text-[25px] text-gray-600 dark:text-gray-200  md:mt-[15%]  md:text-[25px]" />
				</Link>
			</div>
		</div>
	);
}
