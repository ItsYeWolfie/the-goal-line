import { useForm } from 'react-hook-form';
import { ITeamBasic } from '../../../../../types/Team.types';

import { ILeagueFixturesSearchForm } from '../../../../../types/General.types';

export default function LeagueFixturesSearch({
	fixtureTeams,
	fixtureDates,
	fixtureReferees,
	handleSearch,
}: {
	fixtureTeams: ITeamBasic[];
	fixtureDates: string[];
	fixtureReferees: string[];
	handleSearch: (data: ILeagueFixturesSearchForm) => void;
}) {
	const { register, handleSubmit } = useForm<ILeagueFixturesSearchForm>();
	return (
		<form
			className="space-y-10 divide-y divide-gray-200 px-2 dark:divide-gray-800 lg:px-2"
			onSubmit={handleSubmit(handleSearch)}
		>
			<label
				htmlFor="id"
				className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
			>
				Team
				<select
					defaultValue={-1}
					id="team"
					className="block w-full rounded-md border-gray-300 capitalize shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
					{...register('teamId')}
				>
					<option value={-1}>All</option>
					{fixtureTeams.map((team) => (
						<option
							key={team.id}
							value={Number(team.id)}
						>
							{team.name}
						</option>
					))}
				</select>
			</label>
			<label
				htmlFor="dates"
				className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
			>
				Date
				<select
					defaultValue="All"
					id="dates"
					className="block w-full rounded-md border-gray-300 capitalize shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
					{...register('date')}
				>
					<option value="All">All</option>
					{fixtureDates.map((date) => (
						<option
							key={date}
							value={date}
							className="text-base"
						>
							{date}
						</option>
					))}
				</select>
			</label>
			<label
				htmlFor="referees"
				className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
			>
				Referee
				<select
					defaultValue="All"
					id="referees"
					className="block w-full rounded-md border-gray-300 capitalize shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
					{...register('referee')}
				>
					<option value="All">All</option>
					{fixtureReferees.map((referee) => (
						<option
							key={referee}
							value={referee}
						>
							{referee}
						</option>
					))}
				</select>
			</label>
			<label
				htmlFor="status"
				className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
			>
				Status
				<select
					defaultValue="All"
					id="status"
					className="block w-full rounded-md border-gray-300 capitalize shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
					{...register('status')}
				>
					<option value="All">All</option>
					<option value="FT">Full Time</option>
					<option value="NS">Not Started</option>
					<option value="PST">Postponed</option>
				</select>
			</label>
			<button
				className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				type="submit"
			>
				Search
			</button>
		</form>
	);
}
