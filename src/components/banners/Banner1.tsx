export default function Banner1() {
	return (
		<section className=" mx-[1%] overflow-hidden bg-gray-100 dark:bg-gray-900  md:mx-[5%] 2xl:container 2xl:mx-auto ">
			<div className="relative h-[150px] w-full overflow-hidden rounded-[20px] bg-opacity-[0.7] bg-gradient-to-tr from-gray-900 to-gray-600 bg-center  sm:h-[210px] md:h-[250px] lg:h-[230px] xl:h-[260px]">
				<div className="absolute right-[5%] bottom-0 h-[100%] w-[40%]">
					<img
						className="float-right mt-[10%] h-[90%] w-1/2 rounded-t-[20px] opacity-[0.6] "
						src="src/images/flashscore1.png"
						alt=""
					/>
				</div>
				<div className="absolute right-[24%] bottom-0 z-[1] h-[100%] w-[40%]">
					<img
						className="float-right mt-[25%] h-[75%] w-2/5 rounded-t-[20px] bg-transparent opacity-[0.6] "
						src="src/images/livescore.png"
						alt=""
					/>
				</div>
				<div className="flex flex-col flex-wrap">
					<div className="m-0 mt-[3%] ml-[3.3%] p-0 text-left text-[0.7rem] text-yellow-500 sm:text-[1.2rem] md:mt-[1%] md:text-[1.4rem] lg:mt-[1%] lg:text-[1.2rem] xl:mt-[1%]">
						New Platform
					</div>
					<div className="m-0 mt-[2%] ml-[3.3%] w-[40%] p-0 text-[0.9rem] text-gray-100 antialiased dark:text-gray-900 sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.6rem]">
						Get one of our sports apps,which is only available on
					</div>
					<div className="ml-[3.3%] mt-[1%] text-[0.5rem] text-gray-100 dark:text-gray-900 sm:text-[0.8rem] md:text-[1rem]">
						Download Apps:
					</div>
					<div className="ml-[3.3%] mt-[2%] flex h-[30%] w-[30%] lg:h-[30%]">
						<div>
							<img
								className="float-left mx-auto h-[100%] w-[95%] animate-bounce rounded-[10px] border-2 border-gray-200 lg:h-[80%] lg:w-[80%]"
								src="src/images/appstore.png"
								alt=""
							/>
						</div>
						<div>
							<img
								className="float-left h-[100%] w-[95%] animate-bounce rounded-[10px] border-2 border-gray-200 lg:h-[80%] lg:w-[80%]"
								src="src/images/googleplay.png"
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
