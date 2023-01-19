import { ICountry } from './Country.types';
import { FixtureSidesType } from './Fixture.types';
import { ILeagueBasicWithType, ILeagueWithSeason } from './League.types';
import { ISeason } from './Season.types';
import { IVenue } from './Venue.types';

export interface ITeamAndVenue {
	team: ITeam;
	venue: IVenue;
}

export interface ITeam extends ITeamBasic {
	code: string;
	country: string;
	founded: number;
	national: boolean;
}

export interface ITeamBasic {
	id: number;
	logo: string;
	name: string;
}

export interface ITeamStatistics {
	form: string;
	team: ITeamBasic;
	cards: CardsDuringMinutesType;
	goals: TeamGoalsOnReceivingType;
	league: ILeagueWithSeason;
	biggest: ITeamBiggestStats;
	lineups: ITeamLineupStats[];
	penalty: ITeamPenaltyStats;
	fixtures: FixturesStatsTotalType;
	clean_sheet: TeamGoalsTotalType;
	failed_to_score: TeamGoalsTotalType;
}

interface ITeamBiggestStats {
	wins: SideInfoStringType;
	goals: BiggestGoalsInfoType;
	loses: SideInfoStringType;
	streak: IBiggestTeamStreaks;
}

interface ITotalAndPercentage {
	total: number | null;
	percentage: string;
}

interface ITeamGoalsSide {
	total: TeamGoalsTotalType;
	minute: IGoalsDuringMinutesType;
	average: TeamGoalsTotalType;
}

interface IBiggestTeamStreaks {
	wins: number;
	draws: number;
	loses: number;
}

interface ITeamLineupStats {
	played: number;
	formation: string;
}

interface ITeamPenaltyStats {
	total: number;
	missed: ITotalAndPercentage;
	scored: ITotalAndPercentage;
}

interface IGoalsDuringMinutesType {
	[key: FixtureMinutesType | string]: {
		total: number;
		percentage: string;
	};
}

interface ICardsDuringMinutesType {
	[key: FixtureMinutesType | string]: {
		total: number;
		percentage: string;
	};
}

export interface ITeamLeague {
	league: ILeagueBasicWithType;
	country: ICountry;
	seasons: ISeason[];
}

type FixtureMinutesType =
	| '0-15'
	| '16-30'
	| '31-45'
	| '46-60'
	| '61-75'
	| '76-90'
	| '91-105'
	| '106-120';

type TeamReceivingGoalsType = 'for' | 'against';
type CardsType = 'yellow' | 'red';
type TotalGoalsSide = FixtureSidesType | 'total';
type FixtureStatsType = 'wins' | 'draws' | 'loses' | 'played';

type TeamGoalsTotalType = Record<TotalGoalsSide, number>;

type CardsDuringMinutesType = Record<CardsType, ICardsDuringMinutesType>;
type TeamGoalsOnReceivingType = Record<TeamReceivingGoalsType, ITeamGoalsSide>;
type SideInfoStringType = Record<FixtureSidesType, string | null>;
type SideInfoNumberType = Record<FixtureSidesType, number>;
type BiggestGoalsInfoType = Record<TeamReceivingGoalsType, SideInfoNumberType>;
type FixturesStatsTotalType = Record<FixtureStatsType, TeamGoalsTotalType>;
