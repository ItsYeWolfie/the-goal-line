/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from 'react';
import { FaNewspaper, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { News } from '../../../types/News.types';
import fetchData from '../../../lib/helpers/Fetch';
import NewsCard from './News-card';
import NewsHeader from './News-header';
import FixtureLoader from '../Index-Loaders/Fixtures-Loader';
import SliderLoader from '../Index-Loaders/Slider-Loader';

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
			.then((res) => {
				setOriginalData(res);
				setActiveCategory(dataTofilter[0]);
				if (dataTofilter[0] === null) {
					setData(res);
				}
				setLoading(false);
			})
			.catch((e) => {
				setError(e.message);
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
			<div className="grid h-[350px] w-full  gap-[4%] text-gray-200 sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]  ">
				<div className="relative  h-[100%] w-full items-center border-b-4 border-gray-400 ">
					<div className="md:[w-60%] absolute bottom-[-4px] left-[0%]  flex h-[50%] w-[80%] items-start gap-[5%] text-[0.8rem] text-gray-200 md:text-[1rem] xl:text-[1.1rem] ">
						<NewsHeader
							activeCategory={activeCategory}
							dataTofilter={dataTofilter}
							handleClick={handleClick}
						/>
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
					className="no-scrollbar  flex h-full w-full flex-nowrap  gap-[2%]  overflow-x-scroll  scroll-smooth"
					ref={(el) => setScrollingDiv(el)}
				>
					{loading ? (
						<SliderLoader />
					) : (
						data.map((item) => (
							<NewsCard
								key={item.id}
								news={item}
							/>
						))
					)}
				</div>
			</div>
		</section>
	);
}
