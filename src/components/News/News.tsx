/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import { fetchData } from '../../../lib/helpers/Fetch';
import { GlobalHeaderContext, IGlobalHeader } from '../../contexts/GlobalHeader.context';
import { INews } from '../../types/News.types';
import NewsHeader from './NewsHeader';
import RelatedNews from './RelatedNews';

export default function NewsPage() {
	const [data, setData] = useState<INews[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const dataTofilter = [null, 'Champions', 'Transfer'];
	const [originalData, setOriginalData] = useState<INews[]>([]);
	const [currentData, setCurrentData] = useState<INews | null>(null);
	const { setBreadcrumbs } = useContext<IGlobalHeader>(GlobalHeaderContext);

	useEffect(() => {
		setBreadcrumbs([
			{
				name: 'News',
				href: '/news',
			},
		]);

		return () => {
			setBreadcrumbs([]);
		};
	}, [setBreadcrumbs]);
	useEffect(() => {
		setLoading(true);
		fetchData<INews[]>('src/data/news.json')
			.then((res) => {
				setOriginalData(res);
				setCurrentData(res[0]);
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
		<div className="">
			<section className=" mt-0  md:m-[3%] md:mt-1 ">
				{loading ? (
					<Bars
						height="80"
						width="80"
						color="#4fa94d"
						ariaLabel="bars-loading"
						wrapperStyle={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100vh',
							width: '100%',
						}}
						wrapperClass=""
						visible
					/>
				) : (
					<>
						<div className="relative mb-4 w-full">
							<div className=" flex items-center gap-[3%]">
								<NewsHeader
									activeCategory={activeCategory}
									dataTofilter={dataTofilter}
									handleClick={handleClick}
								/>
							</div>
						</div>
						<div className="h-auto w-full gap-[1%] md:grid md:grid-cols-5">
							<div className="w-full md:col-span-3">
								<div className="rounded-[10px] border-[1px] border-gray-400">
									<div className="mx-auto mt-[5%] w-[90%] text-[1.2rem] font-bold text-gray-900 dark:text-white sm:text-[1.5rem] md:text-[1.5rem] lg:text-[1.6rem] 2xl:text-[2.3rem]">
										{currentData?.title}
									</div>
									<div className="mt-[3%] flex w-full items-center space-x-4">
										<img
											className="  h-11 w-11 rounded-full"
											src="/news-user.png"
											alt=""
										/>
										<div className="text-[0.8rem] font-medium text-gray-700 dark:text-gray-200 2xl:text-[1.5rem]">
											<div>Jese Leos</div>
											<div className="text-[0.8rem] text-gray-700 dark:text-gray-200 2xl:text-[1.5rem]">
												Joined in 2023
											</div>
										</div>
									</div>
									<div className="mt-[1%] h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px] 2xl:h-[500px]">
										<img
											className="mx-auto h-full w-full"
											src={currentData?.largeImage}
											alt=""
										/>
									</div>
									<div className=" mt-[1%] grid w-[100%] grid-cols-2 sm:text-[1.1rem]">
										<p className=" col-span-1 w-full justify-start px-3 text-violet-800 dark:text-yellow-400">
											Date: {currentDate}
										</p>
										<p className="col-span-1 w-full px-3 text-right text-violet-800 dark:text-yellow-400">
											Time: {threeHoursAgo}
										</p>
									</div>

									<div className="mx-auto mt-[7%] w-[95%] break-words text-gray-700 dark:text-gray-300 sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.8rem]">
										{currentData?.body}
									</div>

									<div className="mt-[3%] h-[300px] w-full 2xl:h-[450px]">
										<img
											className="h-full w-full  bg-white opacity-100 dark:opacity-[0.8]"
											src="/gjirafa.png"
											alt=""
										/>
									</div>
									<div className="mx-auto mt-[5%] w-[95%] break-words dark:text-gray-300 sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.8rem]">
										{currentData?.body}
									</div>
									<div className="mt-[5%] h-[300px] w-full 2xl:h-[450px]">
										<img
											className="h-full w-full animate-pulse bg-white opacity-[0.8]"
											src="/Bne.jpeg"
											alt=""
										/>
									</div>
									<div className="mt-[5%] hidden h-[300px] w-full sm:block 2xl:h-[450px]">
										<img
											className="h-full w-full bg-white opacity-[0.8]"
											src="/gjirafavisa.png"
											alt=""
										/>
									</div>
								</div>
							</div>
							<div className="w-full md:col-span-2">
								<div className="my-[5%] h-[150px] w-full text-white sm:mt-[5%] sm:h-[240px] md:mt-[0%] md:h-[200px] 2xl:h-[300px]">
									<img
										className="newsImg mx-auto h-full w-[90%] rounded-[10px] opacity-[0.9]"
										src="/gjirafamall.jpeg"
										alt=""
									/>
								</div>
								<div className="rounded-[10px] border-[1px] border-gray-400">
									<div className="w-full border-b-[1px] border-gray-400 text-lg text-gray-900 dark:text-white">
										<p className="py-[2%] pl-[4%] text-[1rem] sm:text-[1.4rem] ">Related News</p>
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
					</>
				)}
			</section>
		</div>
	);
}
