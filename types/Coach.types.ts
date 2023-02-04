import { ITeamBasic } from './Team.types';
import { IHuman } from './General.types';

export interface ICoach extends IHuman {
	team: ITeamBasic;
	career: ICoachTeamType[];
}

interface ICoachTeamType {
	start: Date;
	team: ITeamBasic;
	end: Date;
}
