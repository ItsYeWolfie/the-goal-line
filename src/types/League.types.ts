import { ITeamBasic } from './Team.types';

export interface ILeague extends ILeagueBasic {
	round?: string;
	season: number;
}

export interface ILeagueBasic {
	id: number;
	flag: string;
	logo: string;
	name: string;
	country: string;
}

export interface ILeagueWithRound extends ILeague {
	round: string;
}

export interface ILeagueWithSeason extends ILeague {
	season: number;
}

export interface ILeagueWithStanding extends ILeague {
	standings: ILeagueStanding[];
}

export interface ILeagueStanding {
	all: ITeamLeagueStandingStats;
	home: ITeamLeagueStandingStats;
	away: ITeamLeagueStandingStats;
	form: string;
	rank: number;
	team: ITeamBasic;
	group: string;
	points: number;
	status: string;
	update: Date;
	goalsDiff: number;
	description: string | null;
}

interface ITeamLeagueStandingStats {
	win: number;
	draw: number;
	lose: number;
	goals: ITeamSideGoals;
	played: number;
}

export interface ITeamSideGoals {
	for: number;
	against: number;
}
