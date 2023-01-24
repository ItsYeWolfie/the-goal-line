/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect } from 'react';
import { FaNewspaper, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { News } from '../../../types/News.types';
import fetchData from '../../../lib/helpers/Fetch';
import NewsCard from './News-card';

export default function NewsSlider() {
	const [data, setData] = useState<News[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [scrollingDiv, setScrollingDiv] = useState<HTMLDivElement | null>(null);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const dataTofilter = [null, 'Champions', 'Transfer'];
	const [originalData, setOriginalData] = useState<News[]>([]);

	useEffect(() => {
		setLoading(true);
		fetchData<News[]>('src/data/news.json')
			.then((data) => {
				setOriginalData(data);
				setActiveCategory(dataTofilter[0]);
				if (dataTofilter[0] === null) {
					setData(data);
				}
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);

	const scrollLeft = () => {
		if (scrollingDiv) {
			scrollingDiv.scrollLeft -= 600;
		}
	};

	const scrollRight = () => {
		if (scrollingDiv) {
			scrollingDiv.scrollLeft += 600;
		}
	};

	const handleClick = (index: number) => {
		setActiveCategory(dataTofilter[index]);
		if (dataTofilter[index] === null) {
			setData(originalData);
		} else {
			const filteredData = originalData.filter((news) => news.category === dataTofilter[index]);
			setData(filteredData);
		}
	};

	return (
		<section className="m-[3%] mt-[6%]">
			<div className="grid-rows-10 grid h-[350px] w-full gap-[4%] text-gray-200 sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]  ">
				<div className="relative row-span-4 h-[100%] w-full items-center border-b-4 border-gray-400 ">
					<div className="md:[w-60%] absolute bottom-[-4px] left-[0%]  flex h-[50%] w-[80%] items-start gap-[5%] text-[0.8rem] text-gray-200 md:text-[1rem] xl:text-[1.1rem] ">
						<p
							onClick={() => handleClick(0)}
							className={`${
								activeCategory === dataTofilter[0] ? 'border-b-[5px] border-yellow-400 text-yellow-400 ' : ''
							} h-full cursor-pointer`}
						>
							All News
						</p>
						<p
							onClick={() => handleClick(1)}
							className={`${
								activeCategory === dataTofilter[1] ? 'border-b-[5px] border-yellow-400 text-yellow-400 ' : ''
							} h-full cursor-pointer`}
						>
							Champions
						</p>
						<p
							onClick={() => handleClick(2)}
							className={`${
								activeCategory === dataTofilter[2] ? 'border-b-[5px] border-yellow-400 text-yellow-400 ' : ''
							} h-full cursor-pointer`}
						>
							Transfers
						</p>
					</div>

					<FaNewspaper className=" absolute left-[0%] text-yellow-400 lg:text-2xl" />
					<span className="absolute left-[6%] items-center text-[14px] font-[400] text-gray-200 md:left-[3%] md:text-lg lg:text-xl">
						All News and Transfer Today
					</span>
					<FaArrowLeft
						className=" absolute top-[5%] right-[20%] text-gray-200 sm:right-[9%] md:right-[7%] lg:text-2xl"
						onClick={scrollLeft}
					/>
					<FaArrowRight
						className=" absolute top-[5%] right-[2%] text-gray-200 lg:text-2xl"
						onClick={scrollRight}
					/>
				</div>
				<div
					className="no-scrollbar row-span-5  flex h-full w-full flex-nowrap  gap-[2%]  overflow-x-scroll  scroll-smooth"
					ref={(el) => setScrollingDiv(el)}
				>
					{data.map((item) => (
						<NewsCard
							key={item.id}
							news={item}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
