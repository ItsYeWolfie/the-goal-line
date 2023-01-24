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
			<span className="mb-1 block text-sm font-medium text-neutral-900 dark:text-neutral-100">Select League</span>
			<select
				name="league-select"
				className="bg-neutral-200 dark:bg-neutral-800"
				onChange={(e) => {
					setSelectedLeague(parseInt(e.target.value, 10));
				}}
			>
				<option value={-1}>None</option>

				{leagues.map((league) => (
					<option
						key={league.id}
						value={league.id}
					>
						{league.name}
					</option>
				))}
			</select>
		</label>
	);
}
