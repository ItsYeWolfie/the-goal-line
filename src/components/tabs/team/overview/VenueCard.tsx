import { IVenue } from '../../../../../types/Venue.types';

export default function TeamOverviewVenueCard({ venue }: { venue: IVenue }) {
	return (
		<div className="relative basis-6/12 rounded-md bg-gray-700 p-8">
			<header className="mb-4 uppercase text-sky-500">Stadium &rarr;</header>
			<img
				className="mx-auto h-40"
				src={venue.image}
				alt={`${venue.name} stadium`}
			/>
			<header className="text-center">{venue.name}</header>
			<div className="mb-4 flex justify-between text-sm uppercase sm:justify-around">
				<div className="text-left sm:text-center">
					<span className="text-xs font-bold uppercase text-gray-400">Capacity</span>
					<header>{venue.capacity}</header>
				</div>
				<div className="text-right sm:text-center">
					<span className="text-xs font-bold uppercase text-gray-400">City</span>
					<header>{venue.city}</header>
				</div>
			</div>
			<div className="mb-4 flex justify-between text-right text-sm uppercase sm:justify-evenly">
				<div className="text-left sm:text-center">
					<span className="text-xs font-bold uppercase text-gray-400">Surface</span>
					<header>{venue.surface}</header>
				</div>
				<div className="text-right sm:text-center">
					<span className="text-xs font-bold uppercase text-gray-400">Address</span>
					<header>{venue.address}</header>
				</div>
			</div>
		</div>
	);
}
