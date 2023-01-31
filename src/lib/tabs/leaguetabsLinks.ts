import { ITab } from '../../types/Tab.types';

export const leagueTabs: ITab[] = [
	{
		name: 'Overview',
		slug: 'overview',
		href: '/',
	},
	{
		name: 'Fixtures',
		slug: 'fixtures',
		href: '/fixtures',
	},
	{
		name: 'Player Statistics',
		slug: 'player-statistics',
		href: '/player-statistics',
	},
];

export default leagueTabs;
