import { useContext, useEffect } from 'react';
import { GlobalHeaderContext } from '../../contexts/GlobalHeader.context';

export default function LeaguesIndex() {
	const { setBreadcrumbs } = useContext(GlobalHeaderContext);

	useEffect(() => {
		setBreadcrumbs([
			{
				name: 'Leagues',
				href: '/leagues',
			},
		]);

		return () => {
			setBreadcrumbs([]);
		};
	}, [setBreadcrumbs]);

	return <div>Leagues</div>;
}
