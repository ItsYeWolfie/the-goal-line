interface ITableCellProps {
	children: React.ReactNode;
	className?: string;
}

export default function SmallTableCell({
	children,
	className,
}: ITableCellProps) {
	return <td className={`py-2 px-3 ${className}`}>{children}</td>;
}

SmallTableCell.defaultProps = {
	className: '',
};
