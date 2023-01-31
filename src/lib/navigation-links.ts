import { AiFillHome, AiOutlineMessage } from 'react-icons/ai';
import { GiShieldEchoes, GiTrophyCup } from 'react-icons/gi';
import { FaUserFriends } from 'react-icons/fa';

export const navigation = [
	{ name: 'Dashboard', icon: AiFillHome, href: '/' },
	{ name: 'Players', icon: FaUserFriends, href: '/players' },
	{ name: 'Teams', icon: GiShieldEchoes, href: '/teams' },
	{ name: 'Leagues', icon: GiTrophyCup, href: '/leagues' },
	{ name: 'Contact Us', icon: AiOutlineMessage, href: '/contact-us' },
];

export default navigation;
