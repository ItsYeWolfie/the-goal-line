import { useState, useEffect, useMemo } from 'react';
import { FaNewspaper, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { News } from '../../../types/News.types';
import fetchData from '../../../lib/helpers/Fetch';
import NewsCard from './News-card';
import NewsHeader from './News-header';
import SliderLoader from '../Index-Loaders/Slider-Loader';

export default function NewsSlider() {
	const [data, setData] = useState<News[]>([]);
	const [loading, setLoading] = useState(true);
	const [scrollingDiv, setScrollingDiv] = useState<HTMLDivElement | null>(null);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const dataTofilter = useMemo(() => [null, 'Champions', 'Transfer'], []);
	const [originalData, setOriginalData] = useState<News[]>([]);

	useEffect(() => {
		fetchData<News[]>('src/data/news.json').then((res) => {
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
					<FaNewspaper className="text-4xl text-yellow-400" />
					<span className="text-2xl text-gray-200">Follow any Club!</span>
				</div>
				<div className="flex items-center gap-8">
					<FaArrowLeft
						className="text-2xl text-gray-200"
						onClick={scrollLeft}
					/>
					<FaArrowRight
						className="text-2xl text-gray-200"
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
				className="md:no-scrollbar flex flex-nowrap gap-8 overflow-x-auto scroll-smooth"
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
