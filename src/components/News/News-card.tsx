import { Link } from 'react-router-dom';
import { News } from '../../../types/News.types';

interface NewsProps {
	news: News;
}

export default function NewsCard({ news }: NewsProps) {
	return (
		<Link
			to={`/news/${news.title}`}
			className="flex-none basis-6/12 rounded sm:basis-4/12 lg:basis-3/12"
		>
			<img
				className="rounded-lg"
				src={news.largeImage}
				alt={news.title}
			/>
			<div className="text-left">
				<div className="text-sm text-yellow-500 md:text-xl">{news.league}</div>
				<Link to={`/news/${news.title}`}>
					<div className="mt-2 text-sm font-semibold text-gray-200 md:text-xl">{news.title}</div>
					<div className="mt-1 text-sm text-gray-400 md:text-lg">{news.smallbody}</div>
				</Link>
			</div>
		</Link>
	);
}
