import { Kits } from '../../../types/Kits.types';

interface KitProps {
	kit: Kits;
}

export default function Kit({ kit }: KitProps) {
	return (
		<div className=" h-full w-[35%] flex-none rounded sm:w-[28%]  md:w-[28%] lg:w-[20%]">
			<div className="mx-auto h-[80%] w-[80%] rounded-[15px] bg-gray-800 align-middle  ">
				<img
					className="mx-auto h-[95%] w-full rounded-[15px] pt-[2.5%] "
					src={kit.image}
					alt=""
				/>
			</div>
			<div className="relative mx-auto h-[20%] w-full text-left   text-[10px] text-gray-200 sm:text-[12px] md:text-[13px]  lg:text-[15px]">
				<span className="absolute top-[5%] left-[10%] text-[0.55rem] sm:text-[0.7rem] md:text-[0.9rem] 2xl:text-[1.2rem] ">
					{kit.name}
				</span>
				<span className="absolute top-[50%] left-[35%] text-yellow-400 2xl:text-[1.2rem] ">${kit.price}</span>
			</div>
		</div>
	);
}
