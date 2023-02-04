import { Logos } from '../../../types/Logos.types';

interface LogoProps {
	logo: Logos;
}

export default function Logo({ logo }: LogoProps) {
	return (
		<div className=" flex-none basis-[20%] overflow-auto rounded-full  bg-gray-100 hover:border-[2px]  hover:border-violet-600 dark:bg-gray-900  dark:hover:border-yellow-400 md:basis-[10%]">
			<img
				className="p-4"
				src={logo.image}
				alt={logo.name}
			/>
		</div>
	);
}
