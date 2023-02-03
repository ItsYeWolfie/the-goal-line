/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

interface NewsHeaderProps {
	activeCategory: string | null;
	dataTofilter: Array<string | null>;
	handleClick: (index: number) => void;
}

export default function NewsHeader({ activeCategory, dataTofilter, handleClick }: NewsHeaderProps) {
	return (
		<div className="flex items-center gap-8 border-b-2 border-gray-500">
			{['All News', 'Champions', 'Transfers'].map((item, index) => (
				<p
					key={item}
					onClick={() => handleClick(index)}
					className={`${
						activeCategory === dataTofilter[index] ? 'border-b-[5px] border-yellow-400  text-yellow-400' : ''
					} h-full cursor-pointer`}
				>
					{item}
				</p>
			))}
		</div>
	);
}
