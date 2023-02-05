interface ISelectLoadingProps {
	title?: string;
	width?: string;
}
export default function SelectLoading({ title, width }: ISelectLoadingProps) {
	return (
		<label htmlFor="league-select">
			{title && <span className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100">{title}</span>}
			<select
				name="league-select"
				className={`${width} block animate-pulse rounded-md border-gray-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 sm:text-sm`}
			>
				<option value={-1}>Loading...</option>
			</select>
		</label>
	);
}

SelectLoading.defaultProps = {
	title: null,
	width: 'w-56',
};
