interface Team {
	id: number;
	logo: string;
	name: string;
}

interface Birth {
	date: string | null;
	place: string;
	country: string;
}

interface Career {
	end: Date;
	team: Team;
	start: Date;
}

export interface ICoaches {
	id: number;
	age: number;
	name: string;
	team: Team;
	birth: Birth;
	photo: string;
	career: Career[];
	height?: number | null;
	weight?: number | null;
	lastname: string;
	firstname: string;
	nationality: string;
}
