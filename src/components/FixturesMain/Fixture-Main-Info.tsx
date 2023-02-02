import { FootballMatch } from '../../../types/Fixture-Main.types';

interface FixturesMainInfoProps {
	match: FootballMatch;
	hoverdMatchId: number | null;
}

export default function FixtureMainInfo({ match, hoverdMatchId }: FixturesMainInfoProps) {
	return (
		<div
			className={`absolute top-[-150px] right-[-90%] z-[10] ${
				match.fixture.id === hoverdMatchId ? '' : 'hidden'
			} h-[250px] w-[350px] overflow-hidden rounded-[20px] bg-slate-700 `}
			id={`modal-info-${match.fixture.id}`}
		>
			<div className="grid h-full w-full grid-cols-2">
				<div className="h-full w-full">
					<p className="3xl:text-[25px] my-[5%] ml-[5%] w-[90%] text-center  font-semibold">{match.teams.home.name}</p>
					<img
						className="mx-auto h-[100px] w-[100px]"
						src={match.teams.home.logo}
						alt=""
					/>
				</div>
				<div className="h-full w-full">
					<p className="relative my-[5%] ml-[5%] w-[90%] text-center text-[18px]  font-semibold">
						{match.teams.away.name}
					</p>
					<img
						className="mx-auto h-[100px] w-[100px]"
						src={match.teams.away.logo}
						alt=""
					/>
					<div className="relative flex w-full items-center ">
						<img
							className="absolute left-[-80px] top-[10px] h-[25px]  w-[25px]"
							src={match.league.logo}
							alt=""
						/>
						<p className="absolute left-[-50px] top-[10px] mr-[3%] font-semibold text-white">{match.league.name}</p>
						<p className="absolute left-[-70px] top-[40px] font-semibold text-white">{match.league.round}</p>
						<p className="absolute right-[7px] top-[80px]  font-semibold">{match.fixture.status.long}</p>
						<p className="absolute left-[-160px]  top-[80px]  font-semibold">{match.league.country}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
