import { Dispatch, SetStateAction } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ICoachTeamHistory } from '../../../../types/Coach.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function TeamCoachesTable({
	coachesHistory,
	activeCoach,
	setActiveCoach,
}: {
	coachesHistory: ICoachTeamHistory[];
	activeCoach: ICoachTeamHistory;
	setActiveCoach: Dispatch<SetStateAction<ICoachTeamHistory>>;
}) {
	return (
		<table className="w-full text-xs">
			<caption className="mb-2 text-left text-lg uppercase">Head Coaches</caption>
			<thead>
				<tr>
					<TableHeader className="px-3 py-1 text-left">
						<span className="sr-only">Set Active Coach Column</span>
					</TableHeader>
					<TableHeader className="px-3 py-1 text-left">Head Coach</TableHeader>
					<TableHeader className="px-3 text-left">Date Joined</TableHeader>
					<TableHeader className="px-3 text-left">Date Left</TableHeader>
					<TableHeader className="hidden px-3 text-left md:table-cell">Duration</TableHeader>
					<TableHeader className="hidden px-3 text-left sm:table-cell">Reason Left</TableHeader>
					<TableHeader className="hidden px-3 text-left md:table-cell">League Wins</TableHeader>
					<TableHeader className="hidden px-3 text-left md:table-cell">Cup Wins</TableHeader>
				</tr>
			</thead>
			<tbody>
				{coachesHistory.map((coach, index) => {
					const startDate = new Date(coach.coachHistory?.start ? coach.coachHistory?.start : 0);
					const endDate = new Date(coach.coachHistory?.end ? coach.coachHistory?.end : 0);
					let duration = 0;

					if (endDate.getTime() === 0) {
						const today = new Date();
						duration = today.getTime() - startDate.getTime();
					} else {
						duration = endDate.getTime() - startDate.getTime();
					}

					const durationInDays = Math.floor(duration / (1000 * 3600 * 24));

					return (
						<tr
							key={coach.coachObject.id}
							className={`${index % 2 === 0 ? 'bg-neutral-700' : 'bg-neutral-800'} hover:bg-neutral-700`}
							onClick={() => setActiveCoach(coach)}
						>
							<SmallTableCell className="max-w-[1rem]">
								<button
									className="h-6 w-6 rounded-full text-neutral-300 hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-800"
									type="button"
								>
									<span className="sr-only">Set Active Coach</span>
									{activeCoach.coachObject.id === coach.coachObject.id ? (
										<AiOutlineCheckCircle className="h-6 w-6 text-green-500">
											<span className="sr-only">Active Coach</span>
										</AiOutlineCheckCircle>
									) : (
										<AiOutlineCheckCircle className="h-6 w-6 text-neutral-300">
											<span className="sr-only">Set Active Coach</span>
										</AiOutlineCheckCircle>
									)}
								</button>
							</SmallTableCell>
							<SmallTableCell className="">
								<p>{coach.coachObject.name}</p>
								<div className="mt-1 md:hidden">
									<div className="flex flex-row gap-2">
										<div className="flex flex-col">
											<span className="text-xs">League Wins</span>
											<span className="text-xs">Cup Wins</span>
										</div>
										<div className="flex flex-col">
											<span className="text-xs">0</span>
											<span className="text-xs">0</span>
										</div>
									</div>
								</div>
							</SmallTableCell>

							<SmallTableCell>{startDate.toLocaleDateString()}</SmallTableCell>
							<SmallTableCell>
								{endDate.getTime() === 0 ? '-' : endDate.toLocaleDateString()}
								<span className="ml-2 md:hidden"> ({durationInDays} days)</span>
							</SmallTableCell>
							<SmallTableCell className="hidden md:table-cell">{durationInDays} days</SmallTableCell>
							<SmallTableCell className="hidden sm:table-cell">-</SmallTableCell>
							<SmallTableCell className="hidden md:table-cell">0</SmallTableCell>
							<SmallTableCell className="hidden md:table-cell">0</SmallTableCell>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
