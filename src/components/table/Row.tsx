interface ITableRowProps {
	children: React.ReactNode;
	className?: string;
	even?: boolean;
	onClick?: () => void;
}

export default function TableRow({ children, className, even, onClick }: ITableRowProps) {
	return (
		<tr
			onClick={onClick}
			className={`${className} ${even ? 'bg-gray-300 dark:bg-gray-600' : 'bg-gray-200 dark:bg-gray-700'}`}
		>
			{children}
		</tr>
	);
}

TableRow.defaultProps = {
	className: '',
	even: false,
	onClick: () => {},
};
