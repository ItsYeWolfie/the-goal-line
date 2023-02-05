import { useForm } from 'react-hook-form';
import { ITeamsSearch } from '../../../types/General.types';

export default function TeamSearch({ handleSearch }: { handleSearch: (data: ITeamsSearch) => void }) {
	const { handleSubmit, register } = useForm<ITeamsSearch>();

	return (
		<form
			className="space-y-10 divide-y divide-gray-200 px-2 dark:divide-gray-800 lg:px-2"
			onSubmit={handleSubmit(handleSearch)}
		>
			<div>
				<fieldset>
					<label
						htmlFor="name"
						className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
					>
						Team
						<input
							type="text"
							id="name"
							{...register('name')}
							className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
						/>
					</label>
				</fieldset>
			</div>
			<div className="pt-6">
				<fieldset>
					<label
						htmlFor="league"
						className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
					>
						League
						<select
							id="league"
							{...register('league')}
							className="block w-full rounded-md border-gray-300 capitalize shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
						>
							<option value="All">All</option>
							<option value="Premier League">Premier League</option>
						</select>
					</label>
				</fieldset>
			</div>
			<div className="pt-6">
				<fieldset>
					<label
						htmlFor="country"
						className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
					>
						Country
						<select
							id="country"
							{...register('country')}
							className="block w-full rounded-md border-gray-300 capitalize shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
							value="All"
						>
							<option value="All">All</option>
						</select>
					</label>
				</fieldset>
			</div>
			<div className="pt-6">
				<fieldset>
					<label
						htmlFor="season"
						className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
					>
						Season
						<select
							id="season"
							{...register('season')}
							className="block w-full rounded-md border-gray-300 capitalize shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
						>
							<option value="All">All</option>
						</select>
					</label>
				</fieldset>
			</div>
			<button
				className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				type="submit"
			>
				Search
			</button>
		</form>
	);
}
