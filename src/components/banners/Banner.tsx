/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';

export default function Banner() {
	const [timer, setTimer] = useState('');
	const [currentTime, setCurrentTime] = useState(Date.now());
	const [gameTime, setGameTime] = useState(0);
	const [startTime, setStartTime] = useState(Date.now() - 20 * 60 * 1000);

	useEffect(() => {
		const intervalId = setInterval(() => {
			const countDownDate = new Date('March 19, 2023 20:45:00').getTime();
			const now = new Date().getTime();
			// Find the distance between now and the count down date
			const distance = countDownDate - now;
			// Time calculations for days, hours, minutes and seconds
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setCurrentTime(Date.now());
			setGameTime((Date.now() - startTime) / 1000);
			setTimer(`${days}d : ${hours}h :  ${minutes}min : ${seconds}sec `);
		}, 1000);

		return () => clearInterval(intervalId);
	});

	const gameTimeInSeconds = Math.floor(gameTime % 60);
	const gameTimeInMinutes = Math.floor(gameTime / 60);
	return (
		<section className="m-[3%] mt-0 pt-[5%] ">
			<div className="2xl:w-full">
				<div
					className="items-strech banner flex h-[500px] flex-col justify-center space-y-4 sm:h-[650px] md:h-[270px] md:flex-row md:space-y-0 md:space-x-6 lg:h-[370px] lg:space-x-8 2xl:h-[420px]"
					id="banner"
				>
					<div className="items-strech relative flex h-full w-full flex-col justify-between rounded-[20px] bg-gray-50 dark:bg-gray-900  md:w-8/12 md:flex-row  lg:w-7/12  xl:w-8/12  2xl:w-9/12">
						<img
							className="h-full w-full rounded-[20px] opacity-[0.6]"
							src="src/images/140324050941-bernabeu.jpg"
							alt=""
						/>
						<div className="z-1 absolute top-[5%] left-[10%] w-[80%]  px-3 py-[1%] text-center font-mono text-[1rem] font-semibold italic text-yellow-400  sm:left-[20%] sm:w-[60%] sm:text-[1.3rem] md:left-[5%] md:w-[90%] md:text-[1.3rem] lg:left-[15%] lg:w-[70%] xl:left-[25%] xl:w-[50%]">
							Real Madrid vs Barcelona
						</div>
						<p className="z-1 absolute  top-[45%] left-[30%] w-[40%] px-3 py-[1%] text-center font-mono text-[0.75rem] font-semibold italic text-yellow-400 sm:left-[30%]  sm:w-[40%] sm:text-[1rem]  md:left-[27.5%] md:w-[45%] md:text-[1.1rem] lg:left-[30%] lg:w-[40%] xl:left-[35%] xl:w-[30%]">
							19 March - 2023
						</p>
						<p className="z-1 absolute top-[25%] left-[20%] w-[60%] px-3 py-[1%] text-center font-mono text-[0.9rem] font-extrabold italic text-yellow-400 sm:left-[27.5%] sm:w-[45%] sm:text-[1.2rem] md:left-[20%] md:w-[60%] md:text-[1.2rem] lg:left-[22.5%] lg:w-[55%] xl:left-[32.5%] xl:w-[35%]">
							Santiago Bernabeu
						</p>
						<p
							className="z-1  font absolute bottom-[2%] right-[25%] w-[50%] rounded-tl-[20px] rounded-br-[20px] px-3 py-[1%] text-center font-mono text-[0.65rem] font-semibold italic text-yellow-400 sm:text-[1rem] md:text-[0.8rem] lg:text-[1rem]"
							id="demo"
						>
							{timer}
						</p>
					</div>
					<div className="relative ml-[20%] flex h-full w-[60%] flex-col justify-center rounded-[20px] bg-gray-50 px-4  shadow-lg shadow-slate-600 dark:bg-gray-800 sm:ml-[20%] sm:w-3/5 sm:align-middle md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
						<div className="flex h-full flex-col justify-center">
							<div className="relative col-span-1 h-[100%] w-[100%] rounded-[20px] bg-gray-800">
								<h3 className="pt-[5%] text-center font-[450] text-gray-200 lg:text-xl xl:text-[1.3rem] 2xl:text-[1.5rem]">
									Live Match
								</h3>
								<p className="color mt-[3%] mb-[1%] text-center text-[13px] font-medium text-lime-500 lg:text-lg xl:text-[1.2rem] 2xl:text-[1.3rem]">
									{gameTimeInMinutes >= 20 ? gameTimeInMinutes : 20}:
									{gameTimeInSeconds < 10 ? `0${gameTimeInSeconds}` : gameTimeInSeconds}{' '}
								</p>
								<img
									className="absolute top-[23%] right-[10%] h-[16%] w-[15%] rounded-full sm:top-[23%] sm:h-[18%] sm:w-[13%] md:right-[4%] md:top-[25%] md:h-[16%] md:w-[16%] lg:top-[23%]"
									src=" https://i.pinimg.com/564x/6b/cf/50/6bcf5098d8250e99fadaeaa1c0fb04b8.jpg"
								/>
								<img
									className="absolute top-[23%] left-[10%] h-[16%] w-[15%] rounded-full sm:top-[23%] sm:h-[18%] sm:w-[13%] md:left-[4%] md:top-[25%] md:h-[16%] md:w-[16%] lg:top-[23%]"
									src=" https://i.pinimg.com/564x/a6/7a/f9/a67af9c593ba25a687b95e35d294dc18.jpg"
								/>
								<p className="mt-[4%] ml-[35%] mb-[6%] w-[30%] rounded-[15px] bg-violet-100 py-[1%] text-center text-[13px] font-semibold text-violet-800 md:w-[30%] lg:text-[15px] xl:text-[1rem] 2xl:text-[1.3rem]">
									0 - 0
								</p>
								<div className="relative mt-[0%]">
									<p className="mb-[6%] text-center text-[12px] font-medium text-gray-200 lg:text-[14px] xl:text-[1rem] 2xl:text-[1.2rem]">
										Possession
									</p>
									<p className="absolute top-[28%] left-[6%] text-[12px] text-blue-600 xl:text-[1rem] 2xl:text-[1.2rem]">
										7
									</p>
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
									<p className="absolute top-[28%] left-[6%] text-[12px] text-blue-600 xl:text-[1rem] 2xl:text-[1.2rem]">
										7
									</p>
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
				</div>
			</div>
		</section>
	);
}
