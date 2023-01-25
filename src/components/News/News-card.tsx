import { Link } from 'react-router-dom';
import { News } from '../../../types/News.types';

interface NewsProps {
	news: News;
}

export default function NewsCard({ news }: NewsProps) {
	return (
		<div className="h-full w-[50%] flex-none  rounded sm:w-[35%] md:w-[35%] lg:w-[26%]">
			<div className="mx-auto h-[60%] w-[100%]  rounded-[15px] bg-gray-900 align-middle">
				<Link to={`/news/${news.title}`}>
					<img
						className="mx-auto h-[100%] w-full rounded-[15px]"
						src={news.largeImage}
						alt=""
					/>
				</Link>
			</div>

			<div className="h-[40%] w-full text-left">
				<div className="mb-[5%] h-[10%] w-full  text-[0.6rem] text-yellow-500 sm:text-[0.8rem]    md:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.5rem]   ">
					{news.league}
				</div>
				<Link to={`/news/${news.title}`}>
					<div className="h-[40%] w-full text-[0.7rem] font-semibold text-gray-200 sm:text-[0.8rem]  md:text-[1rem]  xl:text-[1.1rem] 2xl:text-[1.4rem] ">
						{news.title}
					</div>
					<div className="h-[35%] w-full text-[0.6rem] text-gray-400 sm:text-[0.8rem] md:text-[1rem] xl:text-[1rem] 2xl:text-[1.3rem] ">
						{news.smallbody}
					</div>
				</Link>
			</div>
		</div>
	);
}
