interface ITableRowProps {
	children: React.ReactNode;
	className?: string;
	even?: boolean;
}

export default function TableRow({ children, className, even, ...props }: ITableRowProps) {
	return (
		<tr
			className={`${className} ${even ? 'bg-neutral-300 dark:bg-neutral-600' : 'bg-neutral-200 dark:bg-neutral-700'}`}
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
