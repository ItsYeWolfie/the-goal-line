import { Link } from 'react-router-dom';
import { ITeamBasic } from '../../types/Team.types';

export default function Logo({ team }: { team: ITeamBasic }) {
	return (
		<Link
			className=" flex-none basis-[23%] overflow-auto rounded-full  bg-gray-100 hover:border-[2px]  hover:border-violet-600 dark:bg-gray-900  dark:hover:border-yellow-400 md:basis-[11%]"
			to={`/teams/${team.id}/`}
		>
			<img
				className="p-4"
				src={team.logo}
				alt={team.name}
			/>
		</Link>
	);
}
