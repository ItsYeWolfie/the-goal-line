/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from 'react';
import LiveMatch from './LiveMatch';

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
		<div className="flex flex-col  justify-between gap-4  lg:flex-row lg:gap-x-8">
			<div className="relative flex h-96 flex-col justify-around gap-6 rounded-[20px] bg-gray-100 bg-cover py-4 text-center  dark:bg-gray-900 lg:basis-8/12">
				<img
					src="/140324050941-bernabeu.jpg"
					alt="Santiago Bernabeu"
					className="absolute top-0 left-0 z-0 h-full w-full rounded-[20px] object-cover  dark:opacity-60"
				/>
				<header className="z-[1] text-lg font-bold text-white lg:text-2xl">Real Madrid vs Barcelona</header>
				<p className="z-[1] font-medium text-white lg:text-xl">Santiago Bernabeu</p>
				<p className="z-[1] text-sm text-white lg:text-lg">19 March - 2023</p>
				<p className="z-[1] mx-auto w-max bg-black bg-opacity-80  px-8 py-2 text-base text-white ">{timer}</p>
			</div>
			<LiveMatch
				gameTimeInSeconds={gameTimeInSeconds}
				gameTimeInMinutes={gameTimeInMinutes}
			/>
		</div>
	);
}
