import { IKit } from '../../types/Kit.types';

export default function Kit({ kit }: { kit: IKit }) {
	return (
		<div className=" flex-none basis-3/6 rounded-lg bg-gray-100 hover:border-2 hover:border-violet-500 dark:bg-gray-900 dark:hover:border-yellow-400 md:basis-1/4  lg:basis-1/5 ">
			<img
				className=" mx-auto h-[80%] w-[80%]"
				src={kit.image}
				alt={kit.name}
			/>
			<div className=" text-center text-sm text-gray-700 dark:text-gray-200 md:text-base lg:text-lg">
				<header>{kit.name}</header>
				<p className="text-violet-600  dark:text-yellow-400">${kit.price}</p>
			</div>
		</div>
	);
}
