import { Kits } from '../../../types/Kits.types';

interface KitProps {
	kit: Kits;
}

export default function Kit({ kit }: KitProps) {
	return (
		<div className="flex-none basis-3/6 rounded-lg hover:border-2 hover:border-yellow-400 md:basis-1/4  lg:basis-1/5 ">
			<img
				className="mx-auto h-[80%] w-[80%]"
				src={kit.image}
				alt={kit.name}
			/>
			<div className=" text-center text-sm text-gray-200 md:text-base lg:text-lg">
				<header>{kit.name}</header>
				<p className="text-yellow-400">${kit.price}</p>
			</div>
		</div>
	);
}
