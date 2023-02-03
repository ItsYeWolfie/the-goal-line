/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { FaRegFutbol } from 'react-icons/fa';

interface FixtureHProps {
	activeButton: number;
	handleButtonClick: (index: number) => void;
}

export default function FixtureHeader({ activeButton, handleButtonClick }: FixtureHProps) {
	return (
		<div className="relative h-[115px] w-full border-b-[5px] border-gray-300 2xl:h-[140px]">
			<div className="flex items-center">
				<p className=" mt-[6%]  ml-[3%] flex w-full  gap-[1%] text-[20px] text-gray-200 sm:mt-[2%] md:mt-[1%] md:ml-[1%] lg:text-[25px] 2xl:text-[30px]">
					<FaRegFutbol className=" mr-[0.4%] mt-[0.4%]  rounded-full text-[20px] text-yellow-500 2xl:text-[30px]" />
					Football Matches
				</p>
			</div>
			<div className="absolute bottom-[-5px] flex h-[50px] w-[100%] items-start gap-[6%] md:gap-[6%] 2xl:h-[60px]">
				<p
					className={`h-full pl-[2.5%] text-center text-[14px] md:text-[17px] 2xl:text-[30px] ${
						activeButton === 0 ? 'border-b-[5px] border-yellow-400 text-yellow-400' : ''
					}`}
					onClick={() => handleButtonClick(0)}
				>
					Latest Match
				</p>
				<p
					className={`h-full text-center text-[14px] md:text-[17px] 2xl:text-[30px] ${
						activeButton === 1 ? 'border-b-[5px] border-yellow-400 text-yellow-400' : ''
					}`}
					onClick={() => handleButtonClick(1)}
				>
					Live Matches
				</p>
				<p
					className={`h-full text-center text-[14px] md:text-[17px] 2xl:text-[30px] ${
						activeButton === 2 ? 'border-b-[5px] border-yellow-400 text-yellow-400' : ''
					}`}
					onClick={() => handleButtonClick(2)}
				>
					Coming Matches
				</p>
			</div>
		</div>
	);
}
