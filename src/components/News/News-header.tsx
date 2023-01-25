/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

interface NewsHeaderProps {
	activeCategory: string | null;
	dataTofilter: Array<string | null>;
	handleClick: (index: number) => void;
}

export default function NewsHeader({ activeCategory, dataTofilter, handleClick }: NewsHeaderProps) {
	return (
		<>
			<p
				onClick={() => handleClick(0)}
				className={`${
					activeCategory === dataTofilter[0] ? ' border-b-[5px] border-yellow-400  text-yellow-400 ' : ''
				} h-full cursor-pointer`}
			>
				All News
			</p>
			<p
				onClick={() => handleClick(1)}
				className={`${
					activeCategory === dataTofilter[1] ? ' border-b-[5px] border-yellow-400  text-yellow-400 ' : ''
				} h-full cursor-pointer`}
			>
				Champions
			</p>
			<p
				onClick={() => handleClick(2)}
				className={`${
					activeCategory === dataTofilter[2] ? ' border-b-[5px] border-yellow-400  text-yellow-400 ' : ''
				} h-full cursor-pointer`}
			>
				Transfers
			</p>
		</>
	);
}
