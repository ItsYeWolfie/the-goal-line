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
				className={`${width} animate-pulse bg-gray-200 text-sm dark:bg-gray-800`}
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
