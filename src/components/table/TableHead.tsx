interface ITableHeadProps {
	children: React.ReactNode;
	className?: string;
}

export default function TableHead({ children, className }: ITableHeadProps) {
	return <thead className={`${className} bg-gray-200 text-sm dark:bg-gray-800`}>{children}</thead>;
}

TableHead.defaultProps = {
	className: '',
};
