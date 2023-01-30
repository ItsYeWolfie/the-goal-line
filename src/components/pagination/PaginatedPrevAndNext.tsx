import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';

export default function PaginatedPrevAndNext({
	className,
	items,
	setDisplayedItems,
	splitCount,
}: {
	className?: string;
	items: any[];
	setDisplayedItems: (items: any[]) => void;
	splitCount: number;
}) {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [displayedPages, setDisplayedPages] = useState<number[]>([]);

	const handlePageChange = (page: number) => {
		if (page < 1 || page > totalPages) return;
		setCurrentPage(page);
		setDisplayedItems(items.slice((page - 1) * splitCount, page * splitCount));

		if (page <= 3) {
			const pages = Array.from({ length: 5 }, (_, i) => {
				const pageNumber: number = i + 1;
				return pageNumber > 0 && pageNumber <= totalPages ? pageNumber : null;
			}).filter((_page) => _page !== null) as number[];
			setDisplayedPages(pages);
		} else if (page >= totalPages - 2) {
			setDisplayedPages([totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
		} else {
			setDisplayedPages([page - 2, page - 1, page, page + 1, page + 2]);
		}
	};

	useEffect(() => {
		setDisplayedItems(items.slice(0, splitCount));
		setDisplayedPages(
			Array.from({ length: 5 }, (_, i) => {
				const pageNumber = i + 1;
				return pageNumber > 0 && pageNumber <= totalPages ? pageNumber : null;
			}).filter((page) => page !== null) as number[],
		);
	}, [items, splitCount, setDisplayedItems, totalPages]);

	useEffect(() => {
		setTotalPages(Math.ceil(items.length / splitCount));
	}, [items, splitCount]);

	if (items.length <= splitCount) {
		return null;
	}

	return (
		<nav className={className}>
			<div className="-mt-px flex w-0 flex-1">
				<button
					className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1  text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:text-gray-300"
					type="button"
					onClick={() => handlePageChange(currentPage - 1)}
				>
					<ArrowLongLeftIcon
						className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-600"
						aria-hidden="true"
					/>
					Previous
				</button>
			</div>
			<div className="hidden md:-mt-px md:flex">
				{totalPages > 5 && currentPage > 4 && (
					<>
						<button
							type="button"
							className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:text-gray-300"
							onClick={() => handlePageChange(1)}
						>
							1
						</button>
						<span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 dark:text-gray-300">
							...
						</span>
					</>
				)}
				{displayedPages.map((page) => (
					<button
						key={page}
						type="button"
						className={`${
							page === currentPage
								? 'border-indigo-500 text-indigo-600'
								: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:text-gray-300'
						} inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium`}
						onClick={() => handlePageChange(page)}
					>
						{page}
					</button>
				))}
				{Math.max(...displayedPages) < totalPages - 1 && (
					<span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 dark:text-gray-300">
						...
					</span>
				)}
				{totalPages > splitCount && currentPage <= totalPages - 3 && (
					<button
						type="button"
						className={`${
							totalPages === currentPage
								? 'border-indigo-500 text-indigo-600'
								: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:text-gray-300'
						} inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium`}
						onClick={() => handlePageChange(totalPages)}
					>
						{totalPages}
					</button>
				)}
			</div>
			<div className="-mt-px flex w-0 flex-1 justify-end">
				<button
					type="button"
					className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:text-gray-300"
					onClick={() => handlePageChange(currentPage + 1)}
				>
					Next
					<ArrowLongRightIcon
						className="ml-3 h-5 w-5 text-gray-400"
						aria-hidden="true"
					/>
				</button>
			</div>
		</nav>
	);
}

PaginatedPrevAndNext.defaultProps = {
	className: '',
};
