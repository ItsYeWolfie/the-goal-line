import { FaArrowRight, FaWindowClose } from 'react-icons/fa';

export default function Search() {
	return (
		<>
			<div className="float-right w-auto pt-[1%] pr-[1%] ">
				<button
					type="submit"
					className="ml-2 rounded-lg border  bg-gray-800 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none "
				>
					<svg
						className="h-5 w-5 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
					<span className="sr-only">Search</span>
				</button>
			</div>
			<div className=" absolute top-[10%] z-10 hidden h-[60vh] w-full rounded-[20px] border-[1px] bg-gray-900  bg-opacity-[1] sm:left-[10%] sm:h-[700px] sm:w-[80%] md:left-[20%] md:h-[500px] md:w-[60%] ">
				<div className="relative mb-[2%] ml-[3%] mt-[1%] flex h-[7%]  items-center text-[22px]  font-semibold text-gray-100">
					Search
					<FaWindowClose className="absolute right-[6%] top-[10%] text-[25px] text-gray-200" />
				</div>
				<div className=" rounded-t-[20px]">
					<div className="relative ">
						<div className="relative mx-auto flex w-[95%] cursor-pointer items-center rounded-md border-[1px]  px-4 py-2 text-sm leading-5">
							<input
								id="search"
								className="block w-full rounded-md border-none bg-transparent py-2 pl-8 text-[19px] leading-5 text-white transition duration-150 ease-in-out placeholder:text-gray-400  focus:border-transparent focus:outline-none
								 sm:text-[17px] sm:leading-5"
								placeholder="Type to search..."
							/>
							<div className="absolute right-4 top-2 border-none">
								<select className=" block w-full rounded-md border-[1px] bg-transparent py-2 pl-3 pr-10 leading-5 text-white focus:border-transparent  focus:outline-none  sm:text-[15px] sm:leading-5">
									<option>Player</option>
									<option>Team</option>
								</select>
							</div>
							<div className="absolute left-3 top-3">
								<svg
									className="h-7 w-7 text-gray-200"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={3}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className=" mx-auto mt-[5%] grid h-[65%] w-[95%] grid-flow-row  gap-[1%] overflow-y-scroll">
					<div className="flex h-[45px] w-full items-center gap-[2%] md:h-[54px] ">
						<div className="h-full w-[15%] rounded-[10px] bg-gray-200 md:w-[10%] ">
							<img
								src="src/images/33.png"
								alt="a"
								className="m-auto mt-[5%]  h-[90%] w-[70%] rounded-full"
							/>
						</div>
						<div className="grid h-full w-[70%] grid-rows-2 overflow-hidden md:w-[75%] ">
							<div className="flex h-full items-end pl-[2%] text-[20px]">Manchester United</div>
							<div className="flex h-full items-end pl-[2%] text-[15px] text-gray-200">League: Premier League </div>
						</div>
						<div className="h-full w-[10%] ">
							<FaArrowRight className=" mx-auto mt-[22%] text-[30px] text-gray-200  md:mt-[10%]  md:text-[35px]" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
