import { useMemo, useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { IPlayerWithStatistics } from '../../../types/Player.types';
import TableHead from '../../../components/table/TableHead';
import TinyTableCell from '../../../components/table/TinyTableCell';
import fetchData from '../../../lib/helpers/Fetch';
import TableRow from '../../../components/table/TableRow';
import TableHeader from '../../../components/table/TableHeader';

export default function LeaguePlayerStatistics() {
	const [data, setData] = useState<IPlayerWithStatistics[]>([]);

	useEffect(() => {
		fetchData<IPlayerWithStatistics[]>('https://api.npoint.io/31ed8262a154dcc284a2').then((_data) => {
			setData(_data);
		});
	}, []);

	const columns = useMemo(
		() => [
			{
				Header: 'Player',
				accessor: 'player.name',
				className: 'text-left pl-3',
			},
			{
				Header: 'Team',
				accessor: 'statistics[0].team.name',
				className: 'text-left pl-3',
			},
			{
				Header: 'Position',
				accessor: 'statistics[0].games.position',
				className: 'text-left pl-3',
			},
			{
				Header: 'Appearances',
				accessor: 'statistics[0].games.appearences',
				cellClassName: 'text-center',
			},
			{
				Header: 'Goals',
				accessor: 'statistics[0].goals.total',
				cellClassName: 'text-center',
			},
			{
				Header: 'Assists',
				accessor: 'statistics[0].goals.assists',
				cellClassName: 'text-center',
			},
			{
				Header: 'Yellow Cards',
				accessor: 'statistics[0].cards.yellow',
				cellClassName: 'text-center',
			},
			{
				Header: 'Red Cards',
				accessor: 'statistics[0].cards.red',
				cellClassName: 'text-center',
			},
		],
		[],
	);

	const dataMemo = useMemo(() => [...data], [data]);

	const tableInstance = useTable({ columns, data: dataMemo }, useSortBy);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

	return (
		<table
			className="w-full"
			{...getTableProps()}
		>
			<TableHead className="text-xs">
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<TableHeader
								{...column.getHeaderProps(column.getSortByToggleProps(), {})}
								className={column.className}
							>
								{column.render('Header')}
								{column.isSorted ? (
									column.isSortedDesc ? (
										<ArrowUpIcon className="inline-block h-4 w-4" />
									) : (
										<ArrowDownIcon className="inline-block h-4 w-4" />
									)
								) : (
									''
								)}
							</TableHeader>
						))}
					</tr>
				))}
			</TableHead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, index) => {
					prepareRow(row);
					return (
						<TableRow
							{...row.getRowProps()}
							even={index % 2 === 0}
						>
							{row.cells.map((cell) => {
								return (
									<TinyTableCell
										className={cell.column.cellClassName}
										{...cell.getCellProps()}
									>
										{cell.value ? cell.render('Cell') : '-'}
									</TinyTableCell>
								);
							})}
						</TableRow>
					);
				})}
			</tbody>
		</table>
	);
}
