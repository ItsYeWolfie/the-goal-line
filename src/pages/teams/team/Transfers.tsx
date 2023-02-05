import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { ITransferModified } from '../../../types/Transfers.type';
import TeamTransfers from '../../../components/tabs/team/transfers/Index';
import TeamTransfersPageLoading from './loaders/Transfers';

export default function TeamTransfersPage() {
	const { transfers } = useLoaderData() as { transfers: ITransferModified[] };

	return (
		<Suspense fallback={<TeamTransfersPageLoading />}>
			<Await resolve={transfers}>{(transfersData) => <TeamTransfers transfers={transfersData} />}</Await>
		</Suspense>
	);
}
