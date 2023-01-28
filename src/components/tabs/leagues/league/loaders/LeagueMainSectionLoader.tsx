import { useContext, useEffect } from 'react';
import { GlobalHeaderContext } from '../../../../../contexts/GlobalHeader.context';

export default function MainLeagueSectionLoader() {
	const { setBreadcrumbs } = useContext(GlobalHeaderContext);

	useEffect(() => {
		setBreadcrumbs([
			{
				name: 'Leagues',
				href: `/leagues/`,
			},
		]);

		return () => {
			setBreadcrumbs([]);
		};
	}, [setBreadcrumbs]);

	return (
		<header className="flex flex-col gap-8">
			<div className="flex items-center">
				<div className="mr-2 h-8 w-8 animate-pulse rounded-full bg-gray-600 object-cover" />
				<div className="h-4 w-16 animate-pulse rounded bg-gray-600 text-sm uppercase" />
			</div>
			<div className="flex gap-4">
				<div className="mr-2 h-24 w-24 animate-pulse rounded-md bg-white object-cover" />

				<div className="flex flex-col items-start justify-evenly">
					<div className="h-6 w-32 animate-pulse rounded bg-gray-600 text-xl text-white" />
					<div className="h-4 w-24 animate-pulse border-none bg-gray-600 text-xs" />
				</div>
			</div>
		</header>
	);
}
