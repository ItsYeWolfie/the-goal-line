import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPlayerInjury } from '../../../../types/Player.types';
import LogoAndImage from '../../../image/LogoAndImage';
import PaginatedPrevAndNext from '../../../pagination/PrevAndNext';
import TableCell from '../../../table/Cell';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';

export default function TeamInjuriesTable({ injuriesData }: { injuriesData: IPlayerInjury[] }) {
	const [displayedItems, setDisplayedItems] = useState([] as IPlayerInjury[]);
	useMemo(
		() =>
			injuriesData.sort((a, b) => {
				return new Date(b.fixture.date).getTime() - new Date(a.fixture.date).getTime();
			}),
		[injuriesData],
	);

	return (
		<>
			<table className="w-full text-xs">
				<TableHead className="text-left">
					<tr>
						<TableHeader className="px-3 py-1">Date</TableHeader>
						<TableHeader className="px-3 py-1">Player</TableHeader>
						<TableHeader className="px-3 py-1">Type</TableHeader>
						<TableHeader className="hidden px-3 py-1 lg:table-cell">Reason</TableHeader>
						<TableHeader className="hidden px-3 py-1 sm:table-cell">League</TableHeader>
						<TableHeader className="hidden px-3 py-1 lg:table-cell">Season</TableHeader>
					</tr>
				</TableHead>
				<tbody>
					{displayedItems.map((injury, index) => {
						const formattedDate = new Date(injury.fixture.date).toLocaleDateString('en-GB', {
							day: 'numeric',
							month: 'short',
							year: 'numeric',
						});
						return (
							<TableRow
								key={injury.fixture.timestamp + injury.player.name}
								even={index % 2 === 0}
							>
								<TableCell>{formattedDate}</TableCell>
								<TableCell>
									<Link to={`/players/${injury.player.id}`}>
										<LogoAndImage
											src={injury.player.photo}
											alt={injury.player.name}
											name={injury.player.name}
										/>
									</Link>
								</TableCell>

								<TableCell>
									{injury.player.type}
									<div className="mt-1 lg:hidden">Reason: {injury.player.reason}</div>
								</TableCell>
								<TableCell className="hidden lg:table-cell">{injury.player.reason}</TableCell>
								<TableCell className="hidden sm:table-cell">
									<Link to={`/leagues/${injury.league.id}/`}>
										<LogoAndImage
											src={injury.league.logo}
											alt={injury.league.name}
											name={injury.league.name}
										/>
									</Link>
									<div className="mt-1 lg:hidden">
										Season: {injury.league.season}/{injury.league.season + 1}
									</div>
								</TableCell>
								<TableCell className="hidden lg:table-cell">
									{injury.league.season}/{injury.league.season + 1}
								</TableCell>
							</TableRow>
						);
					})}
				</tbody>
			</table>
			<PaginatedPrevAndNext
				items={injuriesData}
				setDisplayedItems={setDisplayedItems}
				splitCount={10}
				className="flex justify-between"
			/>
		</>
	);
}
