import { Dispatch, SetStateAction } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ICoachTeamHistory } from '../../../../types/Coach.types';
import SmallTableCell from '../../../table/SmallCell';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';

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
			<TableHead className="text-xs">
				<tr>
					<TableHeader className="hidden px-3 py-1 text-left sm:table-cell">
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
			</TableHead>
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
						<TableRow
							key={coach.coachObject.id}
							even={index % 2 === 0}
							className={`transition-all duration-300 hover:bg-green-300 dark:hover:bg-green-500 ${
								activeCoach.coachObject.id === coach.coachObject.id
									? 'bg-green-500 bg-opacity-60 dark:bg-green-800'
									: ''
							}`}
							onClick={() => setActiveCoach(coach)}
						>
							<SmallTableCell className="hidden max-w-[1rem] sm:table-cell">
								<button
									className="h-6 w-6 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
									type="button"
								>
									<span className="sr-only">Set Active Coach</span>
									{activeCoach.coachObject.id === coach.coachObject.id ? (
										<AiOutlineCheckCircle className="h-6 w-6 text-green-500">
											<span className="sr-only">Active Coach</span>
										</AiOutlineCheckCircle>
									) : (
										<AiOutlineCheckCircle className="h-6 w-6 text-gray-700 dark:text-gray-300">
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
								<p className="mt-1 md:hidden"> ({durationInDays} days)</p>
							</SmallTableCell>
							<SmallTableCell className="hidden md:table-cell">{durationInDays} days</SmallTableCell>
							<SmallTableCell className="hidden sm:table-cell">-</SmallTableCell>
							<SmallTableCell className="hidden md:table-cell">0</SmallTableCell>
							<SmallTableCell className="hidden md:table-cell">0</SmallTableCell>
						</TableRow>
					);
				})}
			</tbody>
		</table>
	);
}
