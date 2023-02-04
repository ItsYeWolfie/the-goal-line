/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { FaRegFutbol } from 'react-icons/fa';

interface FixtureHProps {
	activeButton: number;
	handleButtonClick: (index: number) => void;
}

export default function FixtureHeader({ activeButton, handleButtonClick }: FixtureHProps) {
	return (
		<div className="relative flex flex-col gap-4 border-b-2 border-gray-300">
			<div className="flex items-center gap-2">
				<FaRegFutbol className="text-4xl text-black  dark:text-yellow-400" />
				<span className="text-2xl font-medium text-gray-700 dark:text-gray-200 ">Football Matches</span>
			</div>
			<div className="flex items-start gap-8">
				{['Latest Matches', 'Live Matches', 'Coming Matches'].map((item, index) => (
					<button
						type="button"
						key={item}
						className={`text-center text-lg md:text-xl ${
							activeButton === index ? 'border-b-[5px] border-yellow-400 text-yellow-400' : ''
						}`}
						onClick={() => handleButtonClick(index)}
					>
						{item}
					</button>
				))}
			</div>
		</div>
	);
}
