import { faFutbol, faNewspaper, faPeopleGroup, faPhone } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ErrorLink {
	title: string;
	description: string;
	icon: IconProp;
	href: string;
}

export const errorLinks: ErrorLink[] = [
	{
		title: 'Matches',
		description: 'Find latest matches of your favorite team and get the latest data.',
		icon: faFutbol,
		href: '/matches',
	},
	{
		title: 'Teams',
		description: 'Find your favorite team and get the latest data.',
		icon: faPeopleGroup,
		href: '/teams',
	},
	{
		title: 'News',
		description: 'Find latest news about your favorite team.',
		icon: faNewspaper,
		href: '/news',
	},
	{
		title: 'Contact',
		description: 'If the problem persists, please contact us.',
		icon: faPhone,
		href: '/contact-us',
	},
];

export default errorLinks;
