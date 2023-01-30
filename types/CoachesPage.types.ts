interface Team {
	id: number;
	logo: string;
	name: string;
}

interface Birth {
	date: string;
	place: string;
	country: string;
}

interface Career {
	end: Date | null;
	team: Team;
	start: Date | null;
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
