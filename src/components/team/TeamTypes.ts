// Team Main Info
export type Venue = {
	image: string;
	address: string;
	surface: string;
	capacity: number;
} & VenueBasic;

export type VenueBasic = {
	id: number;
	city: string;
	name: string;
};

export type TeamDetails = {
	code: string;
	country: string;
	founded: number;
	national: boolean;
} & TeamBasic;

export type TeamBasic = {
	id: number;
	logo: string;
	name: string;
};

// Team Tabs Info
export type Tab = {
	name: string;
	slug: string;
	html?: any;
};
export type Tabs = Tab[];

// League Info
export type LeagueInfo = {
	id: number;
	flag: string;
	logo: string;
	name: string;
	season: number;
	country: string;
	round: number;
};

// League Standing Info
export type LeagueStandings = SideStandingInfo[] & LeagueInfo;

export type StandingInfo = {
	all: SideStandingInfo;
	away: SideStandingInfo;
	home: SideStandingInfo;
	team: TeamBasic;
	form: string;
	rank: number;
	group: string;
	points: number;
	status: string;
	update: Date;
	goalsDiff: number;
	description: string;
};

export type SideStandingInfo = {
	win: number;
	draw?: number;
	lose: number;
	played: number;
	goals: GoalsScoredOrReceived;
};

export type GoalsScoredOrReceived = {
	for: number;
	against: number;
};

export type SideGoals = {
	home: number | null;
	away: number | null;
};

// Fixture Info
export type Fixtures = Fixture[];

export type Fixture = {
	goals: SideGoals;
	score: {
		penalty: SideGoals;
		fulltime: SideGoals;
		halftime: SideGoals;
		extratime: SideGoals;
	};
	teams: {
		away: FixtureWinner;
		home: FixtureWinner;
	};
	league: LeagueInfo;
	fixture: FixtureInfo;
};

// Include Teambasic and winner:boolean in FixtureType
export type FixtureWinner = {
	winner: boolean;
} & TeamBasic;

export type FixtureInfo = {
	id: number;
	date: Date;
	venue: VenueBasic;
	status: FixtureStatus;
	periods: FixturePeriods;
	referee: string;
	timezone: string;
	timestamp: EpochTimeStamp;
};

export type FixtureStatus = {
	long: string;
	short: string;
	elapsed: number;
};

export type FixturePeriods = {
	first: EpochTimeStamp;
	second: EpochTimeStamp;
};
