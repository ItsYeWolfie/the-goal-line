interface ITableRowProps {
	children: React.ReactNode;
	className?: string;
	even?: boolean;
}

export default function TableRow({ children, className, even, ...props }: ITableRowProps) {
	return (
		<tr
			className={`${className} ${even ? 'bg-gray-300 dark:bg-gray-600' : 'bg-gray-200 dark:bg-gray-700'}`}
			{...props}
		>
			{children}
		</tr>
	);
}

TableRow.defaultProps = {
	className: '',
	even: false,
};
