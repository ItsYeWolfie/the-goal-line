import { IEvent } from './Event.types';
import { ILeague } from './League.types';
import { ITeamBasic } from './Team.types';
import { IVenueBasic } from './Venue.types';

enum EFixtureShortStatus {
	FT = 'FT',
	HT = 'HT',
	NS = 'NS',
	P = 'P',
}

enum EFixtureLongStatus {
	MF = 'Match Finished',
	HT = 'Half Time',
	NS = 'Not Started',
}

export interface IFixtureWithEvents extends IFixture {
	events: IEvent[];
}

export interface IFixture {
	goals: SideGoalsType;
	score: ScorePeriodsSideGoalsType;
	teams: FixtureTeamsType;
	league: ILeague;
	fixture: IFixtureInfo;
}

export interface IFixtureMatch {
	fixture: IFixtureInfo;
	teams: FixtureTeamsType;
	goals: SideGoalsType;
}

interface IFixtureTeam extends ITeamBasic {
	winner: boolean;
}

export interface IFixtureInfo extends IFixtureInfoBasic {
	venue: IVenueBasic;
	status: IFixtureStatus;
	periods: IFixturePeriods;
	referee: string;
}

export interface IFixtureInfoBasic {
	id: number;
	timezone: string;
	date: Date;
	timestamp: EpochTimeStamp;
}

interface IFixtureStatus {
	long: EFixtureLongStatus;
	short: EFixtureShortStatus;
	elapsed: number;
}

interface IFixturePeriods {
	fist: EpochTimeStamp;
	second: EpochTimeStamp;
}

export interface IFixtureStatistic {
	type: string;
	value: string;
}

type ScoreNumber = number | null;
export type FixtureSidesType = 'home' | 'away';
export type TeamsSidesType = Record<FixtureSidesType, ITeamBasic>;
export type SideGoalsType = Record<FixtureSidesType, ScoreNumber>;
type ScorePeriods = 'halftime' | 'fulltime' | 'extratime' | 'penalty';
export type ScorePeriodsSideGoalsType = Record<ScorePeriods, SideGoalsType>;
type FixtureTeamsType = Record<FixtureSidesType, IFixtureTeam>;
