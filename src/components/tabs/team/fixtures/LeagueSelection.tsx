import { IFixture } from '../../../../types/Fixture.types';

export default function TeamFixturesLeagueSelection({
	setSelectedLeague,
	leagues,
}: {
	setSelectedLeague: (leagueID: number) => void;
	leagues: IFixture['league'][];
}) {
	return (
		<label htmlFor="league-select">
			<span className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100">Select League</span>
			<select
				name="league-select"
				className="block w-full rounded-md border-gray-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 sm:text-sm"
				onChange={(e) => {
					setSelectedLeague(parseInt(e.target.value, 10));
				}}
			>
				<option value={-1}>None</option>

				{leagues.map((league) => (
					<option
						key={league.id}
						value={league.id}
						className="text-base"
					>
						{league.name}
					</option>
				))}
			</select>
		</label>
	);
}
