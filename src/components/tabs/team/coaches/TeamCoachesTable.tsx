import { ICoachTeamHistory } from '../../../../../types/Coach.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function TeamCoachesTable({ coachesHistory }: { coachesHistory: ICoachTeamHistory[] }) {
	return (
		<table className="w-full text-xs">
			<caption className="mb-2 text-left text-lg uppercase">Head Coaches</caption>
			<thead>
				<tr>
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

					const durationInDays = Math.floor(duration / (1000 * 3600 * 24));

					return (
						<tr
							key={coach.coachObject.id}
							className="bg-neutral-700"
						>
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
