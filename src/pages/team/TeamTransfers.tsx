import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { ITransferModified } from '../../types/Transfers.type';
import MainLoadingSpinner from '../../components/MainLoadingSpinner';
import PlayerTransfers from '../../components/tabs/team/transfers/PlayerTransfers';

export default function TeamTransfers() {
	const { transfers } = useLoaderData() as { transfers: ITransferModified[] };

	return (
		<Suspense fallback={<MainLoadingSpinner />}>
			<Await resolve={transfers}>{(transfersData) => <PlayerTransfers transfers={transfersData} />}</Await>
		</Suspense>
	);
}
