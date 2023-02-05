import { Link } from 'react-router-dom';
import { INews } from '../../types/News.types';

export default function NewsCard({ news }: { news: INews }) {
	return (
		<div className="flex-none basis-6/12 rounded sm:basis-4/12 lg:basis-[25%] ">
			<Link to={`/news/${news.title}`}>
				<img
					className="rounded-lg"
					src={news.largeImage}
					alt={news.title}
				/>
			</Link>
			<div className="text-left">
				<div className="text-sm text-violet-600 dark:text-yellow-500 md:text-base">{news.league}</div>
				<Link to={`/news/${news.title}`}>
					<div className="mt-2  text-sm font-semibold  text-gray-700 dark:text-gray-200  md:text-lg">{news.title}</div>
					<div className="mt-1 text-xs text-gray-600 dark:text-gray-300 md:text-lg">{news.smallbody}</div>
				</Link>
			</div>
		</div>
	);
}
