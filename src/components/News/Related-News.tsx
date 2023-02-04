import React from 'react';
import { News } from '../../../types/News.types';

interface RelatedProps {
	relatednews: News;
	handleReadMore: (id: number) => void;
}
export default function RelatedNews({ relatednews, handleReadMore }: RelatedProps) {
	return (
		<div
			key={relatednews.id}
			className="grid h-[165px] grid-cols-2 border-b-[1px] border-gray-400 sm:h-[200px] md:h-[180px] lg:h-[160px] xl:h-[170px] 2xl:h-[220px]"
		>
			<div className="h-full w-full">
				<img
					className="my-[5%] mx-auto h-[80%] w-[85%] rounded-[10px]"
					src={relatednews.largeImage}
					alt=""
				/>
			</div>
			<div className="my-auto h-[90%] w-[90%] justify-between text-lg text-gray-800 dark:text-white sm:text-[1.5rem] md:text-[1rem] lg:text-[1.2rem] 2xl:text-[1.5rem]">
				<p>{relatednews.title}</p>
				<button
					type="button"
					className="mt-[5%] rounded-[5px] bg-sky-500 px-[5%] text-white dark:bg-gray-600 sm:mt-[18%] md:mt-[1%] lg:mt-[5%] xl:mt-[12%] 2xl:mt-[5%] 2xl:text-[1.3rem]"
					onClick={() => handleReadMore(relatednews.id)}
				>
					Read More
				</button>
			</div>
		</div>
	);
}
