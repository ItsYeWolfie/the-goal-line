export default function LeagueOverviewReputation({ id }: { id: number }) {
	return (
		<section className="col-span-12 flex flex-col gap-1 overflow-auto sm:col-span-6 lg:h-96 xl:col-span-2">
			<header className="text-xs font-medium uppercase">Competition Reputation</header>
			<div className="overflow-auto">
				{[
					{
						id: 39,
						league: 'Premier League',
						flag: 'https://media.api-sports.io/flags/gb.svg',
						name: 'England',
					},
					{
						id: 140,
						league: 'La Liga',
						flag: 'https://media.api-sports.io/flags/es.svg',
						name: 'Spain',
					},
					{
						id: 135,
						league: 'Serie A',
						flag: 'https://media.api-sports.io/flags/it.svg',
						name: 'Italy',
					},
					{
						id: 78,
						league: 'Bundesliga',
						flag: 'https://media.api-sports.io/flags/de.svg',
						name: 'Germany',
					},
					{
						id: 61,
						league: 'Ligue 1',
						flag: 'https://media.api-sports.io/flags/fr.svg',
						name: 'France',
					},
					{
						id: 2,
						league: 'Liga Portugal',
						flag: 'https://media.api-sports.io/flags/pt.svg',
						name: 'Portugal',
					},
					{
						id: 132,
						league: 'Eredevise',
						flag: 'https://media.api-sports.io/flags/nl.svg',
						name: 'Netherlands',
					},
					{
						id: 141,
						league: 'Austrian Football Bundesliga',
						flag: 'https://media.api-sports.io/flags/at.svg',
						name: 'Austria',
					},
				].map((_league, index) => (
					<div
						key={_league.id}
						className={`${
							_league.id === id && 'bg-green-600 text-white'
						} flex items-center gap-4 overflow-auto rounded-md px-2`}
					>
						<div className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium">{index + 1}</div>
						<div>
							<span className="text-sm font-medium">{_league.league}</span>
							<div className="flex items-center gap-2">
								<img
									src={_league.flag}
									alt={_league.name}
									className="h-4 w-4"
								/>
								<span className="text-xs font-medium text-gray-400">{_league.name}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
