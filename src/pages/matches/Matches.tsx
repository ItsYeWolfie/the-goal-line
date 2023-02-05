import { useContext, useEffect } from 'react';
import Countries from '../../components/all-matches/Countries';
import DaysTab from '../../components/all-matches/DaysTab';
import { GlobalHeaderContext, IGlobalHeader } from '../../contexts/GlobalHeader.context';

export default function MatchesPage() {
	const { setBreadcrumbs } = useContext<IGlobalHeader>(GlobalHeaderContext);

	useEffect(() => {
		setBreadcrumbs([
			{
				name: 'Matches',
				href: '/matches',
			},
		]);

		return () => {
			setBreadcrumbs([]);
		};
	}, [setBreadcrumbs]);
	return (
		<div className="gap-4 lg:flex lg:justify-center">
			<div className="hidden w-96 lg:relative lg:block lg:w-1/5">
				<div className="no-scrollbar relative flex max-h-[75vh] flex-col overflow-hidden overflow-y-auto rounded-md bg-gray-200 px-2 text-sm dark:bg-gray-800">
					<Countries />
				</div>
			</div>
			<div className="no-scrollbar flex max-h-[78vh] w-full flex-col overflow-hidden overflow-y-auto rounded-md bg-gray-200 text-sm dark:bg-gray-800 md:max-h-[83vh] lg:max-h-[75vh] lg:w-2/5">
				<DaysTab />
			</div>
			<div className="hidden max-h-[75vh] overflow-hidden lg:flex lg:w-1/4 lg:flex-col">
				<img
					className="pb-4"
					src="/images/ads2.jpg"
					alt=""
				/>
				<img
					className="pb-4"
					src="/images/reklam.png"
					alt=""
				/>
				<img
					className="pb-4"
					src="/images/ads3.jpg"
					alt=""
				/>
			</div>
		</div>
	);
}
