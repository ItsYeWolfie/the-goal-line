export interface IHumanBasic {
	id: number;
	name: string;
}
export interface IHuman extends IHumanBasic {
	firstname: string;
	lastname: string;
	age: number;
	birth: IHumanBirth;
	nationality: string;
	height: null;
	weight: null;
}

interface IHumanBirth {
	date: Date;
	place: string;
	country: string;
}
