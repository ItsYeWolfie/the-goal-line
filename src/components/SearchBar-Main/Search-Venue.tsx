import { FiChevronsRight } from 'react-icons/fi';
import { IVenue } from '../../../types/Venue.types';

interface SearchVenueResultProps {
	venue: IVenue;
}

export default function SearchVenueResult({ venue }: SearchVenueResultProps) {
	return (
		<div className="mt-[2%] flex h-[47px] w-full items-center md:h-[54px] ">
			<div className="h-full w-[15%] rounded-[10px]  md:w-[10%] ">
				<img
					src={venue.image}
					alt="a"
					className="m-auto mt-[5%]  h-[90%] w-[90%] "
				/>
			</div>
			<div className="grid h-full w-[70%] grid-rows-2 overflow-hidden md:w-[75%] ">
				<div className="flex h-full items-end pl-[2%] text-[20px]">{venue.name}</div>
				<div className="flex h-full items-end pl-[2%] text-[15px] text-gray-200">
					{venue.city}: {venue.country}
				</div>
			</div>
			<div className="h-full w-[10%] ">
				<FiChevronsRight className=" mx-auto mt-[22%] text-[25px] text-gray-200  md:mt-[10%]  md:text-[25px]" />
			</div>
		</div>
	);
}