import { ILeagueWithSeason } from './League.types';
import { IFixtureInfoBasic } from './Fixture.types';

export interface IOdd {
	league: ILeagueWithSeason;
	update: string;
	fixture: IFixtureInfoBasic;
	bookmakers: IBookmark[];
}

interface IBookmark {
	id: number;
	bets: IBet[];
	name: string;
}

interface IBet {
	id: number;
	name: string;
	values: IBetValue[];
}

type BetValues = 'Home' | 'Draw' | 'Away';

interface IBetValue {
	odd: string;
	value: BetValues;
}
