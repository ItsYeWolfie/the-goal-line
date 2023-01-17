import { IHuman } from './General.types';
import { ITeamBasic } from './Team.types';
import { IFixtureInfoBasic } from './Fixture.types';
import { ILeagueWithSeason } from './League.types';

export interface IPlayerWithStatistics extends IHuman {
	player: IPlayerStatistics;
	statistics: IPlayerStatistics[];
}

interface IPlayerStatistics extends IPlayerBasic {
	team: ITeamBasic;
	league: ILeagueWithSeason;
	injured: false;
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

interface IPlayerBasic extends IHuman {
	photo: string;
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

interface IInjuryPlayerData extends IPlayerBasic {
	type: string;
	reason: string;
}
