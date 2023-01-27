import { useState, useEffect } from 'react';
import { FaTshirt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Kits } from '../../../types/Kits.types';
import fetchData from '../../../lib/helpers/Fetch';
import Kit from './kit';

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

	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			<section className="m-[3%] overflow-hidden">
				<div className=" grid h-[190px] w-full grid-rows-6 gap-0 text-gray-200   sm:h-[240px] md:h-[280px] lg:h-[300px]">
					<div className="relative row-span-1 h-[100%] w-full items-center">
						<FaTshirt className=" absolute top-[10%] left-[0%] text-yellow-400 lg:top-[10%] lg:text-2xl" />
						<span className="absolute top-[5%] left-[6%] items-center text-[15px] font-[400] text-gray-200 md:left-[3%] md:text-lg  lg:text-2xl ">
							Shopping
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
						className="no-scrollbar row-span-5  flex h-full w-full  flex-nowrap  overflow-x-scroll  scroll-smooth"
						ref={(el) => setScrollingDiv(el)}
					>
						{kit.map((item) => (
							<Kit
								key={item.id}
								kit={item}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
