import { Kits } from '../../../types/Kits.types';

interface KitProps {
	kit: Kits;
}

export default function Kit({ kit }: KitProps) {
	return (
		<div className="flex-none basis-6/12 rounded-lg hover:border-2 hover:border-yellow-400 md:basis-3/12">
			<img
				className="mx-auto h-[80%] w-[80%]"
				src={kit.image}
				alt={kit.name}
			/>
			<div className="text-center text-lg text-gray-200 md:text-xl">
				<header>{kit.name}</header>
				<p className="text-yellow-400">${kit.price}</p>
			</div>
		</div>
	);
}
