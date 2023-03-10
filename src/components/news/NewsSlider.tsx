import { useState, useEffect, useMemo } from 'react';
import { FaNewspaper, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import fetchData from '../../../lib/helpers/Fetch';
import SliderLoader from '../index-loaders/SliderLoader';
import { INews } from '../../types/News.types';
import NewsCard from './NewsCard';
import NewsHeader from './NewsHeader';

export default function NewsSlider() {
	const [data, setData] = useState<INews[]>([]);
	const [loading, setLoading] = useState(true);
	const [scrollingDiv, setScrollingDiv] = useState<HTMLDivElement | null>(null);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const dataTofilter = useMemo(() => [null, 'Champions', 'Transfer'], []);
	const [originalData, setOriginalData] = useState<INews[]>([]);

	useEffect(() => {
		fetchData<INews[]>('/news.json').then((res) => {
			setOriginalData(res);
			setActiveCategory(dataTofilter[0]);
			if (dataTofilter[0] === null) {
				setData(res);
			}
			setLoading(false);
		});
	}, [dataTofilter]);

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
		<section className="grid auto-rows-auto gap-8 text-gray-200">
			<div className="row-span-1 flex items-center justify-between gap-2">
				<div className="flex items-center gap-2">
					<FaNewspaper className="text-3xl text-sky-600 dark:text-yellow-400 md:text-4xl" />
					<span className="text-xl font-medium text-gray-700 dark:text-gray-200 md:text-2xl">
						All News and Transfers{' '}
					</span>
				</div>
				<div className="flex items-center gap-8">
					<FaArrowLeft
						className="text-xl text-gray-700  dark:text-gray-200 md:text-2xl"
						onClick={scrollLeft}
					/>
					<FaArrowRight
						className="text-xl text-gray-700  dark:text-gray-200 md:text-2xl"
						onClick={scrollRight}
					/>
				</div>
			</div>
			<NewsHeader
				activeCategory={activeCategory}
				dataTofilter={dataTofilter}
				handleClick={handleClick}
			/>
			<div
				className="md:no-scrollbar flex flex-nowrap gap-3 overflow-x-auto scroll-smooth"
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
		</section>
	);
}
