import LeagueOverviewTopStatistics from './TopStatistics';

export default function LeagueOverviewTopPlayersGrid() {
	return (
		<section className="col-span-12 grid grid-cols-12 items-start justify-start md:col-span-12 xl:col-start-5">
			<header className="col-span-12 text-xs font-medium uppercase">Player Stats &rarr;</header>
			<div className="col-span-12 grid grid-cols-12 gap-8 px-1 py-2">
				<LeagueOverviewTopStatistics
					url="https://api.npoint.io/85ea319f8ea05af3e11d"
					title="Goals"
					type="goals"
				/>
				<LeagueOverviewTopStatistics
					url="https://api.npoint.io/f071335311dda656b656"
					title="Assists"
					type="assists"
				/>
				<LeagueOverviewTopStatistics
					url="https://api.npoint.io/4b3f817285714aaf9f87"
					title="Yellow Cards"
					type="yellowCards"
				/>
				<LeagueOverviewTopStatistics
					url="https://api.npoint.io/e703a80403f01ca5408b"
					title="Red Cards"
					type="redCards"
				/>
			</div>
		</section>
	);
}
