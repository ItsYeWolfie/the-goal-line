import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { ICoach } from '../../../types/Coach.types';
import TeamCoaches from '../../../components/tabs/team/coaches/Index';
import TeamCoachesLoader from './loaders/Coaches';

export default function TeamCoachesPage() {
	const { coaches } = useLoaderData() as { coaches: ICoach[] };

	return (
		<Suspense fallback={<TeamCoachesLoader />}>
			<Await resolve={coaches}>{(coachesData: ICoach[]) => <TeamCoaches coaches={coachesData} />}</Await>
		</Suspense>
	);
}
