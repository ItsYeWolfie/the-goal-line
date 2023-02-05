import { GiNewspaper, GiShieldEchoes, GiSoccerBall } from 'react-icons/gi';
import { HiHome } from 'react-icons/hi';

export const navigation = [
	{ name: 'Home', icon: HiHome, href: '/' },
	{ name: 'Matches', icon: GiSoccerBall, href: '/matches' },
	{ name: 'Teams', icon: GiShieldEchoes, href: '/teams' },
	{ name: 'News', icon: GiNewspaper, href: '/news' },
];

export default navigation;
