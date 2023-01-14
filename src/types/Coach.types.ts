import { ITeamBasic } from './Team.types';
import { IHumanBasic } from './General.types';

export interface ICoach extends IHumanBasic {
	firstname: string;
	lastname: string;
	age: number;
	birth: ICoachBirth;
	nationality: string;
	height: null;
	weight: null;
	team: ITeamBasic;
	career: CoachTeamType[];
}

interface ICoachBirth {
	date: Date;
	place: string;
	country: string;
}

type CoachTeamType = ITeamBasic & {
	start: Date;
	end: Date;
};
