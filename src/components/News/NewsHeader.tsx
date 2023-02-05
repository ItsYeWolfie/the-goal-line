interface NewsHeaderProps {
	activeCategory: string | null;
	dataTofilter: Array<string | null>;
	handleClick: (index: number) => void;
}

export default function NewsHeader({ activeCategory, dataTofilter, handleClick }: NewsHeaderProps) {
	return (
		<div className="flex items-center gap-8  border-gray-500">
			{['All News', 'Champions', 'Transfers'].map((item, index) => (
				<button
					type="button"
					key={item}
					onClick={() => handleClick(index)}
					className={`${
						activeCategory === dataTofilter[index]
							? 'border-b-[4px] border-violet-600 text-violet-600 dark:border-yellow-400 dark:text-yellow-400  '
							: ''
					} h-full cursor-pointer text-gray-700 dark:text-gray-200 md:text-lg`}
				>
					{item}
				</button>
			))}
		</div>
	);
}
