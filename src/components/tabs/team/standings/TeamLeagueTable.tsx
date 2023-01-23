import React from 'react';
import { ILeagueWithStanding } from '../../../../../types/League.types';
import FormIconArray from '../../../icons/FormIconArray';
import TableCell from '../../../table/TableCell';
import TableHeader from '../../../table/TableHeader';

export default function TeamLeagueTable({ league }: { league: ILeagueWithStanding }) {
	return (
		<table>
			<thead className="bg-neutral-800">
				<tr>
					<TableHeader
						className="px-3 py-1 text-left text-sm"
						colSpan={2}
					>
						<div className="flex items-center gap-2">
							{league.name}
							{league.logo && (
								<img
									src={league.logo}
									alt={`${league.name} logo`}
									className="h-4 w-4"
								/>
							)}
							<span className="text-xs"> - {league.season}</span>
						</div>
					</TableHeader>
				</tr>
			</thead>
			<tbody className="text-xs">
				{league.country !== 'World' && (
					<tr className="bg-neutral-600">
						<TableCell className="w-32">Country</TableCell>
						<TableCell>
							<div className="flex items-center">
								{league.country}
								{league.flag && (
									<img
										src={league.flag}
										alt={`${league.country} flag`}
										className="ml-2 h-4 w-4"
									/>
								)}
							</div>
						</TableCell>
					</tr>
				)}
				{league.standings.map((standing) => (
					<React.Fragment key={standing.team.id}>
						<tr className="bg-neutral-700">
							<TableCell className="w-32">Group</TableCell>
							<TableCell>{standing.group}</TableCell>
						</tr>
						<tr className="bg-neutral-600">
							<TableCell>Rank</TableCell>
							<TableCell>{standing.rank}</TableCell>
						</tr>
						<tr className="bg-neutral-700">
							<TableCell>Status</TableCell>
							<TableCell>{standing.description}</TableCell>
						</tr>
						<tr className="bg-neutral-600">
							<TableCell>Points</TableCell>
							<TableCell>{standing.points}</TableCell>
						</tr>
						<tr className="bg-neutral-700">
							<TableCell>Goals Difference</TableCell>
							<TableCell>{standing.goalsDiff}</TableCell>
						</tr>
						<tr className="bg-neutral-600">
							<TableCell>Form</TableCell>
							<TableCell>
								<FormIconArray array={standing.form.split('')} />
							</TableCell>
						</tr>
					</React.Fragment>
				))}
			</tbody>
		</table>
	);
}
