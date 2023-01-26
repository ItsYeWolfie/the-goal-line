import teamsFilters from '../../../lib/data/teams-filters';

export default function TeamSearch({
	handleChange,
	handleSearch,
}: {
	handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
	handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
	return (
		<form
			className="space-y-10 divide-y divide-gray-200 px-2 dark:divide-gray-800 lg:px-2"
			onSubmit={handleSearch}
		>
			{teamsFilters.map((section, sectionIdx) => (
				<div
					key={section.name}
					className={sectionIdx === 0 ? '' : 'pt-10'}
				>
					<fieldset>
						<label
							htmlFor={section.id}
							className="block text-sm font-medium capitalize text-gray-700 dark:text-gray-300"
						>
							{section.name}
							{section.type === 'select' ? (
								<select
									id={section.id}
									name={section.name}
									className="block w-full rounded-md border-gray-300 capitalize shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
									onChange={handleChange}
								>
									<option value="All">All</option>
									{section.options &&
										section.options.map((option) => (
											<option
												key={option.id}
												value={option.value}
											>
												{option.name}
											</option>
										))}
								</select>
							) : (
								<input
									type="text"
									id={section.id}
									name={section.name}
									className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-500 dark:bg-gray-700 sm:text-sm"
									onChange={handleChange}
								/>
							)}
						</label>
					</fieldset>
				</div>
			))}
			<button
				className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				type="submit"
			>
				Search
			</button>
		</form>
	);
}
