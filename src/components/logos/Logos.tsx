import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RiChatFollowUpFill } from 'react-icons/ri';
import { Logos } from '../../../types/Logos.types';
import Logo from './Logo';
import fetchData from '../../../lib/helpers/Fetch';
import SliderLoader from '../Index-Loaders/Slider-Loader';

export default function LogosSlider() {
	const [data, setData] = useState<Logos[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [scrollingDiv, setScrollingDiv] = useState<HTMLDivElement | null>(null);

	useEffect(() => {
		setLoading(true);
		fetchData<Logos[]>('src/data/footballclubs.json')
			.then((res) => {
				setData(res);
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
		<section className="grid auto-rows-auto gap-8 text-gray-200">
			<div className="row-span-1 flex items-center justify-between gap-2">
				<div className="flex items-center gap-2">
					<RiChatFollowUpFill className=" text-4xl text-sky-600 dark:text-yellow-400" />
					<span className="text-2xl font-medium text-gray-700 dark:text-gray-200">Follow any Club!</span>
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
				className="md:no-scrollbar flex flex-nowrap gap-3  overflow-x-auto scroll-smooth"
				id="div-s"
				ref={(el) => setScrollingDiv(el)}
			>
				{loading ? (
					<SliderLoader />
				) : (
					data.map((item) => (
						<Logo
							key={item.id}
							logo={item}
						/>
					))
				)}
			</div>
		</section>
	);
}
