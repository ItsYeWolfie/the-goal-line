/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect } from 'react';
import LiveMatch from './Live-Match';

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
		<section className="mx-[1%] overflow-hidden  pt-[5%] md:mx-[8%] ">
			<div className="2xl:w-full">
				<div
					className=" banner flex h-[500px] flex-col justify-center space-y-4 shadow-lg sm:h-[650px] md:h-[240px] md:flex-row md:space-y-0 md:space-x-6 lg:h-[340px] lg:space-x-8 2xl:h-[420px]"
					id="banner"
				>
					<div className=" relative flex h-full  w-full flex-col justify-between rounded-[20px]   bg-gray-50 shadow-lg shadow-slate-600 dark:bg-gray-900  md:w-8/12 md:flex-row  lg:w-7/12  xl:w-8/12  2xl:w-9/12">
						<img
							className="h-full w-full rounded-[20px] opacity-[0.6]"
							src="src/images/140324050941-bernabeu.jpg"
							alt=""
						/>
						<div className="absolute top-[5%] left-[10%] z-[1] w-[80%]  px-3 py-[1%] text-center font-mono text-[1rem] font-semibold italic text-white  sm:left-[20%] sm:w-[60%] sm:text-[1.3rem] md:left-[5%] md:w-[90%] md:text-[1.3rem] lg:left-[15%] lg:w-[70%] xl:left-[25%] xl:w-[50%]">
							Real Madrid vs Barcelona
						</div>
						<p className="absolute top-[45%]  left-[30%] z-[1] w-[40%] px-3 py-[1%] text-center font-mono text-[0.7rem] font-semibold italic text-white sm:left-[30%]  sm:w-[40%] sm:text-[1rem]  md:left-[27.5%] md:w-[45%] md:text-[1.1rem] lg:left-[30%] lg:w-[40%] xl:left-[35%] xl:w-[30%]">
							19 March - 2023
						</p>
						<p className="absolute top-[25%] left-[20%] z-[1] w-[60%] px-3 py-[1%] text-center font-mono text-[0.7rem] font-extrabold italic text-white sm:left-[27.5%] sm:w-[45%] sm:text-[1.2rem] md:left-[20%] md:w-[60%] md:text-[1.2rem] lg:left-[22.5%] lg:w-[55%] xl:left-[32.5%] xl:w-[35%]">
							Santiago Bernabeu
						</p>
						<p
							className="  absolute bottom-[2%] right-[25%] z-[1] w-[50%] rounded-tl-[20px] rounded-br-[20px] px-3 py-[1%] text-center font-mono text-[0.8rem] font-semibold italic text-white sm:text-[1rem] md:text-[1rem] lg:text-[1.2rem]"
							id="demo"
						>
							{timer}
						</p>
					</div>
					<LiveMatch
						gameTimeInSeconds={gameTimeInSeconds}
						gameTimeInMinutes={gameTimeInMinutes}
					/>
				</div>
			</div>
		</section>
	);
}
