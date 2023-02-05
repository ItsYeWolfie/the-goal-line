export default function Banner1() {
	return (
		<section className=" h-[180px] rounded-3xl bg-opacity-70 bg-gradient-to-tr from-sky-500 to-sky-900  dark:from-gray-900  dark:to-gray-600 sm:h-[200px] md:h-[250px] ">
			<div className="relative h-full w-full">
				<div className="flex h-full w-1/2 flex-col items-start justify-center gap-2 p-6">
					<div className=" mt-5 text-sm text-gray-100 sm:text-base md:text-lg lg:text-2xl ">New Platform</div>
					<div className=" text-sm text-white sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
						Get one of our sports apps, which is only available on
					</div>
					<div className=" text-xs text-gray-100 md:text-lg">Download App:</div>
					<div className="mt-2  flex w-full basis-[20%] gap-2">
						<img
							src="/appstore.png"
							alt="/appstore.png"
							className="h-3/4 w-3/4 border-[1px] border-gray-100 sm:h-3/4 sm:w-1/3"
						/>
						<img
							src="/googleplay.png"
							alt="/appstore.png"
							className="h-3/4 w-3/4 border-[1px] border-gray-100 sm:h-3/4 sm:w-1/3"
						/>
					</div>
				</div>

				<div className="absolute bottom-0 right-[30%] h-full  w-[15%] ">
					<img
						className="absolute bottom-0 h-[75%] rounded-t-lg opacity-70 "
						src="/livescore.png"
						alt="/livescore.png"
					/>
				</div>

				<div className="absolute bottom-0 right-[10%] h-full w-[20%]  lg:right-[13%] 2xl:right-[15%] ">
					<img
						className="absolute bottom-0 h-[90%] w-full  rounded-t-lg opacity-70 "
						src="/flashscore1.png"
						alt="/livescore.png"
					/>
				</div>
			</div>
		</section>
	);
}
