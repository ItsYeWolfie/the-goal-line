export interface IVenue extends IVenueBasic {
	image: string;
	address: string;
	surface: string;
	capacity: number;
	country: string;
}

export interface IVenueBasic {
	id: number;
	city: string;
	name: string;
}
