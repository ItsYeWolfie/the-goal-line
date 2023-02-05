import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
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
		<div className="relative flex shrink-0 grow-0 basis-5/12 flex-col gap-y-8 rounded-sm py-8 px-4 text-sm dark:bg-gray-800 lg:basis-4/12">
			<img
				className="m-auto h-36 w-36"
				src={team.logo}
				alt={`${team.name} Logo`}
			/>
			<Link
				className="grid grid-cols-12 items-center gap-x-4 rounded-lg p-2 transition-colors hover:bg-gray-300 dark:hover:bg-gray-700"
				to={`/leagues/${league.id}/`}
			>
				<img
					className="col-span-2 rounded-full bg-white"
					src={league.logo}
					alt={league.name}
				/>
				<div className="col-span-6">
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
				<div className="col-span-4 text-right">
					<p className="text-sm font-bold">{league.season}</p>
					<p className="text-xs">Season</p>
				</div>
			</Link>
			<p className="order-last mx-auto max-w-sm" />
			<div className="grid grid-cols-12 gap-y-2 px-2">
				<div className="col-span-12 flex justify-between px-2">
					<span className="items-center text-sm font-medium uppercase text-gray-700 dark:text-gray-300">Founded</span>
					<header className="text-right">{team.founded}</header>
				</div>
				<div className="col-span-12 flex items-center justify-between bg-gray-200 px-2 dark:bg-gray-700">
					<span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-300">League Nation</span>
					<header className="text-right">{team.country}</header>
				</div>
				<div className="col-span-12 flex items-center justify-between px-2">
					<span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-300">Team Code</span>
					<header className="text-right">{team.code}</header>
					{team.national && (
						<div className="flex items-center justify-center">
							<span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-300">National Team</span>
							<FontAwesomeIcon
								icon={faCheckCircle}
								className="block text-right text-xl text-green-500"
							/>
						</div>
					)}
				</div>
				<div className="col-span-12 flex flex-nowrap justify-between overflow-x-auto bg-gray-200 px-2 py-1 dark:bg-gray-700">
					<header className="shrink-0 grow-0 basis-6/12 text-sm font-medium uppercase text-gray-700 dark:text-gray-300">
						Recent Form
					</header>
					<div className="flex flex-nowrap gap-x-1 text-base">
						<FormIconArray array={form.split('')} />
					</div>
				</div>
			</div>
		</div>
	);
}
