interface LiveMatchProps {
	gameTimeInSeconds: number;
	gameTimeInMinutes: number;
}

export default function LiveMatch({ gameTimeInSeconds, gameTimeInMinutes }: LiveMatchProps) {
	return (
		<div className="relative ml-[20%] flex h-full w-[60%] flex-col justify-center rounded-[20px]  bg-gray-50 px-4   shadow-lg shadow-slate-600 dark:bg-gray-800 sm:ml-[20%] sm:w-3/5 sm:align-middle md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
			<div className="flex h-full flex-col justify-center">
				<div className="relative col-span-1 h-[100%] w-[100%] rounded-[20px] bg-gray-800">
					<h3 className="pt-[5%] text-center font-[450] text-gray-200 lg:text-xl xl:text-[1.3rem] 2xl:text-[1.5rem]">
						Live Match
					</h3>
					<p className=" mt-[3%] mb-[1%] text-center text-[13px] font-medium text-lime-500 lg:text-lg xl:text-[1.2rem] 2xl:text-[1.3rem]">
						{gameTimeInMinutes >= 20 ? gameTimeInMinutes : 20}:
						{gameTimeInSeconds < 10 ? `0${gameTimeInSeconds}` : gameTimeInSeconds}{' '}
					</p>
					<img
						alt=""
						className="absolute top-[23%] right-[10%] h-[16%] w-[19%] rounded-full sm:top-[23%] sm:h-[18%] sm:w-[13%] md:right-[4%] md:top-[25%] md:h-[16%] md:w-[16%] lg:top-[23%]"
						src=" https://i.pinimg.com/564x/6b/cf/50/6bcf5098d8250e99fadaeaa1c0fb04b8.jpg"
					/>
					<img
						alt=""
						className="absolute top-[23%] left-[10%] h-[16%] w-[19%] rounded-full sm:top-[23%] sm:h-[18%] sm:w-[13%] md:left-[4%] md:top-[25%] md:h-[16%] md:w-[16%] lg:top-[23%]"
						src=" https://i.pinimg.com/564x/a6/7a/f9/a67af9c593ba25a687b95e35d294dc18.jpg"
					/>
					<p className="mt-[4%] ml-[35%] mb-[6%] w-[30%] rounded-[15px] bg-violet-100 py-[1%] text-center text-[13px] font-semibold text-violet-800 md:w-[30%] lg:text-[15px] xl:text-[1rem] 2xl:text-[1.3rem]">
						0 - 0
					</p>
					<div className="relative mt-[0%]">
						<p className="mb-[6%] text-center text-[12px] font-medium text-gray-200 lg:text-[14px] xl:text-[1rem] 2xl:text-[1.2rem]">
							Possession
						</p>
						<p className="absolute top-[28%] left-[6%] text-[12px] text-blue-600 xl:text-[1rem] 2xl:text-[1.2rem]">7</p>
						<p className="absolute top-[28%] right-[6%] text-[12px] text-orange-600 xl:text-[1rem] 2xl:text-[1.2rem]">
							3
						</p>
						<div className="mt-[3%] flex gap-[10%]">
							<div className="ml-[5%] h-1.5 w-[40%] rounded-full bg-gray-200 dark:bg-gray-300">
								<div className="float-right h-1.5 w-[60%] rounded-full bg-blue-600" />
							</div>
							<div className="h-1.5 w-[40%] rounded-full bg-gray-200 dark:bg-gray-300">
								<div className="h-1.5 w-[40%] rounded-full bg-orange-600" />
							</div>
						</div>
					</div>
					<div className="relative mt-[5%]">
						<p className="mb-[4%] text-center text-[12px] font-medium text-gray-200 lg:text-[14px] xl:text-[1rem] 2xl:text-[1.2rem]">
							Shoot
						</p>
						<p className="absolute top-[28%] left-[6%] text-[12px] text-blue-600 xl:text-[1rem] 2xl:text-[1.2rem]">
							12
						</p>
						<p className="absolute top-[28%] right-[6%] text-[12px] text-orange-600 xl:text-[1rem] 2xl:text-[1.2rem]">
							7
						</p>
						<div className="mt-[2%] flex gap-[10%]">
							<div className="ml-[5%] h-1.5 w-[40%] rounded-full bg-gray-200 dark:bg-gray-300">
								<div className="float-right h-1.5 w-[80%] rounded-full bg-blue-600" />
							</div>
							<div className="h-1.5 w-[40%] rounded-full bg-gray-200 dark:bg-gray-300">
								<div className="h-1.5 w-[60%] rounded-full bg-orange-600" />
							</div>
						</div>
					</div>
					<div className="relative mt-[5%]">
						<p className="mb-[4%] text-center text-[12px] font-medium text-gray-200 lg:text-[14px] xl:text-[1rem] 2xl:text-[1.2rem]">
							Fouls
						</p>
						<p className="absolute top-[28%] left-[6%] text-[12px] text-blue-600 xl:text-[1rem] 2xl:text-[1.2rem]">7</p>
						<p className="absolute top-[28%] right-[6%] text-[12px] text-orange-600 xl:text-[1rem] 2xl:text-[1.2rem]">
							3
						</p>
						<div className="mt-[3%] mb-[5%] flex gap-[10%]">
							<div className="ml-[5%] h-1.5 w-[40%] rounded-full bg-gray-200 dark:bg-gray-300 2xl:text-[1.2rem]">
								<div className="float-right h-1.5 w-[60%] rounded-full bg-blue-600" />
							</div>
							<div className="h-1.5 w-[40%] rounded-full bg-gray-200 dark:bg-gray-300">
								<div className="h-1.5 w-[45%] rounded-full bg-orange-600" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
