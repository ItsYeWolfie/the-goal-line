interface ITableCellProps {
	children: React.ReactNode;
	className?: string;
	colSpan?: number;
	last?: boolean;
}

export default function TinyTableCell({ children, className, colSpan, last }: ITableCellProps) {
	return (
		<td
			className={`py-1 pl-3${last ? ' pr-3' : ''} ${className}`}
			colSpan={colSpan}
		>
			{children}
		</td>
	);
}

TinyTableCell.defaultProps = {
	className: '',
	colSpan: 1,
	last: false,
};
