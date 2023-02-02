import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
import { IFixture } from '../../../types/Fixture.types';
import TeamFixtures from '../../../components/tabs/team/fixtures/Index';
import TeamFixturesPageLoader from './loaders/Fixtures';

export default function TeamFixturesPage() {
	const { fixtures } = useLoaderData() as { fixtures: IFixture[] };

	return (
		<Suspense fallback={<TeamFixturesPageLoader />}>
			<Await resolve={fixtures}>
				{(teamFixturesData: IFixture[]) => <TeamFixtures teamFixtures={teamFixturesData} />}
			</Await>
		</Suspense>
	);
}
