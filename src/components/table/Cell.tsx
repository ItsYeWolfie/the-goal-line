interface ITableCellProps {
	children: React.ReactNode;
	className?: string;
}

export default function TableCell({ children, className }: ITableCellProps) {
	return <td className={`px-3 py-3.5 ${className}`}>{children}</td>;
}

TableCell.defaultProps = {
	className: '',
};
