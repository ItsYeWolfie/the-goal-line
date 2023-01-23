interface ITableCellProps {
	children: React.ReactNode;
	className?: string;
	colSpan?: number;
}

export default function SmallTableCell({ children, className, colSpan }: ITableCellProps) {
	return (
		<td
			className={`py-2 px-3 ${className}`}
			colSpan={colSpan}
		>
			{children}
		</td>
	);
}

SmallTableCell.defaultProps = {
	className: '',
	colSpan: 1,
};
