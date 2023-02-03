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
				<div className="text-xl text-yellow-500">{news.league}</div>
				<Link to={`/news/${news.title}`}>
					<div className="mt-2 text-xl font-semibold text-gray-200">{news.title}</div>
					<div className="mt-1 text-gray-400">{news.smallbody}</div>
				</Link>
			</div>
		</Link>
	);
}
