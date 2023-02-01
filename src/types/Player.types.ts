import { IHuman, IHumanBasic } from './General.types';
import { ITeamBasic } from './Team.types';
import { IFixtureInfoBasic } from './Fixture.types';
import { ILeagueWithSeason } from './League.types';
import { ITransferDetails } from './Transfers.type';
import { ITrophy } from './Trophy.types';
import { ISideline } from './Sidelines.types';

export interface IPlayerWithStatistics {
	player: IPlayer;
	statistics: IPlayerStatistics[];
}

interface IPlayer extends IHuman {
	photo: string;
	injured: boolean;
}

export interface IPlayerModified {
	player: IPlayer;
	statistics: IPlayerStatistics[];
	transfers: ITransferDetails[];
	injuries: IPlayerInjury[];
	trophies: ITrophy[];
	sidelines: ISideline[];
}

export interface IPlayerStatistics {
	team: ITeamBasic;
	league: ILeagueWithSeason;
	games: IPlayerGamesStats;
	substitutes: IPlayerSubstitutesStats;
	shots: IPlayerShotsStats;
	goals: IPlayerGoalsStats;
	passes: IPlayerPassesStats;
	tackles: IPlayerTacklesStats;
	duels: IPlayerDuelsStats;
	dribbles: IPlayerDribblesStats;
	fouls: IPlayerFoulsStats;
	cards: IPlayerCardsStats;
	penalty: IPlayerPenaltiesStats;
}

interface IPlayer extends IHumanBasic {
	age: number;
	firstname: string;
	lastname: string;
	photo: string;
	injured: boolean;
}

interface IPlayerGamesStats {
	number: null;
	rating: string | null;
	captain: boolean;
	lineups: number;
	minutes: number;
	appearences: number;
	position: string;
}

interface IPlayerSubstitutesStats {
	in: number;
	out: number;
	bench: number;
}

interface IPlayerCardsStats {
	yellow: number;
	yellowred: number;
	red: number;
}

interface IPlayerDuelsStats {
	won: number | null;
	total: number | null;
}

interface IPlayerFoulsStats {
	drawn: number | null;
	committed: number | null;
}

interface IPlayerGoalsStats {
	saves: number | null;
	total: number;
	assists: number | null;
	conceded: number | null;
}

interface IPlayerShotsStats {
	total: number | null;
	on: number | null;
}

interface IPlayerPassesStats {
	total: number | null;
	key: number | null;
	accuracy: number | null;
}

interface IPlayerPenaltiesStats {
	won: number | null;
	commited: number | null;
	scored: number | null;
	missed: number | null;
	saved: number | null;
}

interface IPlayerTacklesStats {
	total: number | null;
	blocks: number | null;
	interceptions: number | null;
}

interface IPlayerDribblesStats {
	attempts: number | null;
	success: number | null;
	past: number | null;
}

export interface IPlayerInjury {
	player: IInjuryPlayerData;
	team: ITeamBasic;
	fixture: IFixtureInfoBasic;
	league: ILeagueWithSeason;
}

interface IInjuryPlayerData extends IPlayer {
	type: string;
	reason: string;
}
