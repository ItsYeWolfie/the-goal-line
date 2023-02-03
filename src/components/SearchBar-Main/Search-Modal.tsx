import { IoClose } from 'react-icons/io5';

interface SearchModalProps {
	searchRef: React.RefObject<HTMLInputElement>;
	setSelectedOption: (value: string) => void;
	handleCloseClick: () => void;
	hidden: boolean;
	handleSearchChange: () => void;
	children: React.ReactNode;
}

export default function SearchModal({
	searchRef,
	setSelectedOption,
	handleCloseClick,
	hidden,
	handleSearchChange,
	children,
}: SearchModalProps) {
	return (
		<div
			className={`absolute top-[10%] z-10 ${
				hidden ? 'hidden' : ''
			} h-[600px] w-full rounded-[20px] border-[1px] bg-gray-900  bg-opacity-[1] sm:left-[10%] sm:h-[700px] sm:w-[80%] md:left-[20%] md:h-[500px] md:w-[60%] 2xl:left-[30%] 2xl:mx-auto 2xl:h-[800px] 2xl:w-[40%]`}
		>
			<div className="relative mb-[2%] ml-[3%] mt-[1%] flex h-[7%]  items-center text-[22px]  font-semibold text-gray-100">
				Search
				<IoClose
					onClick={handleCloseClick}
					className="absolute right-[6%] top-[10%] cursor-pointer text-[35px] text-white hover:text-red-700"
				/>
			</div>
			<div className=" rounded-t-[20px]">
				<div className="relative ">
					<div className="relative mx-auto flex w-[95%] cursor-pointer items-center rounded-md border-[1px]  px-4 py-2 text-sm leading-5">
						<input
							id="search"
							className="block w-full rounded-md border-none bg-transparent py-2 pl-8 text-[19px] leading-5 text-white transition duration-150 ease-in-out placeholder:text-gray-400  focus:border-transparent focus:outline-none
								 sm:text-[17px] sm:leading-5"
							ref={searchRef}
							onChange={handleSearchChange}
							placeholder="Type to search..."
						/>
						<div className="absolute right-4 top-2 border-none">
							<select
								className=" block w-full rounded-md border-[1px] bg-transparent py-2 pl-3 pr-10 leading-5  text-lime-400 focus:border-transparent  focus:outline-none  sm:text-[15px] sm:leading-5"
								onChange={(event) => setSelectedOption(event.target.value)}
							>
								<option>Team</option>
								<option>Player</option>
								<option>Coach</option>
								<option>Venue</option>
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
			<div className=" mx-auto mt-[5%]  h-[72%] w-[95%] flex-wrap gap-[2%]  overflow-y-scroll scroll-smooth md:h-[67%]">
				{children}
			</div>
		</div>
	);
}
