import { GiTrophy } from 'react-icons/gi';

export default function StandingMainHeader() {
	return (
		<div className="flex items-center gap-2">
			<GiTrophy className="rounded-full text-4xl text-violet-500  dark:text-yellow-400" />
			<header className="flex text-2xl font-bold text-gray-700 dark:text-gray-200">Standings</header>
		</div>
	);
}
