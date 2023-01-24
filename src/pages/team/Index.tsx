import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ITeamAndVenue } from '../../types/Team.types';
import TeamTabs from './TeamTabs';
import MainBreadCrumb from '../../components/breadcrumb/MainBreadCrumb';
import { BreadcrumbContext, IBreadcrumbContext } from '../../contexts/Breadcrumb.context';

export default function TeamIndex() {
	const { team, venue } = useLoaderData() as ITeamAndVenue;
	const navigation = useNavigation();

	const { setBreadcrumbs } = useContext<IBreadcrumbContext>(BreadcrumbContext);

	useEffect(() => {
		setBreadcrumbs([
			{
				href: '/teams',
				name: 'Teams',
			},
			{
				href: `/team/${team.id}`,
				name: team.name,
			},
		]);
	}, [team.id, team.name, setBreadcrumbs]);

	useEffect(() => {
		document.title = `${team.name} - The Goal Line`;
		document.body.classList.add('overflow-y-scroll');

		return () => {
			document.body.classList.remove('overflow-y-scroll');
		};
	}, [team.name]);

	return (
		<section className="container mx-auto rounded-lg bg-neutral-800 py-2 md:px-8">
			<MainBreadCrumb />
			<TeamTabs />
			<section
				className={`py-8 ${
					navigation.state === 'loading' ? 'animate-pulse opacity-25 transition-opacity duration-300' : ''
				}`}
			>
				<Outlet context={{ team, venue }} />
			</section>
		</section>
	);
}
