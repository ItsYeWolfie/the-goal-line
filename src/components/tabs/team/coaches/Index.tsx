import { useMemo, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ICoach, ICoachTeamHistory } from '../../../../types/Coach.types';
import { ITeamAndVenue } from '../../../../types/Team.types';
import TeamCoachesTable from './Table';

export default function TeamCoaches({ coaches }: { coaches: ICoach[] }) {
	const {
		team: { id },
	} = useOutletContext<ITeamAndVenue>();
	const coachesHistory = useMemo(
		() =>
			coaches.map((coach) => {
				const coachHistory = coach.career.find((career) => career.team.id === id)!;
				const coachObject = {
					id: coach.id,
					name: coach.name,
					firstName: coach.firstname,
					lastName: coach.lastname,
					age: coach.age,
					photo: coach.photo,
					career: coach.career.find((career) => career.team.id === id),
				};
				return { coachObject, coachHistory };
			}),
		[coaches, id],
	);

	const [activeCoach, setActiveCoach] = useState<ICoachTeamHistory>(coachesHistory[0]);
	return (
		<section className="flex flex-col justify-between md:h-[50rem]">
			<TeamCoachesTable
				coachesHistory={coachesHistory}
				setActiveCoach={setActiveCoach}
				activeCoach={activeCoach}
			/>
			<div className="grid w-full auto-rows-max grid-cols-12 gap-y-8 gap-x-4 px-2 py-4 sm:p-8">
				<div className="col-span-4 row-span-full md:col-span-2 xl:col-span-1">
					<img
						src={activeCoach.coachObject.photo}
						alt={activeCoach.coachObject.name}
						className="h-full w-full rounded-full object-cover"
					/>
				</div>
				<div className="col-span-8 flex flex-col gap-2 leading-loose sm:col-span-4 lg:col-span-3 xl:col-span-3 xl:border-b xl:border-gray-500">
					<Link
						className="text-xl"
						to={`/coach/${activeCoach.coachObject.id}/`}
					>
						{activeCoach.coachObject.firstName} {activeCoach.coachObject.lastName}
					</Link>
					<p className="text-sm text-gray-700 dark:text-gray-300">Joined: {activeCoach.coachHistory.start}</p>
					<p className="text-sm text-gray-700 dark:text-gray-300">Left: {activeCoach.coachHistory.end || '-'}</p>
				</div>
				<div className="col-span-6 flex flex-col justify-between gap-2 text-center sm:col-span-2 lg:col-span-3 xl:col-span-2">
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-gray-600 dark:text-gray-400">League Wins</header>
						<p>0</p>
					</div>
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-gray-600 dark:text-gray-400">Cup Wins</header>
						<p>0</p>
					</div>
				</div>
				<div className="col-span-6 flex flex-col justify-between gap-2 text-center sm:col-span-2 lg:col-span-3 xl:col-span-2">
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-gray-600 dark:text-gray-400">Promotions</header>
						<p>0</p>
					</div>
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-gray-600 dark:text-gray-400">Relegations</header>
						<p>0</p>
					</div>
				</div>
				<div className="col-span-6 flex flex-col justify-between text-center sm:col-span-3 sm:col-start-7 md:col-span-3 md:col-start-6 xl:col-span-2">
					<p className="text-xs uppercase text-gray-600 dark:text-gray-400">Major League Honors</p>
					<p className="text-sm">None</p>
				</div>
				<div className="col-span-6 flex flex-col justify-between text-center sm:col-span-3 md:col-span-3 xl:col-span-2">
					<p className="text-xs uppercase text-gray-600 dark:text-gray-400">Major Cup Honors</p>
					<p className="text-sm">None</p>
				</div>
				<div className="col-span-full flex flex-col sm:col-span-3 xl:col-start-2">
					<header className="mb-2 text-xs uppercase tracking-wider">Overall Head Coach Comparison</header>
					<div className="flex flex-col justify-between gap-2">
						<div className="flex items-center">
							<span className="mr-2 flex h-5 w-5 items-center justify-center  rounded-full bg-green-500 text-center text-xs">
								0
							</span>
							<p className="text-xs">Games Won</p>
						</div>
						<div className="flex items-center">
							<span className="mr-2 flex h-5 w-5 items-center justify-center  rounded-full bg-red-500 text-center text-xs">
								0
							</span>
							<p className="text-xs">Games Lost</p>
						</div>
						<div className="flex items-center">
							<span className="mr-2 flex h-5 w-5 items-center justify-center  rounded-full bg-yellow-500 text-center text-xs">
								0
							</span>
							<p className="text-xs">Games Drawn</p>
						</div>
					</div>
					<footer className="mt-4 text-xs text-gray-700 dark:text-gray-300 sm:mt-auto">
						* Data is only valid from {activeCoach.coachHistory.start}
					</footer>
				</div>
				<div className="col-span-full h-64 bg-gray-300 p-2 text-sm dark:bg-gray-700 sm:col-span-8">
					<header className="w-full place-self-start text-xs uppercase">Career Milestones</header>
					<div className="flex h-full flex-col items-center justify-center">
						<p className="text-gray-700 dark:text-gray-300">No milestones yet</p>
					</div>
				</div>
			</div>
		</section>
	);
}
