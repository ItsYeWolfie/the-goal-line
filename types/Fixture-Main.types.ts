interface Goals {
	away: number;
	home: number;
}

interface PenaltyScore {
	away: number | null;
	home: number | null;
}

interface FulltimeScore {
	away: number;
	home: number;
}

interface HalftimeScore {
	away: number;
	home: number;
}

interface ExtratimeScore {
	away: number | null;
	home: number | null;
}

interface Score {
	penalty: PenaltyScore;
	fulltime: FulltimeScore;
	halftime: HalftimeScore;
	extratime: ExtratimeScore;
}

interface Team {
	id: number;
	logo: string;
	name: string;
	winner: boolean;
}

interface League {
	id: number;
	flag: string;
	logo: string;
	name: string;
	round: string;
	season: number;
	country: string;
}

interface Venue {
	id: number;
	city: string;
	name: string;
}

interface Status {
	long: string;
	short: string;
	elapsed: number;
}

interface Periods {
	first: number;
	second: number;
}

interface Fixture {
	id: number;
	date: Date;
	venue: Venue;
	status: Status;
	periods: Periods;
	referee: string;
	timezone: string;
	timestamp: number;
}

export interface FootballMatch {
	goals: Goals;
	score: Score;
	teams: {
		away: Team;
		home: Team;
	};
	league: League;
	fixture: Fixture;
}
