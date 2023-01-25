import { AiFillHome, AiOutlineMessage } from 'react-icons/ai';
import { GiShieldEchoes } from 'react-icons/gi';

export const navigation = [
	{ name: 'Dashboard', icon: AiFillHome, href: '/' },
	{ name: 'Teams', icon: GiShieldEchoes, href: '/teams' },
	{ name: 'Contact Us', icon: AiOutlineMessage, href: '/contact-us' },
];

export default navigation;
