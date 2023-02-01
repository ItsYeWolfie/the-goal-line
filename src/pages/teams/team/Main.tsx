import { useContext, useEffect } from 'react';
import { Outlet, useNavigation, useParams } from 'react-router-dom';
import HeaderTabs from '../../../components/tabs/HeaderTabs';
import { GlobalHeaderContext, IGlobalHeader } from '../../../contexts/GlobalHeader.context';
import teamTabs from '../../../lib/tabs/TeamTabsLinks';
import { ITeamAndVenue } from '../../../types/Team.types';

export default function TeamMainPage({ team, venue }: ITeamAndVenue) {
	const navigation = useNavigation();
	const { teamID } = useParams();
	const { setBreadcrumbs, setTabsComponent } = useContext<IGlobalHeader>(GlobalHeaderContext);
	useEffect(() => {
		setBreadcrumbs([
			{
				href: '/teams',
				name: 'Teams',
			},
			{
				href: `/team/${team.id}`,
				name: (
					<div className="flex items-center">
						<img
							className="mr-2 h-6 w-6 rounded-full"
							src={team.logo}
							alt={team.name}
						/>
						{team.name}
					</div>
				),
			},
		]);

		return () => {
			setBreadcrumbs([]);
		};
	}, [team, setBreadcrumbs]);

	useEffect(() => {
		setTabsComponent(
			<HeaderTabs
				dir="teams"
				params={teamID}
				tabs={teamTabs}
			/>,
		);

		return () => {
			setTabsComponent(null);
		};
	}, [setTabsComponent, teamID]);
	return (
		<section
			className={`${navigation.state === 'loading' && 'animate-pulse opacity-25 transition-opacity duration-300'}`}
		>
			<Outlet context={{ team, venue }} />
		</section>
	);
}
