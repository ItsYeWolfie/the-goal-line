import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { ITransferModified } from '../../../types/Transfers.type';
import MainLoadingSpinner from '../../../components/MainLoadingSpinner';
import TeamTransfers from '../../../components/tabs/team/transfers/Index';

export default function TeamTransfersPage() {
	const { transfers } = useLoaderData() as { transfers: ITransferModified[] };

	return (
		<Suspense fallback={<MainLoadingSpinner />}>
			<Await resolve={transfers}>{(transfersData) => <TeamTransfers transfers={transfersData} />}</Await>
		</Suspense>
	);
}
