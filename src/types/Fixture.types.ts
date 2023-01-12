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

interface IFixtureTeam extends ITeamBasic {
	winner: boolean;
}

interface IFixtureInfo {
	id: number;
	date: Date;
	venue: IVenueBasic;
	status: IFixtureStatus;
	periods: IFixturePeriods;
	referee: string;
	timezone: string;
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
