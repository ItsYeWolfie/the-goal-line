/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
import { TeamStatistics } from '../../../types/Standings-Main.types';

interface Props {
	item: TeamStatistics;
}
export default function StandingsTableRow({ item }: Props) {
	return (
		<tr
			key={item.team.id}
			className={`${
				item.rank > 6 ? 'bg-slate-900' : item.rank <= 4 ? 'bg-blue-900' : 'bg-red-900'
			} border-b-[2px] border-gray-400 bg-opacity-[0.7]`}
		>
			<td className="pl-4">{item.rank}</td>
			<td className="flex whitespace-nowrap px-6 py-4">
				<img
					className="h-5 w-5"
					src={item.team.logo}
					alt=""
				/>
				<span className="ml-2 font-medium">{item.team.name}</span>
			</td>
			<td className="whitespace-nowrap px-6 py-4">{item.all.played}</td>
			<td className="whitespace-nowrap px-6 py-4">{item.all.win}</td>
			<td className="whitespace-nowrap px-6 py-4">{item.all.draw}</td>
			<td className="whitespace-nowrap px-6 py-4">{item.all.lose}</td>
			<td className="whitespace-nowrap px-6 py-4">{item.home.goals.for + item.away.goals.for}</td>
			<td className="whitespace-nowrap px-6 py-4">{item.home.goals.against + item.away.goals.against}</td>
			<td className="whitespace-nowrap px-6 py-4">{item.goalsDiff}</td>
			<td className="whitespace-nowrap px-6 py-4">{item.points}</td>
			<td className="flex whitespace-nowrap px-6 py-4">
				{item.form.split('').map((char, index) => {
					if (char === 'W') {
						return (
							<svg
								key={index}
								className="w-4 fill-current text-green-600"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
						);
					}
					if (char === 'D') {
						return (
							<svg
								key={index}
								className="w-4 fill-current text-gray-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
									clipRule="evenodd"
								/>
							</svg>
						);
					}
					if (char === 'L') {
						return (
							<svg
								key={index}
								className="w-4 fill-current text-red-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
									clipRule="evenodd"
								/>
							</svg>
						);
					}
				})}
				<svg
					className="w-4 fill-current text-red-500"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
						clipRule="evenodd"
					/>
				</svg>
			</td>
		</tr>
	);
}
