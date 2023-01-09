import { html } from 'lit';
import '../utilities/half-horizontal';
import './NavIcon';
import './NavIconHolder';
import './NavItem';
import { LitLightElement } from '../../lib/LitElement';

class GHeader extends LitLightElement {
	static properties = {
		expandedSidebar: {},
		darkMode: {},
	};

	constructor() {
		super();
		this.darkMode = this.getDarkMode();
		this.classList.add('flex');
		this.expandedSidebar = false;
		this.mainLinks = [
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
	}

	getDarkMode() {
		return (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		);
	}

	toggleDarkMode(toggle) {
		switch (toggle) {
			case 'dark':
				localStorage.theme = 'dark';
				break;
			case 'light':
				localStorage.theme = 'light';
				break;
			default:
				if (document.documentElement.classList.contains('dark')) {
					localStorage.theme = 'dark';
				} else {
					localStorage.theme = 'light';
				}
		}

		document.documentElement.classList.toggle('dark');
		this.darkMode = !this.darkMode;
	}

	connectedCallback() {
		super.connectedCallback();
	}

	render() {
		return html`
			<header
				class="${this.expandedSidebar ? 'w-80' : 'w-16'} flex dark:bg-gray-800"
			>
				<nav
					class="flex h-full shrink-0 grow-0 basis-14 flex-col gap-y-8 border-2 border-gray-300 py-8 text-center"
				>
					<g-nav-icon-holder>
						<button @click="${this.toggleSidebar}">
							<g-nav-icon title="Menu" icon="fa-solid fa-bars-staggered">
							</g-nav-icon>
						</button>
					</g-nav-icon-holder>
					<g-hr-half></g-hr-half>
					<g-nav-icon-holder>
						<g-nav-icon
							title="Trending"
							icon="fa-solid fa-fire-flame-curved"
						></g-nav-icon>
						<g-nav-icon
							title="Location"
							icon="fa-brands fa-safari"
						></g-nav-icon>
						<g-nav-icon
							title="Messages"
							icon="fa-regular fa-envelope"
						></g-nav-icon>
					</g-nav-icon-holder>
					<g-hr-half></g-hr-half>
					<g-nav-icon-holder>
						<g-nav-icon
							title="Football"
							icon="fa-regular fa-futbol"
						></g-nav-icon>
						<g-nav-icon title="World" icon="fa-solid fa-globe"></g-nav-icon>
						<g-nav-icon
							title="Legend"
							icon="fa-solid fa-book-open-reader"
						></g-nav-icon>
						<g-nav-icon
							title="Calendar"
							icon="fa-regular fa-calendar-days"
						></g-nav-icon>
						<g-nav-icon title="Stadiums" icon="fa-solid fa-ring"></g-nav-icon>
					</g-nav-icon-holder>
					<g-hr-half></g-hr-half>
					<g-nav-icon-holder class="mt-auto">
						${this.darkMode
							? html`
									<g-nav-icon
										title="Toggle to Light Mode"
										icon="fa-solid fa-toggle-on"
										@click="${() => this.toggleDarkMode('light')}"
									></g-nav-icon>
							  `
							: html`
									<g-nav-icon
										title="Toggle to Dark Mode"
										icon="fa-solid fa-toggle-off"
										@click="${() => this.toggleDarkMode('dark')}"
									></g-nav-icon>
							  `}
						<g-nav-icon
							title="Info"
							icon="fa-solid fa-circle-info"
						></g-nav-icon>
						<g-nav-icon title="Support" icon="fa-solid fa-headset"></g-nav-icon>
					</g-nav-icon-holder>
				</nav>
				${this.expandedSidebar
					? html`
				<aside
					class="flex w-full flex-col gap-10 bg-gray-100 p-6 text-gray-500"
					id="sidebar-extended"
				>
					<header class="flex items-center gap-2">
						<span class="fa-regular fa-paper-plane text-sky-600">
							<span class="sr-only">Logo</span>
						</span>
						<h1 class="text-lg font-medium">The Goal Line</h1>
					</header>
					<section>
						<header class="mb-5 text-xs uppercase text-gray-400">Menu</header>
						<div class="flex flex-col gap-4">
							${this.mainLinks.map((link) => {
								return html`
									<g-nav-item
										href="${link.href}"
										title="${link.title}"
										icon="${link.icon}"
										icon-alt="${link.iconAlt}"
									>
									</g-nav-item>
								`;
							})}
            </div>
						</div>
					</section>
					<section id="leagues-section">
						<header
							class="mb-5 flex items-center justify-between text-xs uppercase text-gray-400"
						>
							<p>Leagues</p>
							<span
								class="fa-solid fa-chevron-down h-fit transform-gpu text-xs transition-transform duration-300 ease-in-out"
								id="leagues-dropdown"
							>
								<span class="sr-only">Expand Icon</span>
							</span>
						</header>
						<div class="flex hidden flex-col gap-2" id="league-list">
							<a
								class="flex items-center transition-colors duration-500 hover:text-sky-600"
								href="./"
							>
								<img
									class="h-6 w-6"
									src="https://media.api-sports.io/football/leagues/4.png"
									alt="Euro 2020"
								/>
								<p class="ml-2">Euro 2020</p>
							</a>
						</div>
					</section>
					<section>
						<header class="mb-5 text-xs uppercase text-gray-400">
							Favorite Club(s)
						</header>
						<div>
							<a
								class="flex items-center transition-colors duration-500 hover:text-sky-600"
								href="./"
							>
								<img
									class="h-6 w-6"
									src="https://media.api-sports.io/football/teams/33.png"
									alt="Manchester United"
								/>
								<p class="ml-2">Manchester United</p>
								<i class="fa-solid fa-star ml-auto text-sm text-yellow-400">
									<span class="sr-only">Star Icon</span>
								</i>
							</a>
						</div>
					</section>
				</aside>
				`
					: ''}
			</header>
		`;
	}

	toggleSidebar() {
		console.log('clicked');
		this.expandedSidebar = !this.expandedSidebar;
	}
}

customElements.define('g-header', GHeader);
