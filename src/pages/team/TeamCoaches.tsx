import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { ICoach } from '../../types/Coach.types';
import MainLoadingSpinner from '../../components/MainLoadingSpinner';
import TeamCoaches from '../../components/tabs/team/coaches/TeamCoaches';

export default function TeamCoachesPage() {
	const { coaches } = useLoaderData() as { coaches: ICoach[] };

	return (
		<Suspense fallback={<MainLoadingSpinner />}>
			<Await resolve={coaches}>{(coachesData: ICoach[]) => <TeamCoaches coaches={coachesData} />}</Await>
		</Suspense>
	);
}
