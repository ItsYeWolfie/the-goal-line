export default function SearchLoader() {
	return (
		<div className="mt-2 flex h-[44px] w-full animate-pulse items-center sm:mt-[4] sm:h-[55px] md:mt-[2%]  md:h-[54px] ">
			<div className="h-full w-[15%] rounded-[10px] bg-gray-400 dark:bg-gray-200 md:w-[10%] ">
				<img
					src=""
					alt=""
					className="m-auto mt-[5%]  h-[90%] w-[70%] animate-spin rounded-full bg-gray-400 dark:bg-gray-200"
				/>
			</div>
			<div className=" grid h-full w-[70%] grid-rows-2 gap-4  md:w-[75%] ">
				<div className="ml-4 flex h-full w-1/3 items-end bg-gray-400 text-[17px] dark:bg-gray-200 sm:text-[20px]" />
				<div className="ml-4 flex h-full w-1/4 items-end bg-gray-400 text-[17px] dark:bg-gray-200 sm:text-[15px]" />
			</div>
			<div className="ml-4 flex h-1/3 w-5 items-center justify-center bg-gray-400 text-[17px] dark:bg-gray-200 " />
		</div>
	);
}
export const SearchLoaderArray = [
	<SearchLoader />,
	<SearchLoader />,
	<SearchLoader />,
	<SearchLoader />,
	<SearchLoader />,
	<SearchLoader />,
	<SearchLoader />,
	<SearchLoader />,
	<SearchLoader />,
	<SearchLoader />,
	<SearchLoader />,
];
