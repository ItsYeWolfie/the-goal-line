import { IPlayerWithStatistics } from './Player.types';
import { IEvent } from './Event.types';
import {
	SideGoalsType,
	ScorePeriodsSideGoalsType,
	TeamsSidesType,
	IFixtureInfo,
	IFixtureStatistic,
} from './Fixture.types';
import { ILeague } from './League.types';
import { IHumanBasicWithPhoto, IHumanBasic } from './General.types';
import { ITeamBasic, ITeamBasicWithColors } from './Team.types';

export interface IFormation {
	team: ITeamBasicWithColors;
	coach: IHumanBasicWithPhoto;
	formation: string;
	startXI: { player: IFormationPosition }[];
	substitutes: { player: IFormationPosition }[];
}

export interface IFormationPosition extends IHumanBasic {
	pos: string;
	grid: string;
	number: number;
}

export interface ILineup {
	goals: SideGoalsType;
	score: ScorePeriodsSideGoalsType;
	teams: TeamsSidesType;
	events: IEvent[];
	league: ILeague;
	fixture: IFixtureInfo;
	lineups: IFormation[];
	players: { player: IPlayerWithStatistics; team: ITeamBasic }[];
	statistics: { team: ITeamBasic; statistics: IFixtureStatistic[] }[];
}
