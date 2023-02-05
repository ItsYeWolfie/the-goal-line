import { IHumanBasic } from './General.types';
import { ITeamBasic } from './Team.types';

export interface IEvent {
	team: ITeamBasic;
	time: {
		extra: null;
		elapsed: number;
	};
	type: string;
	assist: {
		id: null;
		name: null;
	};
	detail: string;
	player: IHumanBasic;
	comments: null;
}
