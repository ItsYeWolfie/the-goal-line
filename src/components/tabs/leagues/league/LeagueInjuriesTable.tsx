import { useState, useEffect } from 'react';
import TableHead from '../../../table/TableHead';
import TableHeader from '../../../table/TableHeader';
import fetchData from '../../../../lib/helpers/Fetch';
import { ITeamBasic } from '../../../../types/Team.types';
import TableRow from '../../../table/TableRow';
import SmallTableCell from '../../../table/SmallTableCell';

export default function LeagueInjuriesTable() {
	const [teams, setTeams] = useState<ITeamBasic[]>([]);
	const [teamInjuries, setTeamInjuries] = useState<{ [key: number]: number }>();

	useEffect(() => {
		fetchData<ITeamBasic[]>(`https://api.npoint.io/674a4c255c7bd8dd8245`).then((data) => {
			const uniqueTeams = data.filter((team, index, self) => {
				return index === self.findIndex((t) => t.id === team.id);
			});
			const injuriesPerTeamCount = data.reduce((acc, team) => {
				acc[team.id] = (acc[team.id] || 0) + 1;
				return acc;
			}, {});
			setTeams(uniqueTeams);
			setTeamInjuries(injuriesPerTeamCount);
		});
	}, []);

	return (
		<div className="overflow-auto">
			<table className="w-full text-xs">
				<TableHead className="sticky top-0">
					<tr>
						<TableHeader className="pl-3 text-left">Team</TableHeader>
						<TableHeader className="pr-3 text-right">Injuries</TableHeader>
					</tr>
				</TableHead>
				<tbody>
					{teams
						.sort((a, b) => (teamInjuries && teamInjuries[a.id] > teamInjuries[b.id] ? -1 : 1))
						.map((team, index) => (
							<TableRow
								key={team.id}
								even={index % 2 === 0}
							>
								<SmallTableCell>
									<img
										src={team.logo}
										alt={team.name}
										className="mr-2 inline-block h-4 w-4"
									/>
									{team.name}
								</SmallTableCell>
								<SmallTableCell className="text-right">{teamInjuries && teamInjuries[team.id]}</SmallTableCell>
							</TableRow>
						))}
				</tbody>
			</table>
		</div>
	);
}
