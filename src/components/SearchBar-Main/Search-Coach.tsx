import { FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ICoaches } from '../../../types/CoachesPage.types';

interface SearchCoachResultProps {
	coach: ICoaches;
}

export default function SearchCoachResult({ coach }: SearchCoachResultProps) {
	return (
		<div className="mt-[2%] flex h-[48px] w-full items-center md:h-[54px] ">
			<div className="h-full w-[15%] rounded-[10px] bg-gray-200 md:w-[10%] ">
				<Link to={`/coach/${coach.lastname}`}>
					<img
						src={coach.photo}
						alt="a"
						className="m-auto mt-[5%]  h-[90%] w-[70%] rounded-full"
					/>
				</Link>
			</div>
			<div className="grid h-full w-[70%] grid-rows-2 overflow-hidden md:w-[75%] ">
				<div className="flex h-full items-end pl-[2%] text-[20px]">
					<Link to={`/coach/${coach.lastname}`}>{coach.name}</Link>
				</div>
				<div className="flex h-full items-end pl-[2%] text-[15px] text-gray-200">
					{coach.id}: {coach.team.name}
				</div>
			</div>
			<div className="h-full w-[10%] ">
				<Link to={`/coach/${coach.lastname}`}>
					<FiChevronsRight className=" mx-auto mt-[22%] text-[25px] text-gray-200  md:mt-[10%]  md:text-[25px]" />
				</Link>
			</div>
		</div>
	);
}
