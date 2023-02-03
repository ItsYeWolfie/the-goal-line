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

interface IFixtureInfo extends IFixtureInfoBasic {
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

type ScoreNumber = number | null;
export type FixtureSidesType = 'home' | 'away';
type SideGoalsType = Record<FixtureSidesType, ScoreNumber>;
type ScorePeriods = 'halftime' | 'fulltime' | 'extratime' | 'penalty';
type ScorePeriodsSideGoalsType = Record<ScorePeriods, SideGoalsType>;
type FixtureTeamsType = Record<FixtureSidesType, IFixtureTeam>;
