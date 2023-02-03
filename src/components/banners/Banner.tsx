/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from 'react';
import LiveMatch from './LiveMatch';

export default function Banner() {
	const [timer, setTimer] = useState('');
	const [gameTime, setGameTime] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setGameTime((Date.now() - Date.now() - 20 * 60 * 1000) / 1000);
			const countDownDate = new Date('March 19, 2023 20:45:00').getTime();
			const now = new Date().getTime();
			// Find the distance between now and the count down date
			const distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			const second = 1000;
			const minute = second * 60;
			const hour = minute * 60;
			const days = Math.floor(distance / (hour * 24));
			const hours = Math.floor((distance % days) / hour);
			const minutes = Math.floor((distance % hour) / minute);
			const seconds = Math.floor((distance % minute) / 1000);

			setTimer(`${days}day(s), ${hours} hour(s), ${minutes} minute(s) and ${seconds}second(s) left. `);
		}, 1000);

		return () => clearInterval(intervalId);
	});

	const gameTimeInSeconds = Math.floor(gameTime % 60);
	const gameTimeInMinutes = Math.floor(gameTime / 60);
	return (
		<div className="flex flex-col justify-between gap-4 shadow-lg lg:flex-row lg:gap-x-16">
			<div className="relative flex h-96 flex-col justify-around gap-6 rounded-[20px] bg-gray-100 bg-cover py-4 text-center shadow-lg  shadow-slate-600  dark:bg-gray-900 lg:basis-8/12">
				<img
					src="/140324050941-bernabeu.jpg"
					alt="Santiago Bernabeu"
					className="absolute top-0 left-0 z-0 h-full w-full object-cover opacity-60"
				/>
				<header className="z-[1] text-lg font-bold lg:text-2xl">Real Madrid vs Barcelona</header>
				<p className="z-[1] font-medium lg:text-xl">Santiago Bernabeu</p>
				<p className="z-[1] text-sm lg:text-lg">19 March - 2023</p>
				<p className="z-[1] mx-auto w-max rounded-tl-2xl rounded-br-2xl bg-black bg-opacity-60 px-4 py-2 text-sm">
					{timer}
				</p>
			</div>
			<LiveMatch
				gameTimeInSeconds={gameTimeInSeconds}
				gameTimeInMinutes={gameTimeInMinutes}
			/>
		</div>
	);
}
