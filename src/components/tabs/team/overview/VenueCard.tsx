import { Link } from 'react-router-dom';
import { IVenue } from '../../../../types/Venue.types';

export default function TeamOverviewVenueCard({ venue }: { venue: IVenue }) {
	return (
		<div
			className="relative h-96 basis-7/12 rounded-sm p-2 md:h-auto md:p-8 lg:basis-8/12"
			style={{ backgroundImage: `url(${venue.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
		>
			<div className="flex h-full flex-col justify-between">
				<Link
					className="flex w-max flex-col rounded-md bg-sky-800 bg-opacity-80 px-3 py-2 text-yellow-300"
					to={`/venue/${venue.id}`}
				>
					<header className="uppercase">{venue.name}</header>
					<p className="text-sm">{venue.city}</p>
				</Link>
				<div className="flex flex-wrap items-center justify-around divide-gray-900 rounded-md bg-gray-200 px-3 py-2 text-center uppercase opacity-80 dark:divide-gray-100 dark:bg-gray-900 sm:divide-x">
					<div className="flex-1 basis-6/12 border-b sm:basis-0 sm:border-b-0">
						<header>{venue.capacity}</header>
						<span className="text-xs font-bold text-gray-700 dark:text-gray-400">Capacity</span>
					</div>
					<div className="flex-1 basis-6/12 border-b sm:basis-0 sm:border-b-0">
						<header>{venue.surface}</header>
						<span className="text-xs font-bold text-gray-700 dark:text-gray-400">Surface</span>
					</div>
					<div className="flex-1 basis-6/12 sm:basis-0">
						<header>{venue.address}</header>
						<span className="text-xs font-bold text-gray-700 dark:text-gray-400">Address</span>
					</div>
				</div>
			</div>
		</div>
	);
}
