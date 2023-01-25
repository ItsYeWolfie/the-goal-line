import { useContext, useEffect } from 'react';
import { GlobalHeaderContext, IGlobalHeader } from '../contexts/GlobalHeader.context';

export default function IndexPage() {
	const { setTabsComponent, setBreadcrumbs } = useContext<IGlobalHeader>(GlobalHeaderContext);

	useEffect(() => {
		setBreadcrumbs([]);
	}, [setBreadcrumbs]);

	useEffect(() => {
		setTabsComponent(null);
	}, [setTabsComponent]);

	return (
		<div>
			<h1>Index Page</h1>
		</div>
	);
}
