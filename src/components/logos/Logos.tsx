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
		<section className="m-[3%]">
			<div className=" grid h-[100px] w-full grid-rows-6 gap-0 text-gray-200 sm:h-[150px] md:h-[150px] lg:h-[180px] xl:h-[180px] 2xl:h-[220px]">
				<div className="relative row-span-1 h-[100%] w-full items-center">
					<RiChatFollowUpFill className=" absolute top-[10%] left-[0%] text-yellow-400 lg:top-[10%] lg:text-2xl" />
					<span className="absolute top-[5%] left-[6%] items-center text-[15px] font-[400] text-gray-200 md:left-[3%] md:text-lg  lg:text-2xl ">
						Follow Club
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
					className="no-scrollbar row-span-5 flex h-full w-full flex-nowrap overflow-x-scroll scroll-smooth"
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
			</div>
		</section>
	);
}
