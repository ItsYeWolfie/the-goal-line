// import Country from '../components/allMatches/Country';
// import DaysTab from '../components/allMatches/DaysTab';
import TodayMatches from '../components/allMatches/TodayMatches';

export default function MatchesPage() {
	return (
		<div className="bg-gray-900">
			<div className="justify-center lg:flex">
				<div
					className="absolute z-10 hidden w-full lg:relative lg:block lg:w-1/5 lg:pt-4"
					id="country"
				>
					<div className="scrollbar-hide relative mr-4 flex h-[95vh] flex-col overflow-hidden overflow-y-auto rounded-md bg-gray-800 p-2 text-sm text-gray-200">
						{/* <Country /> */}
					</div>
				</div>
				<div className="w-full bg-gray-800 lg:w-1/3 lg:pt-4">
					<TodayMatches />
				</div>
			</div>
		</div>
	);
}
