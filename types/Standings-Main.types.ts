interface Team {
	id: number;
	logo: string;
	name: string;
}
interface Goals {
	for: number;
	against: number;
}
interface AllStatistics {
	win: number;
	draw: number;
	lose: number;
	goals: Goals;
	played: number;
}
interface AwayStatistics {
	win: number;
	draw: number;
	lose: number;
	goals: Goals;
	played: number;
}
interface HomeStatistics {
	win: number;
	draw: number;
	lose: number;
	goals: Goals;
	played: number;
}
export interface TeamStatistics {
	id: Key | null | undefined;
	all: AllStatistics;
	away: AwayStatistics;
	form: string;
	home: HomeStatistics;
	rank: number;
	team: Team;
	group: string;
	points: number;
	status: string;
	update: string;
	goalsDiff: number;
	description: string;
}
