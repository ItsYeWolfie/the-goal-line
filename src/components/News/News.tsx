/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-template-curly-in-string */
import moment from 'moment';
import { useEffect, useState } from 'react';
import { fetchData } from '../../../lib/helpers/Fetch';
import { News } from '../../../types/News.types';
import NewsHeader from './News-header';
import RelatedNews from './Related-News';

export default function NewsPage() {
	const [data, setData] = useState<News[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const dataTofilter = [null, 'Champions', 'Transfer'];
	const [originalData, setOriginalData] = useState<News[]>([]);
	const [currentData, setCurrentData] = useState<News | null>(null);

	useEffect(() => {
		setLoading(true);
		fetchData<News[]>('src/data/news.json')
			.then((data) => {
				setOriginalData(data);
				setCurrentData(data[0]);
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

	const handleClick = (index: number) => {
		setActiveCategory(dataTofilter[index]);
		if (dataTofilter[index] === null) {
			setData(originalData);
		} else {
			const filteredData = originalData.filter((news) => news.category === dataTofilter[index]);
			setData(filteredData);
		}
	};

	const handleReadMore = (id: number) => {
		const selectedData = originalData.find((item) => item.id === id);
		if (selectedData) {
			setCurrentData(selectedData);
		}
		window.scrollTo(0, 0);
	};

	const currentDate = moment().format('MM/DD/YYYY');
	const threeHoursAgo = moment().subtract(3, 'hours').format('hh:mm A');

	return (
		<div className="bg-slate-900">
			<section className="m-[3%] mt-0 pt-[6%]">
				<div className="relative h-[50px]  w-full md:h-[70px]">
					<div className="absolute left-[0%] bottom-[20%] flex h-[80%] w-[90%] items-center gap-[3%]">
						<NewsHeader
							activeCategory={activeCategory}
							dataTofilter={dataTofilter}
							handleClick={handleClick}
						/>
					</div>
				</div>
				<div className="h-auto w-full gap-[1%] bg-slate-900 md:grid md:grid-cols-5">
					<div className="w-full md:col-span-3">
						<div className="rounded-[10px] border-[1px] border-gray-400">
							<div className="mx-auto mt-[5%] w-[90%] text-[1.2rem] font-bold text-white sm:text-[1.5rem] md:text-[1.5rem] lg:text-[1.6rem] 2xl:text-[2.3rem]">
								{currentData?.title}
							</div>
							<div className="mt-[3%] flex w-full items-center space-x-4">
								<img
									className=" xl:w-15  h-11 w-11 rounded-full"
									src="src/images/news-user.png"
									alt=""
								/>
								<div className="text-[0.8rem] font-medium text-gray-200 2xl:text-[1.5rem]">
									<div>Jese Leos</div>
									<div className="text-[0.8rem] text-gray-200 2xl:text-[1.5rem]">Joined in 2023</div>
								</div>
							</div>
							<div className="mt-[1%] h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px] 2xl:h-[500px]">
								<img
									className="mx-auto h-full w-full"
									src={currentData?.largeImage}
									alt=""
								/>
							</div>
							<div className="relative mt-[1%] w-[100%] text-[0.8rem] text-gray-300 sm:text-[1.1rem]">
								<p className="absolute left-3 text-yellow-400">Date: {currentDate}</p>
								<p className="absolute right-3 text-yellow-400">Time: {threeHoursAgo}</p>
							</div>

							<div className="mx-auto mt-[7%] w-[95%] break-words text-gray-300 sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.8rem]">
								{currentData?.body}
							</div>

							<div className="mt-[3%] h-[300px] w-full 2xl:h-[450px]">
								<img
									className="h-full w-full animate-pulse bg-white opacity-[0.8]"
									src="src/images/gjirafa.png"
									alt=""
								/>
							</div>
							<div className="mx-auto mt-[5%] w-[95%] break-words text-gray-300 sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.8rem]">
								{currentData?.body}
							</div>
							<div className="mt-[5%] h-[300px] w-full 2xl:h-[450px]">
								<img
									className="h-full w-full animate-pulse bg-white opacity-[0.8]"
									src="src/images/Bne.jpeg"
									alt=""
								/>
							</div>
							<div className="mt-[5%] hidden h-[300px] w-full sm:block 2xl:h-[450px]">
								<img
									className="h-full w-full bg-white opacity-[0.8]"
									src="src/images/gjirafavisa.png"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="w-full md:col-span-2">
						<div className="my-[5%] h-[150px] w-full text-white sm:mt-[5%] sm:h-[240px] md:mt-[0%] md:h-[200px] 2xl:h-[300px]">
							<img
								className="newsImg mx-auto h-full w-[90%] rounded-[10px] opacity-[0.9]"
								src="src/images/gjirafamall.jpeg"
								alt=""
							/>
						</div>
						<div className="rounded-[10px] border-[1px] border-gray-400">
							<div className="w-full border-b-[1px] border-gray-400 text-lg text-white">
								<p className="py-[2%] pl-[4%] text-[1rem] sm:text-[1.4rem]">Related News</p>
							</div>
							{data.map((item) => (
								<RelatedNews
									key={item.id}
									relatednews={item}
									handleReadMore={handleReadMore}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
