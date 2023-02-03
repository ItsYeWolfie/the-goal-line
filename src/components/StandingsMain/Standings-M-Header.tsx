import { BsChevronRight } from 'react-icons/bs';
import { GiTrophy } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function StandingMainHeader() {
	return (
		<div className="  w-full">
			<div className="flex items-center">
				<p className=" ml-[3%] flex w-2/3 gap-[1%] text-[20px]  text-gray-200 md:ml-[1%] 2xl:text-[30px]">
					<GiTrophy className=" mr-[1%]  mt-[2%] rounded-full text-[20px] text-yellow-500 md:mt-[0.5%] 2xl:text-[30px] " />
					Standings
				</p>

				<p className="  flex w-1/3 justify-end gap-[2%] text-right text-[20px] text-gray-200 md:ml-[1%] 2xl:text-[25px] ">
					<Link to="/leagues/">View All</Link> <BsChevronRight className="mt-[3%] md:mt-[1%]" />
				</p>
			</div>
			<div className="my-[1%] flex">
				<p className="mt-[1%] ml-[3%] flex w-full items-center gap-[0.7%] text-[20px] text-gray-200 sm:mt-[2%] md:mt-[1%] md:ml-[1%]">
					<img
						className="h-[30px] w-[30px] rounded-full"
						src="/Flag-England.webp"
						alt=""
					/>
					<img
						className="h-[30px] w-[30px] rounded-full bg-white"
						src="/39.png"
						alt=""
					/>
					Premier League
				</p>
			</div>
		</div>
	);
}
