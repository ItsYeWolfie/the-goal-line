import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Countries from '../components/allMatches/Countries';
import DaysTab from '../components/allMatches/DaysTab';

export default function MatchesPage() {
	const [listHidden, setListHidden] = useState(true);

	return (
		<div className="-mt-12">
			<div className="justify-center lg:flex">
				<div className={`absolute z-10 w-full lg:relative lg:block lg:w-1/5 lg:pt-4 ${listHidden ? 'hidden' : ''}`}>
					<div className="no-scrollbar relative flex h-[85vh] flex-col overflow-hidden overflow-y-auto rounded-md bg-gray-200 p-2 text-sm dark:bg-gray-800 lg:mr-4">
						<Countries />
						<div className="mt-2 flex h-12 w-full lg:hidden ">
							<button
								type="button"
								className="my-auto mr-auto cursor-pointer pr-2"
								onClick={() => setListHidden(!listHidden)}
							>
								<FaSearch className="text-[20px] text-gray-900 dark:text-gray-100" />
							</button>
						</div>
					</div>
				</div>
				<div className="no-scrollbar relative mr-4 mt-8 flex h-[85vh] w-full flex-col overflow-hidden overflow-y-auto rounded-md bg-gray-200 p-2 text-sm dark:bg-gray-800 md:mt-2 lg:mt-4 lg:w-1/3">
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
