interface ITableCellProps {
	children: React.ReactNode;
	className?: string;
	colSpan?: number;
	last?: boolean;
}

export default function TinyTableCell(props: ITableCellProps) {
	return (
		<td
			{...props}
			className={`py-1 pl-3${props.last ? ' pr-3' : ''} ${props.className}`}
			colSpan={props.colSpan}
		>
			{props.children}
		</td>
	);
}

TinyTableCell.defaultProps = {
	className: '',
	colSpan: 1,
	last: false,
};
