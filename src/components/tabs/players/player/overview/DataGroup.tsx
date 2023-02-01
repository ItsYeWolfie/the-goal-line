import { ReactNode } from 'react';

export function PlayerDataRow({
	title,
	paragraph,
	even,
}: {
	title: string;
	paragraph: string | ReactNode;
	even?: boolean;
}) {
	return (
		<div className={`flex justify-between text-sm${even ? ' bg-gray-200 dark:bg-gray-700' : ''} gap-2 py-1 px-2`}>
			<p className="capitalize text-gray-600 dark:text-gray-400">{title}</p>
			<p className="text-right">{paragraph}</p>
		</div>
	);
}
PlayerDataRow.defaultProps = {
	even: false,
};

export function DataGroup({ object, title, className }: { object: any; title: string; className: string }) {
	return (
		<div className={`${className}`}>
			<header className="text-sm font-medium uppercase text-gray-700 dark:text-gray-300">{title}</header>
			{Object.entries(object).map(([key, value], index) => (
				<PlayerDataRow
					key={key}
					title={key}
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					paragraph={value || '-'}
					even={index % 2 === 0}
				/>
			))}
		</div>
	);
}
