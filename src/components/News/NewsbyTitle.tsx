/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../../lib/helpers/Fetch';
import { News } from '../../../types/News.types';
import Layout from '../Layout/Layout';
import NewsSlider from './News-Slider';

export default function NewsByTitle() {
	const { title } = useParams();
	const [data, setData] = useState<News[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetchData<News[]>('../src/data/news.json')
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				setError(error.message);
			});
	}, []);

	const currentNews = data.find((news) => news.title === title);

	if (!currentNews) {
		return <div>News not found</div>;
	}

	const currentDate = moment().format('MM/DD/YYYY');
	const threeHoursAgo = moment().subtract(3, 'hours').format('hh:mm A');
	return (
		<Layout>
			<div className=" mx-auto h-full w-full gap-[1%] bg-gray-900 pt-[3%] sm:p-[4%] md:grid md:w-[80%] md:grid-cols-5">
				<div className="w-full  md:col-span-5">
					<div className="rounded-[10px] border-[1px] border-gray-400">
						<div className="mx-auto mt-[5%] w-[90%] text-[1.2rem] font-bold text-white sm:text-[1.5rem] md:text-[1.5rem] lg:text-[1.6rem] 2xl:text-[2.3rem]">
							{currentNews.title}
						</div>
						<div className="mt-[3%] flex w-full items-center space-x-4">
							<img
								className=" h-11  w-11 rounded-full md:w-16"
								src="../src/images/news-user.png"
								alt=""
							/>
							<div className="text-[0.8rem] font-medium text-gray-200 2xl:text-[1.5rem]">
								<div>Jese Leos</div>
								<div className="text-[0.8rem] text-gray-200 2xl:text-[1.5rem]">Joined in 2023</div>
							</div>
						</div>
						<div className="mx-auto mt-[1%] h-[250px] w-full sm:h-[300px] md:mx-auto md:h-[350px] md:w-[90%]  lg:h-[350px] 2xl:h-[400px]">
							<img
								className="mx-auto h-full w-full"
								src={`../${currentNews.largeImage}`}
								alt=""
							/>
						</div>
						<div className="relative mt-[1%] w-[100%] text-[0.8rem] text-gray-300 sm:text-[1.1rem]">
							<p className="absolute left-3 text-yellow-400">Date: {currentDate}</p>
							<p className="absolute right-3 text-yellow-400">Time: {threeHoursAgo}</p>
						</div>

						<div className="mx-auto mt-[7%] w-[95%] break-words text-gray-300 sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.8rem]">
							{currentNews.body}
						</div>

						<div className="mt-[3%] h-[350px] w-full 2xl:h-[500px]">
							<img
								className="h-full w-full animate-pulse bg-white opacity-[0.8]"
								src="../src/images/gjirafavideo.jpeg"
								alt=""
							/>
						</div>
						<div className="mx-auto mt-[5%] w-[95%] break-words text-gray-300 sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.8rem]">
							{currentNews.body}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
