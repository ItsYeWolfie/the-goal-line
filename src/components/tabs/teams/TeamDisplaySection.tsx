import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ITeamAndVenue } from '../../../types/Team.types';
import PaginatedPrevAndNext from '../../pagination/PaginatedPrevAndNext';

const splitCount = 10;

export default function TeamsDisplaySection({ filteredTeams }: { filteredTeams: ITeamAndVenue[] }) {
	const [displayedTeams, setDisplayedTeams] = useState<ITeamAndVenue[]>([]);

	return filteredTeams && filteredTeams.length > 0 ? (
		<>
			{displayedTeams.map((team) => (
				<Link
					key={team.team.id}
					to={`/team/${team.team.id}/`}
					className="col-span-12 flex h-32 items-center justify-center bg-cover bg-center bg-no-repeat sm:col-span-6"
					style={{
						backgroundImage: `url(${team.venue.image || team.team.logo}`,
					}}
				>
					<div className="flex items-center justify-center gap-1 rounded-md bg-black bg-opacity-70 px-4 py-2">
						<img
							className="h-8 w-8 rounded-full"
							src={team.team.logo}
							alt={team.team.name}
						/>

						<header className="text-xl text-gray-300">{team.team.name}</header>
					</div>
				</Link>
			))}
			<PaginatedPrevAndNext
				className="col-span-12 flex items-stretch justify-between border-t border-gray-200 px-4 sm:px-0"
				items={filteredTeams}
				setDisplayedItems={setDisplayedTeams}
				splitCount={splitCount}
			/>
		</>
	) : (
		<div className="col-span-12 flex h-32 items-center justify-center bg-cover bg-center bg-no-repeat sm:col-span-6">
			<div className="flex items-center justify-center gap-1 rounded-md bg-gray-600 bg-opacity-70 px-4 py-2">
				<header className="text-xl text-gray-300">No teams found</header>
			</div>
		</div>
	);
}
