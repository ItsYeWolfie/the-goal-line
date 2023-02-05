export interface ISeason {
	end: Date;
	year: number;
	start: Date;
	current: boolean;
	coverage: ISeasonCoverage;
}

interface ISeasonCoverage {
	odds: boolean;
	players: boolean;
	fixtures: ICoverageFixtures;
	injuries: boolean;
	standings: boolean;
	top_cards: boolean;
	predictions: boolean;
	top_assists: boolean;
	top_scorers: boolean;
}

interface ICoverageFixtures {
	events: boolean;
	lineups: boolean;
	statistics_players: boolean;
	statistics_fixtures: boolean;
}

interface ISeasonCoverage {
	odds: boolean;
	players: boolean;
	fixtures: ICoverageFixtures;
	injuries: boolean;
	standings: boolean;
	top_cards: boolean;
	predictions: boolean;
	top_assists: boolean;
	top_scorers: boolean;
}

interface ICoverageFixtures {
	events: boolean;
	lineups: boolean;
	statistics_players: boolean;
	statistics_fixtures: boolean;
}
