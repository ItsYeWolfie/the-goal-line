import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { useEffect } from 'react';
import { ITeamAndVenue } from '../../../types/Team.types';
import TeamTabs from './TeamTabs';

export default function TeamIndex() {
	const { team, venue } = useLoaderData() as ITeamAndVenue;
	const navigation = useNavigation();

	useEffect(() => {
		document.title = `${team.name} - The Goal Line`;
		document.body.classList.add('overflow-y-scroll');
	}, [team]);

	return (
		<section className="container mx-auto p-2 sm:p-8 md:px-8">
			<TeamTabs />
			<section
				className={`py-8 ${
					navigation.state === 'loading'
						? 'animate-pulse opacity-25 transition-opacity duration-300'
						: ''
				}`}
			>
				<Outlet context={{ team, venue }} />
			</section>
		</section>
	);
}
