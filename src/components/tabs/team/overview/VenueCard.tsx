import { IVenue } from '../../../../../types/Venue.types';

export default function TeamOverviewVenueCard({ venue }: { venue: IVenue }) {
	return (
		<div
			className="relative basis-6/12 rounded-sm bg-gray-700 p-8"
			style={{ backgroundImage: `url(${venue.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
		>
			<div className="flex h-full flex-col justify-between">
				<div className="flex w-max flex-col rounded-md bg-sky-600 bg-opacity-80 px-3 py-2 text-yellow-400">
					<header className="uppercase">{venue.name}</header>
					<p className="text-sm">{venue.city}</p>
				</div>
				<div className="flex items-center justify-around rounded-md bg-gray-800 px-3 py-2">
					<div className="text-center uppercase">
						<header className="text-gray-200">{venue.capacity}</header>
						<span className="text-xs font-bold text-gray-400">Capacity</span>
					</div>
					<div className="text-center uppercase">
						<header className="text-gray-200">{venue.surface}</header>
						<span className="text-xs font-bold text-gray-400">Surface</span>
					</div>
					<div className="text-center uppercase">
						<header className="text-gray-200">{venue.address}</header>
						<span className="text-xs font-bold text-gray-400">Address</span>
					</div>
				</div>
			</div>
		</div>
	);
}
