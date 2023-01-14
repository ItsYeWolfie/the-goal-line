import { IHumanBasic } from './General.types';
import { ITeamBasic } from './Team.types';
import { IFixtureInfoBasic } from './Fixture.types';
import { ILeagueWithSeason } from './League.types';

interface IPlayerBasic extends IHumanBasic {
	photo: string;
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
