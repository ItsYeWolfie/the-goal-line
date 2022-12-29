import './style.css';
import './components/utilities/half-horizontal';
import './components/navbar/NavIcon';
import './components/navbar/NavIconHolder';
import './components/navbar/NavItem';

const leaguesList = document.getElementById('league-list');
const leaguesDropdown = document.getElementById('leagues-dropdown');
leaguesDropdown.addEventListener('click', () => {
	leaguesList.classList.toggle('hidden');
	leaguesDropdown.classList.toggle('-rotate-180');
});

const mainLinksEl = document.querySelector('#main-links');
const mainLinks = [
	{
		title: 'Dashboard',
		href: './',
		icon: 'fa-solid fa-table-columns',
		iconAlt: 'Dashboard Icon',
	},
	{
		title: 'Leagues',
		href: './leagues.html',
		icon: 'fa-solid fa-trophy',
		iconAlt: 'Trophy Icon',
	},
	{
		title: 'Matches',
		href: './matches.html',
		icon: 'fa-solid fa-futbol',
		iconAlt: 'Futbol Icon',
	},
	{
		title: 'Stadiums',
		href: './stadiums.html',
		icon: 'fa-solid fa-ring',
		iconAlt: 'Ring Icon',
	},
	{
		title: 'Teams',
		href: './teams.html',
		icon: 'fa-solid fa-users',
		iconAlt: 'Users Icon',
	},
	{
		title: 'Players',
		href: './players.html',
		icon: 'fa-solid fa-user',
		iconAlt: 'User Icon',
	},
];
const mainLinksHTML = mainLinks
	.map(
		(item) => `
						<g-nav-item
							href="${item.href}"
							icon="${item.icon}"
							icon-alt="${item.iconAlt}"
							title="${item.title}"
						>
						</g-nav-item>
						`
	)
	.join('');
mainLinksEl.innerHTML = mainLinksHTML;
