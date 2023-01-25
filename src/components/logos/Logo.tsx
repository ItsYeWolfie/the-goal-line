import { Logos } from '../../../types/Logos.types';

interface LogoProps {
	logo: Logos;
}

export default function Logo({ logo }: LogoProps) {
	return (
		<div className="h-full w-[20%] flex-none rounded sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[12%]">
			<div className=" relative ml-[5%] mt-[10%] h-[85%] w-[90%] rounded-[100%] bg-gray-800 align-middle hover:border-[2px] hover:border-yellow-400">
				<img
					className="absolute  top-[17.5%] left-[17.5%]  mx-auto h-[65%] w-[65%]  "
					src={logo.image}
					alt=""
				/>
			</div>
		</div>
	);
}
