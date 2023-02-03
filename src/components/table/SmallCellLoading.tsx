import SmallTableCell from './SmallCell';

interface ISmallTableCellLoadingProps {
	colSpan: number;
}
export default function SmallTableCellLoading({ colSpan }: ISmallTableCellLoadingProps) {
	return (
		<SmallTableCell colSpan={colSpan}>
			<div className="flex h-6 w-full animate-pulse items-center justify-center rounded-lg bg-gray-400 dark:bg-gray-600" />
		</SmallTableCell>
	);
}
