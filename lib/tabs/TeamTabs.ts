import { ITab } from '../../types/Tab.types';

export const teamTabs: ITab[] = [
	{
		name: 'Overview',
		slug: 'overview',
		href: './',
	},
	{
		name: 'Fixtures',
		slug: 'fixtures',
		href: './fixtures',
	},
	{
		name: 'Players',
		slug: 'players',
		href: './players',
	},
	{
		name: 'Transfers',
		slug: 'transfers',
		href: './transfers',
	},
	{
		name: 'Standings',
		slug: 'standings',
		href: './standings',
	},
	{
		name: 'Coaches',
		slug: 'coaches',
		href: './coaches',
	},
	{
		name: 'Injuries',
		slug: 'injuries',
		href: '/injuries',
	},
];

export default teamTabs;
