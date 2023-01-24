import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ILeagueWithSeason } from '../../../../types/League.types';
import { ITeam, ITeamStatistics } from '../../../../types/Team.types';
import FormIconArray from '../../../icons/FormIconArray';

export default function TeamOverviewTeamCard({
	team,
	league,
	form,
}: {
	team: ITeam;
	league: ILeagueWithSeason;
	form: ITeamStatistics['form'];
}) {
	return (
		<div className="relative shrink-0 grow-0 rounded-md bg-neutral-700 p-8 text-sm md:basis-6/12">
			<div className="flex flex-col">
				<header className="mb-4 uppercase text-sky-500">Club Details</header>
				<div className="mb-8 flex w-full flex-col gap-4 md:flex-row">
					<img
						className="my-auto h-24 w-24"
						src={team.logo}
						alt={`${team.name} Logo`}
					/>
					<div className="flex flex-col gap-4">
						<div className="flex flex-col flex-wrap gap-4 sm:flex-row lg:gap-8">
							<div>
								<span className="text-xs font-bold uppercase text-neutral-400">Team Name</span>
								<header>{team.name}</header>
							</div>
							<div>
								<span className="text-xs font-bold uppercase text-neutral-400">Founded</span>
								<header>{team.founded}</header>
							</div>
							<div>
								<span className="text-xs font-bold uppercase text-neutral-400">League Nation</span>
								<header>{team.country}</header>
							</div>
						</div>
						<div className="flex flex-col flex-wrap gap-4 sm:flex-row lg:gap-8">
							<div>
								<span className="text-xs font-bold uppercase text-neutral-400">Team Code</span>
								<header>{team.code}</header>
							</div>
							{team.national && (
								<div>
									<span className="text-xs font-bold uppercase text-neutral-400">National Team</span>
									<FontAwesomeIcon
										icon={faCheckCircle}
										className="block text-xl text-green-500"
									/>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="mb-8 flex items-center space-x-16">
					<div className="flex items-center space-x-4">
						<img
							className="h-12 w-12"
							src={league.logo}
							alt={league.name}
						/>
						<div className="flex flex-col">
							<h1 className="font-bold">{league.name}</h1>
							<div className="flex items-center gap-2 text-sm">
								<img
									className="h-4 w-4"
									src={league.flag ? league.flag : league.logo}
									alt={`${league.country}'s flag`}
								/>
								<h2 className="font-bold">{league.country}</h2>
							</div>
						</div>
					</div>
					<div className="md:text-center">
						<p className="text-sm font-bold">{league.season}</p>
						<p className="text-xs">Season</p>
					</div>
				</div>
				<div className="flex flex-col md:text-center">
					<p className="order-last mx-auto max-w-sm">
						<FormIconArray array={form.split('')} />
					</p>
					<p className="text-xs md:mb-2">Recent Form</p>
				</div>
			</div>
		</div>
	);
}
