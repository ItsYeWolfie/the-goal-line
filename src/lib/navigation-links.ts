import { GiNewspaper, GiShieldEchoes, GiSoccerBall } from 'react-icons/gi';
import { HiHome } from 'react-icons/hi';

export const navigation = [
	{ name: 'Matches', icon: GiSoccerBall, href: '/matches' },
	{ name: 'Teams', icon: GiShieldEchoes, href: '/teams' },
	{ name: 'News', icon: GiNewspaper, href: '/news' },
	{ name: 'Home', icon: HiHome, href: '/' },
];

export default navigation;
