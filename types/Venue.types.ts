export interface IVenue extends IVenueBasic {
	image: string;
	address: string;
	surface: string;
	capacity: number;
}

export interface IVenueBasic {
	id: number;
	city: string;
	name: string;
	country: string;
}
