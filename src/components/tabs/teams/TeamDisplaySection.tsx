import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import { ITeamAndVenue } from '../../../types/Team.types';

export default function TeamsDisplaySection({
	filteredTeams,
	setFilteredTeams,
}: {
	filteredTeams: ITeamAndVenue[];
	setFilteredTeams: (teams: ITeamAndVenue[]) => void;
}) {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [displayedTeams, setDisplayedTeams] = useState<ITeamAndVenue[]>([]);

	const handlePageChange = (page: number) => {
		if (page < 1 || page > totalPages) return;
		setCurrentPage(page);
		setDisplayedTeams(filteredTeams.slice((page - 1) * 10, page * 10));
	};

	useEffect(() => {
		setDisplayedTeams(filteredTeams.slice(0, 10));
	}, [filteredTeams, setFilteredTeams]);

	useEffect(() => {
		setTotalPages(Math.ceil(filteredTeams.length / 10));
	}, [filteredTeams]);
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
			{filteredTeams.length > 10 && (
				<nav className="col-span-12 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
					<div className="-mt-px flex w-0 flex-1">
						<button
							className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1  text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:text-gray-300"
							type="button"
							onClick={() => handlePageChange(currentPage - 1)}
						>
							<ArrowLongLeftIcon
								className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-600"
								aria-hidden="true"
							/>
							Previous
						</button>
					</div>
					<div className="hidden md:-mt-px md:flex">
						{[...Array(Math.ceil(filteredTeams.length / 10)).keys()].map((page) => (
							<button
								key={page}
								type="button"
								className={`
								${
									currentPage === page + 1
										? 'border-indigo-500 text-indigo-600'
										: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-300'
								} inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium`}
								onClick={() => handlePageChange(page + 1)}
							>
								{page + 1}
							</button>
						))}
					</div>
					<div className="-mt-px flex w-0 flex-1 justify-end">
						<button
							type="button"
							className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:text-gray-300"
							onClick={() => handlePageChange(currentPage + 1)}
						>
							Next
							<ArrowLongRightIcon
								className="ml-3 h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</button>
					</div>
				</nav>
			)}
		</>
	) : (
		<div className="col-span-12 flex h-32 items-center justify-center bg-cover bg-center bg-no-repeat sm:col-span-6">
			<div className="flex items-center justify-center gap-1 rounded-md bg-gray-600 bg-opacity-70 px-4 py-2">
				<header className="text-xl text-gray-300">No teams found</header>
			</div>
		</div>
	);
}
