import { FaRegFutbol } from 'react-icons/fa';
import { HiOutlineRefresh } from 'react-icons/hi';
import { GiLaurelsTrophy } from 'react-icons/gi';
import { IoNewspaper } from 'react-icons/io5';
import { RiBaseStationLine } from 'react-icons/ri';

export default function Footer() {
	return (
		<footer className="fixed bottom-0 z-[9999999999] grid h-[7vh] w-full grid-cols-5 items-center gap-[5%] border-t-2 border-gray-200 bg-gray-900 px-[1%] text-center font-medium text-gray-200 sm:hidden">
			<div className="m-[2%] font-medium">
				<div className="flex flex-col items-center justify-center gap-[2%]  hover:text-orange-500">
					<FaRegFutbol />
					<p>Football</p>
				</div>
			</div>
			<div className="m-[2%] font-medium">
				<div className="flex flex-col items-center justify-center gap-[2%]  hover:text-orange-500">
					<IoNewspaper />
					<p>News</p>
				</div>
			</div>
			<div className="m-[2%] font-medium">
				<div className="flex flex-col items-center justify-center gap-[2%]  hover:text-orange-500">
					<RiBaseStationLine />
					<p>Live</p>
				</div>
			</div>
			<div className="m-[2%] font-medium">
				<div className="flex flex-col items-center justify-center gap-[2%]  hover:text-orange-500">
					<GiLaurelsTrophy />
					<p>Standings</p>
				</div>
			</div>
			<div className="m-[2%] font-medium">
				<div className="flex flex-col items-center justify-center gap-[2%]  hover:text-orange-500">
					<p className="hover:animate-spin">
						<HiOutlineRefresh />
					</p>
					<p>Refresh</p>
				</div>
			</div>
		</footer>
	);
}
