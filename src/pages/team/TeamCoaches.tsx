import { useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ICoach } from '../../../types/Coach.types';
import TeamCoachesTable from '../../components/tabs/team/coaches/TeamCoachesTable';

export default function TeamCoaches() {
	const coaches = useLoaderData() as ICoach[];
	const coachesHistory = useMemo(
		() =>
			coaches.map((coach) => {
				const coachHistory = coach.career.find((career) => career.team.id === 33)!;
				const coachObject = {
					name: coach.name,
					id: coach.id,
					age: coach.age,
				};
				return { coachObject, coachHistory };
			}),
		[coaches],
	);

	return (
		<section className="flex flex-col justify-between sm:h-[50rem]">
			<TeamCoachesTable coachesHistory={coachesHistory} />
			<div className="grid w-full auto-rows-max grid-cols-12 gap-y-8 gap-x-4 p-8">
				<div className="col-span-4 row-span-full md:col-span-2 xl:col-span-1">
					<img
						src="https://media.api-sports.io/football/teams/33.png"
						alt="Manchester United Logo"
					/>
				</div>
				<div className="col-span-8 flex flex-col gap-2 leading-loose sm:col-span-4 lg:col-span-3 xl:col-span-3 xl:border-b xl:border-neutral-500">
					<header className="text-xl">Oliver Soiskjae</header>
					<p className="text-sm text-neutral-300">Joined: 11/5/2021</p>
					<p className="text-sm text-neutral-300">Left: 7/11/2022</p>
				</div>
				<div className="col-span-6 flex flex-col justify-between gap-2 text-center sm:col-span-2 lg:col-span-3 xl:col-span-2">
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-neutral-400">League Wins</header>
						<p>0</p>
					</div>
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-neutral-400">Cup Wins</header>
						<p>0</p>
					</div>
				</div>
				<div className="col-span-6 flex flex-col justify-between gap-2 text-center sm:col-span-2 lg:col-span-3 xl:col-span-2">
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-neutral-400">Promotions</header>
						<p>0</p>
					</div>
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-neutral-400">Relegations</header>
						<p>0</p>
					</div>
				</div>
				<div className="col-span-6 flex flex-col justify-between text-center sm:col-span-3 sm:col-start-6 md:col-span-3 md:col-start-6 xl:col-span-2">
					<p className="text-xs uppercase text-neutral-400">Major League Honors</p>
					<p className="text-sm">None</p>
				</div>
				<div className="col-span-6 flex flex-col justify-between text-center sm:col-span-3 md:col-span-3 xl:col-span-2">
					<p className="text-xs uppercase text-neutral-400">Major Cup Honors</p>
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
					<footer className="mt-4 text-xs text-neutral-300 sm:mt-auto">* Data is only valid from 11/5/2021</footer>
				</div>
				<div className="col-span-full h-64 bg-neutral-700 p-2 text-sm sm:col-span-8">
					<header className="w-full place-self-start text-xs uppercase">Career Milestones</header>
					<div className="flex h-full flex-col items-center justify-center">
						<p className="text-neutral-300">No milestones yet</p>
					</div>
				</div>
			</div>
		</section>
	);
}
