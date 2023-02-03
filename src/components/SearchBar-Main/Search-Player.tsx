import { FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SearchPlayer } from '../../../types/SearchPlayer.types';

interface PlayerResultProps {
	player: SearchPlayer;
	onClick: () => void;
}

export default function PlayerResult({ player, onClick }: PlayerResultProps) {
	return (
		<Link
			className="mt-2 flex w-full items-center md:h-[54px]"
			to={`/players/${player.id}/`}
			onClick={onClick}
		>
			<div className="h-full basis-[15%] rounded-lg bg-gray-200 md:basis-[10%] ">
				<img
					src={player.photo}
					alt={player.name}
					className="rounded-full object-contain"
				/>
			</div>
			<div className="grid h-full w-[70%] grid-rows-2 overflow-hidden md:w-[75%] ">
				<div className="flex h-full items-end pl-[2%] text-[20px]">
					{' '}
					<Link to={`/players/${player.id}/`}>{player.name}</Link>
				</div>
				<div className="flex h-full items-end pl-[2%] text-[15px] text-gray-200">
					{player.number}: {player.position}
				</div>
			</div>
			<div className="h-full w-[10%] ">
				<FiChevronsRight className=" mx-auto mt-[22%] text-[25px] text-gray-200  md:mt-[10%]  md:text-[25px]" />
			</div>
		</Link>
	);
}
