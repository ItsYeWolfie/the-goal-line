interface ITableHeadProps {
	children: React.ReactNode;
	className?: string;
}

export default function TableHead({ children, className, ...props }: ITableHeadProps) {
	return (
		<thead
			className={`${className} bg-neutral-200 text-sm dark:bg-neutral-800`}
			{...props}
		>
			{children}
		</thead>
	);
}

TableHead.defaultProps = {
	className: '',
};
