import { useContext, useEffect } from 'react';
import Countries from '../components/allMatches/Countries';
import DaysTab from '../components/allMatches/DaysTab';
import { GlobalHeaderContext, IGlobalHeader } from '../contexts/GlobalHeader.context';

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
		<div className="-mt-12">
			<div className="container justify-center lg:flex">
				<div className="hidden w-96 lg:relative lg:block lg:w-1/5 lg:pt-4">
					<div className="no-scrollbar relative flex h-[85vh] flex-col overflow-hidden overflow-y-auto rounded-md bg-gray-200 p-2 text-sm dark:bg-gray-800 lg:mr-4">
						<Countries />
					</div>
				</div>
				<div className="no-scrollbar relative mr-4 mt-8 flex w-full flex-col overflow-hidden overflow-y-auto rounded-md bg-gray-200 p-2 text-sm dark:bg-gray-800 md:mt-2 lg:mt-4 lg:h-[85vh] lg:w-2/5">
					<DaysTab />
				</div>
				<div className="hidden h-[85vh] overflow-hidden lg:ml-3 lg:mt-6 lg:flex lg:w-1/4 lg:flex-col">
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
		</div>
	);
}
