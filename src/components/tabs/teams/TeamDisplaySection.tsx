import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ITeamAndVenue } from '../../../types/Team.types';

export default function TeamsDisplaySection({ teams }: { teams: ITeamAndVenue[] }) {
	const [filteredTeams, setFilteredTeams] = useState<ITeamAndVenue[]>(teams.slice(0, 10));
	const handlePageChange = (page: number) => {
		const start = page * 10;
		const end = start + 10;
		setFilteredTeams(teams.slice(start, end));
	};
	return (
		<div className="mt-6 grid grid-cols-12 gap-4 text-gray-900 dark:text-gray-100 lg:col-span-2 lg:mt-0 xl:col-span-3">
			{filteredTeams && filteredTeams.length > 0 ? (
				<>
					{filteredTeams.map((team) => (
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
					{teams.length > 10 && (
						<div className="col-span-12 mt-4 flex items-center justify-center gap-2">
							{[...Array(Math.ceil(teams.length / 10)).keys()].map((page) => (
								<button
									key={page}
									type="button"
									className="rounded-sm bg-gray-800 py-1 px-3 dark:bg-gray-200"
									onClick={() => handlePageChange(page)}
								>
									<header className="text-gray-300 dark:text-gray-700">{page + 1}</header>
								</button>
							))}
						</div>
					)}
				</>
			) : (
				<div className="col-span-12 flex h-32 items-center justify-center bg-cover bg-center bg-no-repeat sm:col-span-6">
					<div className="flex items-center justify-center gap-1 rounded-md bg-gray-600 bg-opacity-70 px-4 py-2">
						<header className="text-xl text-gray-300">No teams found</header>
					</div>
				</div>
			)}
		</div>
	);
}
