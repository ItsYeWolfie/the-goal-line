import { useContext, useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { GlobalHeaderContext, IGlobalHeader } from '../../contexts/GlobalHeader.context';
import { ITeamAndVenue } from '../../types/Team.types';
import TeamTabs from './TeamTabs';

export default function TeamMainPage({ team, venue }: ITeamAndVenue) {
	const navigation = useNavigation();
	const { setBreadcrumbs } = useContext<IGlobalHeader>(GlobalHeaderContext);
	const { setTabsComponent } = useContext<IGlobalHeader>(GlobalHeaderContext);
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
		setTabsComponent(<TeamTabs />);
	}, [setTabsComponent]);
	return (
		<section className="flex grow flex-col">
			<section
				className={`container mx-auto shrink-0 grow-0 overflow-y-auto p-2 ${
					navigation.state === 'loading' ? 'animate-pulse opacity-25 transition-opacity duration-300' : ''
				}`}
			>
				<Outlet context={{ team, venue }} />
			</section>
		</section>
	);
}
