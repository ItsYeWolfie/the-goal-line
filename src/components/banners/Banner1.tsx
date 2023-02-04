export default function Banner1() {
	return (
		<section className="flex h-[150px] flex-col items-center justify-between overflow-y-hidden rounded-3xl bg-opacity-70 bg-gradient-to-tr  from-sky-500 to-sky-900 px-4 py-1 text-center dark:from-gray-900 dark:to-gray-600 sm:h-[210px] md:h-[250px] md:flex-row md:px-16 md:py-4 md:text-left lg:h-[230px] xl:h-[260px]">
			<div className="relative  w-full overflow-hidden rounded-[20px]  ">
				<div className="absolute right-[5%] bottom-0 h-[100%] w-[40%]">
					<img
						className="float-right mt-[10%] h-[90%] w-1/2 rounded-t-[20px] opacity-80 dark:opacity-[0.6] "
						src="/flashscore1.png"
						alt=""
					/>
				</div>
				<div className="absolute right-[24%] bottom-0 z-[1] h-[100%] w-[40%]">
					<img
						className="float-right mt-[25%] h-[75%] w-2/5 rounded-t-[20px] bg-transparent opacity-80 dark:opacity-[0.6] "
						src="/livescore.png"
						alt=""
					/>
				</div>
				<div className="flex flex-col flex-wrap">
					<div className="m-0 mt-[3%] p-0 text-left text-[0.7rem] text-white dark:text-yellow-500 sm:text-[1.2rem] md:mt-[1%] md:text-[1.4rem] lg:mt-[1%] lg:text-[1.2rem] xl:mt-[1%]">
						New Platform
					</div>
					<div className="m-0 mt-[2%] w-[40%] p-0 text-left text-[0.8rem] text-gray-100 antialiased  dark:text-gray-200 sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.6rem]">
						Get one of our sports apps,which is only available on
					</div>
					<div className="mt-[1%] text-left text-[0.5rem] text-gray-100  dark:text-gray-200 sm:text-[0.8rem] md:text-[1rem]">
						Download Apps:
					</div>
					<div className="mt-[2%] flex h-[30%] w-[30%] text-left lg:h-[30%]">
						<div>
							<img
								className="float-left mx-auto h-[100%] w-[95%] animate-bounce rounded-[10px] border-2 border-gray-200 lg:h-[80%] lg:w-[80%]"
								src="/appstore.png"
								alt=""
							/>
						</div>
						<div>
							<img
								className="float-left h-[100%] w-[95%] animate-bounce rounded-[10px] border-2 border-gray-200 lg:h-[80%] lg:w-[80%]"
								src="/googleplay.png"
								alt=""
							/>
						</div>
					</div>
					<div className="mt-3 flex flex-row" />
				</div>
			</div>
		</section>
	);
}
