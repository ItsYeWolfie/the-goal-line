import React from 'react';
import { Link } from 'react-router-dom';
import { ILeagueWithStanding } from '../../../../types/League.types';
import FormIconArray from '../../../icons/FormIconArray';
import TableCell from '../../../table/Cell';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';

export default function TeamLeagueTable({ league }: { league: ILeagueWithStanding }) {
	return (
		<table>
			<TableHead>
				<tr>
					<TableHeader
						className="px-3 py-1 text-left text-sm"
						colSpan={2}
					>
						<Link
							className="flex items-center gap-2"
							to={`/leagues/${league.id}/`}
						>
							{league.name}
							{league.logo && (
								<img
									src={league.logo}
									alt={`${league.name} logo`}
									className="h-4 w-4"
								/>
							)}
							<span className="text-xs"> - {league.season}</span>
						</Link>
					</TableHeader>
				</tr>
			</TableHead>
			<tbody className="text-xs">
				{league.country !== 'World' && (
					<TableRow>
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
					</TableRow>
				)}
				{league.standings.map((standing) => (
					<React.Fragment key={standing.team.id}>
						<TableRow even>
							<TableCell className="w-32">Group</TableCell>
							<TableCell>{standing.group}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Rank</TableCell>
							<TableCell>{standing.rank}</TableCell>
						</TableRow>
						<TableRow even>
							<TableCell>Status</TableCell>
							<TableCell>{standing.description}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Points</TableCell>
							<TableCell>{standing.points}</TableCell>
						</TableRow>
						<TableRow even>
							<TableCell>Goals Difference</TableCell>
							<TableCell>{standing.goalsDiff}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Form</TableCell>
							<TableCell className="text-base">
								<FormIconArray array={standing.form.split('')} />
							</TableCell>
						</TableRow>
					</React.Fragment>
				))}
			</tbody>
		</table>
	);
}
