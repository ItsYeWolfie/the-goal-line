import { Link } from 'react-router-dom';
import { IFixture } from '../../../../../types/Fixture.types';
import PaginatedPrevAndNext from '../../../../pagination/PrevAndNext';

export default function LeagueFixturesDisplay({
	filteredFixtures,
	displayedItems,
	setDisplayedItems,
	splitCount,
}: {
	filteredFixtures: IFixture[];
	displayedItems: IFixture[];
	setDisplayedItems: (items: IFixture[]) => void;
	splitCount: number;
}) {
	return (
		<div className="flex flex-col gap-y-4 px-2 lg:col-span-2 xl:col-span-3">
			{displayedItems.map((fixture: IFixture, index) => (
				<Link
					to={`/matches/${fixture.fixture.id}/`}
					key={fixture.fixture.id}
					className={`grid grid-cols-12 items-center gap-x-4 py-2 ${
						index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-100 dark:bg-gray-800'
					}`}
				>
					<div className="col-span-1 ml-2 w-max rounded-md bg-sky-800 p-1 text-sm text-white">
						{new Date(fixture.fixture.date).toLocaleTimeString('en-GB', {
							hour: '2-digit',
							minute: '2-digit',
						})}
					</div>
					<Link
						to={`/teams/${fixture.teams.away.id}/`}
						className="col-span-5 flex items-center gap-x-2 justify-self-end text-right sm:col-span-4"
					>
						<div className="text-sm">{fixture.teams.home.name}</div>
						<img
							src={fixture.teams.home.logo}
							alt={fixture.teams.home.name}
							className="h-8 w-8"
						/>
					</Link>
					<Link
						className="col-span-2 rounded-md bg-sky-600 p-1 text-center text-sm md:col-span-1"
						to={`/matches/${fixture.fixture.id}/`}
					>
						{fixture.goals.home} - {fixture.goals.away}
					</Link>
					<Link
						to={`/teams/${fixture.teams.away.id}/`}
						className="col-span-4 flex items-center gap-x-2 justify-self-start"
					>
						<img
							src={fixture.teams.away.logo}
							alt={fixture.teams.away.name}
							className="h-8 w-8"
						/>
						<div className="text-sm">{fixture.teams.away.name}</div>
					</Link>
					<Link
						className="col-span-1 hidden shrink-0 grow-0 justify-self-end rounded-md bg-sky-800 p-1 text-sm text-white sm:block"
						to={`/matches/${fixture.fixture.id}/`}
					>
						{fixture.fixture.status.short}
						{fixture.fixture.status.elapsed && <span className="ml-1">{fixture.fixture.status.elapsed}&apos;</span>}
					</Link>
				</Link>
			))}
			<PaginatedPrevAndNext
				items={filteredFixtures}
				splitCount={splitCount}
				setDisplayedItems={setDisplayedItems}
				className="flex justify-self-center"
			/>
		</div>
	);
}
