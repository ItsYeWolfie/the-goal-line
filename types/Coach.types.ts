import { ITeamBasic } from './Team.types';
import { IHuman } from './General.types';

export interface ICoach extends IHuman {
	team: ITeamBasic;
	career: ICoachTeamType[];
}

interface ICoachTeamType {
	start: string | null;
	team: ITeamBasic;
	end: string | null;
}

export interface ICoachTeamHistory {
	coachObject: ICoachObject;
	coachHistory: ICoachTeamType;
}

export interface ICoachObject {
	id: number;
	name: string;
	age: number;
}
