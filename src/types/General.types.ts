import { ILeagueBasicWithType } from './League.types';
import { ICountry } from './Country.types';

export interface IHumanBasicWithPhoto extends IHumanBasic {
	photo: string;
}

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

export interface ILeagueFixturesSearchForm {
	teamId: number;
	date: string;
	referee: string;
	status: 'FT' | 'PST' | 'NS' | 'All';
}

export interface ILeagueAndCountry {
	league: ILeagueBasicWithType;
	country: ICountry;
}
