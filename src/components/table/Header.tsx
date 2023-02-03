interface ITableHeaderProps {
	children: React.ReactNode;
	className?: string;
	colSpan?: number;
}

export default function TableHeader(props: ITableHeaderProps) {
	return (
		<th
			{...props}
			className={`font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300 ${props.className}`}
			colSpan={props.colSpan}
		>
			{props.children}
		</th>
	);
}

TableHeader.defaultProps = {
	className: '',
	colSpan: 1,
};
