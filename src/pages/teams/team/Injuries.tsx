import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router';
import { IPlayerInjury } from '../../../types/Player.types';
import TeamInjuriesTable from '../../../components/tabs/team/injuries/Table';
import TeamInjuriesLoader from './loaders/Injuries';

export default function TeamInjuriesPage() {
	const { injuries } = useLoaderData() as { injuries: IPlayerInjury[] };

	return (
		<Suspense fallback={<TeamInjuriesLoader />}>
			<Await resolve={injuries}>
				{(injuriesData: IPlayerInjury[]) => <TeamInjuriesTable injuriesData={injuriesData} />}
			</Await>
		</Suspense>
	);
}
