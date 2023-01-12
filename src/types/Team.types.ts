/* eslint-disable import/no-cycle */
import { FixtureSidesType } from './Fixture.types';
import { ILeagueWithSeason } from './League.types';
import { IVenue } from './Venue.types';

export interface ITeamAndVenue {
	team: ITeam;
	venue: IVenue;
}

interface ITeam extends ITeamBasic {
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
	minute: GoalsDuringMinutesType;
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
type TotalAndPercentageDuringMinutesType = Record<
	FixtureMinutesType,
	ITotalAndPercentage
>;
type CardsDuringMinutesType = Record<
	CardsType,
	TotalAndPercentageDuringMinutesType
>;
type TeamGoalsOnReceivingType = Record<TeamReceivingGoalsType, ITeamGoalsSide>;
interface GoalsDuringMinutesType {
	[key: FixtureMinutesType | string]: {
		total: number;
		percentage: number;
	};
}

type SideInfoStringType = Record<FixtureSidesType, string | null>;
type SideInfoNumberType = Record<FixtureSidesType, number>;
type BiggestGoalsInfoType = Record<TeamReceivingGoalsType, SideInfoNumberType>;
type FixturesStatsTotalType = Record<FixtureStatsType, TeamGoalsTotalType>;
