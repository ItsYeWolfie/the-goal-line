interface ITableHeaderProps {
	children: React.ReactNode;
	className?: string;
	colSpan?: number;
}

export default function TableHeader({ children, className, colSpan }: ITableHeaderProps) {
	return (
		<th
			className={`font-medium uppercase tracking-wider text-gray-300 ${className}`}
			colSpan={colSpan}
		>
			{children}
		</th>
	);
}

TableHeader.defaultProps = {
	className: '',
	colSpan: 1,
};
