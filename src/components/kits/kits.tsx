import { useState, useEffect } from 'react';
import { FaTshirt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import fetchData from '../../../lib/helpers/Fetch';
import Kit from './kit';
import { IKit } from '../../types/Kit.types';
import SliderLoader from '../index-loaders/SliderLoader';

export default function KitsSlider() {
	const [kit, setKits] = useState<IKit[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [scrollingDiv, setScrollingDiv] = useState<HTMLDivElement | null>(null);

	useEffect(() => {
		setLoading(true);
		fetchData<IKit[]>('src/data/kits.json')
			.then((data) => {
				setKits(data);
				setLoading(false);
			})
			.catch((e) => {
				setError(e.message);
				setLoading(false);
			});
	}, []);

	const scrollLeft = () => {
		if (scrollingDiv) {
			scrollingDiv.scrollLeft -= 400;
		}
	};

	const scrollRight = () => {
		if (scrollingDiv) {
			scrollingDiv.scrollLeft += 400;
		}
	};

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<section className="grid auto-rows-auto gap-4 text-gray-200">
			<div className="row-span-1 flex  items-center justify-between gap-2">
				<div className="flex items-center gap-2">
					<FaTshirt className="text-3xl text-sky-600 dark:text-yellow-400" />
					<span className="text-xl font-medium text-gray-700 dark:text-gray-200">Shopping</span>
				</div>
				<div className="flex items-center gap-8">
					<FaArrowLeft
						className="text-xl text-gray-700 dark:text-gray-200 md:text-2xl"
						onClick={scrollLeft}
					/>
					<FaArrowRight
						className="text-xl text-gray-700 dark:text-gray-200 md:text-2xl"
						onClick={scrollRight}
					/>
				</div>
			</div>
			<div
				className=" no-scrollbar flex flex-nowrap gap-3 overflow-auto scroll-smooth"
				ref={(el) => setScrollingDiv(el)}
			>
				{loading ? (
					<SliderLoader />
				) : (
					kit.map((item) => (
						<Kit
							key={item.id}
							kit={item}
						/>
					))
				)}
			</div>
		</section>
	);
}
