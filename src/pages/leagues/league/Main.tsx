import { useContext, useEffect } from 'react';
import { Outlet, useNavigation, useParams } from 'react-router-dom';
import HeaderTabs from '../../../components/tabs/HeaderTabs';
import { GlobalHeaderContext } from '../../../contexts/GlobalHeader.context';
import leagueTabs from '../../../lib/tabs/leaguetabsLinks';
import { ILeagueData } from '../../../types/League.types';

export default function LeagueMain({ league }: { league: ILeagueData }) {
	const { setTabsComponent, setBreadcrumbs } = useContext(GlobalHeaderContext);
	const { leagueID } = useParams<{ leagueID: string }>();
	const navigation = useNavigation();
	useEffect(() => {
		setTabsComponent(
			<HeaderTabs
				params={leagueID}
				dir="leagues"
				tabs={leagueTabs}
			/>,
		);

		return () => {
			setTabsComponent(null);
		};
	}, [setTabsComponent, leagueID]);
	useEffect(() => {
		setBreadcrumbs([
			{
				name: (
					<div className="flex gap-2">
						<img
							src={league.league.logo}
							alt={league.league.name}
							className="h-6 w-6 rounded-full bg-white object-cover"
						/>
						<span>{league.league.name}</span>
					</div>
				),
				href: `/leagues/${league.league.name}`,
			},
		]);

		return () => {
			setBreadcrumbs([]);
		};
	}, [league, setBreadcrumbs]);

	return (
		<section
			className={`${navigation.state === 'loading' ? 'animate-pulse opacity-25 transition-opacity duration-300' : ''}`}
		>
			<Outlet context={{ league }} />
		</section>
	);
}
