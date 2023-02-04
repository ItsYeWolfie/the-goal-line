import { useState, useEffect } from 'react';
import { FaTshirt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Kits } from '../../../types/Kits.types';
import fetchData from '../../../lib/helpers/Fetch';
import Kit from './kit';
import SliderLoader from '../Index-Loaders/Slider-Loader';

export default function KitsSlider() {
	const [kit, setKits] = useState<Kits[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [scrollingDiv, setScrollingDiv] = useState<HTMLDivElement | null>(null);

	useEffect(() => {
		setLoading(true);
		fetchData<Kits[]>('src/data/kits.json')
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
					<FaTshirt className="text-4xl text-sky-600 dark:text-yellow-400" />
					<span className="text-2xl font-medium text-gray-700 dark:text-gray-200">Shopping</span>
				</div>
				<div className="flex items-center gap-8">
					<FaArrowLeft
						className="text-2xl text-gray-700 dark:text-gray-200"
						onClick={scrollLeft}
					/>
					<FaArrowRight
						className="text-2xl text-gray-700 dark:text-gray-200"
						onClick={scrollRight}
					/>
				</div>
			</div>
			<div
				className=" no-scrollbar flex flex-nowrap gap-3 overflow-x-auto scroll-smooth"
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
