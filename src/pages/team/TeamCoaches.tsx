import { useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ICoach } from '../../../types/Coach.types';
import SmallTableCell from '../../components/table/SmallTableCell';
import TableHeader from '../../components/table/TableHeader';

export default function TeamCoaches() {
	const coaches = useLoaderData() as ICoach[];
	const coachesHistory = useMemo(
		() =>
			coaches.map((coach) => {
				const coachHistory = coach.career.find((career) => career.team.id === 33);
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
		<section className="flex h-[50rem] flex-col justify-between">
			<table className="w-full text-xs">
				<caption className="mb-2 text-left text-lg uppercase">Head Coaches</caption>
				<thead>
					<tr>
						<TableHeader className="px-3 py-1 text-left">Head Coach</TableHeader>
						<TableHeader className="px-3 text-left">Date Joined</TableHeader>
						<TableHeader className="px-3 text-left">Date Left</TableHeader>
						<TableHeader className="px-3 text-left">Duration at Team</TableHeader>
						<TableHeader className="px-3 text-left">Reason Left</TableHeader>
						<TableHeader className="px-3 text-left">League Wins</TableHeader>
						<TableHeader className="px-3 text-left">Cup Wins</TableHeader>
					</tr>
				</thead>
				<tbody>
					{coachesHistory.map((coach) => {
						const startDate = new Date(coach.coachHistory?.start ? coach.coachHistory?.start : 0);
						const endDate = new Date(coach.coachHistory?.end ? coach.coachHistory?.end : 0);
						let duration = 0;
						if (endDate.getTime() === 0) {
							const today = new Date();
							duration = today.getTime() - startDate.getTime();
						} else {
							duration = endDate.getTime() - startDate.getTime();
						}
						const durationInDays = Math.floor(duration / (1000 * 60 * 60 * 24));

						return (
							<tr
								key={coach.coachObject.id}
								className="bg-neutral-700"
							>
								<SmallTableCell className="w-80">{coach.coachObject.name}</SmallTableCell>

								<SmallTableCell>{startDate.toLocaleDateString()}</SmallTableCell>
								<SmallTableCell>{endDate.toLocaleDateString()}</SmallTableCell>
								<SmallTableCell>{durationInDays} days</SmallTableCell>
								<SmallTableCell>-</SmallTableCell>
								<SmallTableCell>0</SmallTableCell>
								<SmallTableCell>0</SmallTableCell>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="grid w-full auto-rows-max grid-cols-12 gap-4 p-8">
				<div className="col-span-1 row-span-full">
					<img
						src="https://media.api-sports.io/football/teams/33.png"
						alt="Manchester United Logo"
					/>
				</div>
				<div className="col-span-2 flex flex-col gap-2 border-b border-neutral-500 leading-loose">
					<header className="text-xl">Oliver Soiskjae</header>
					<p className="text-sm text-neutral-300">Joined: 11/5/2021</p>
					<p className="text-sm text-neutral-300">Left: 7/11/2022</p>
				</div>
				<div className="col-span-3 flex flex-col justify-between gap-2 text-center">
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-neutral-400">League Wins</header>
						<p>0</p>
					</div>
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-neutral-400">Cup Wins</header>
						<p>0</p>
					</div>
				</div>
				<div className="col-span-2 flex flex-col justify-between gap-2 text-center">
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-neutral-400">Promotions</header>
						<p>0</p>
					</div>
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-neutral-400">Relegations</header>
						<p>0</p>
					</div>
				</div>
				<div className="col-span-2 flex flex-col justify-between text-center">
					<p className="text-xs uppercase text-neutral-400">Major League Honors</p>
					<p className="text-sm">None</p>
				</div>
				<div className="col-span-2 flex flex-col justify-between text-center">
					<p className="text-xs uppercase text-neutral-400">Major Cup Honors</p>
					<p className="text-sm">None</p>
				</div>
				<div className="col-span-3 col-start-2 flex flex-col">
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
					<footer className="mt-auto text-xs text-neutral-300">* Data is only valid from 11/5/2021</footer>
				</div>
				<div className="col-span-8 h-64 bg-neutral-700 p-2 text-sm">
					<header className="w-full place-self-start">Career Milestones</header>
					<div className="flex h-full flex-col items-center justify-center">
						<p className="text-neutral-300">No milestones yet</p>
					</div>
				</div>
			</div>
		</section>
	);
}
