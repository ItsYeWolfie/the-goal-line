import '../utilities/half-horizontal';
import './NavIcon';
import './NavIconHolder';
import './NavItem';

class GHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="flex">
        <nav
          class="flex flex-col h-full gap-y-8 basis-[25%] py-8 border-2 border-gray-300 text-center"
        >
          <g-nav-icon-holder>
            <g-nav-icon
              title="Menu"
              icon="fa-solid fa-bars-staggered"
            ></g-nav-icon>
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
            <g-nav-icon
              title="Info"
              icon="fa-solid fa-circle-info"
            ></g-nav-icon>
            <g-nav-icon
              title="Support"
              icon="fa-solid fa-headset"
            ></g-nav-icon>
          </g-nav-icon-holder>
        </nav>
        <aside
          class="bg-gray-100 p-6 flex w-full flex-col gap-10 text-gray-500"
        >
          <header class="flex items-center gap-2">
            <span class="fa-regular fa-paper-plane text-sky-600">
              <span class="sr-only">Logo</span>
            </span>
            <h1 class="text-lg font-medium">The Goal Line</h1>
          </header>
          <section>
            <header class="text-xs uppercase text-gray-400 mb-5">Menu</header>
            <div class="flex flex-col gap-4" id="main-links"></div>
          </section>
          <section id="leagues-section">
            <header
              class="text-xs uppercase text-gray-400 mb-5 flex justify-between items-center"
            >
              <p>Leagues</p>
              <span
                class="fa-solid fa-chevron-down text-xs transition-transform duration-300 ease-in-out transform-gpu h-fit"
                id="leagues-dropdown"
              >
                <span class="sr-only">Expand Icon</span>
              </span>
            </header>
            <div class="flex flex-col gap-2 hidden" id="league-list">
              <a
                class="flex items-center transition-colors duration-500 hover:text-sky-600"
                href="./"
              >
                <img
                  src="https://media.api-sports.io/football/leagues/4.png"
                  alt="Euro 2020"
                  class="w-6 h-6"
                />
                <p class="ml-2">Euro 2020</p>
              </a>
            </div>
          </section>
          <section>
            <header class="text-xs uppercase text-gray-400 mb-5">
              Favorite Club(s)
            </header>
            <div>
              <a
                class="flex items-center transition-colors duration-500 hover:text-sky-600"
                href="./"
              >
                <img
                  src="https://media.api-sports.io/football/teams/33.png"
                  alt="Manchester United"
                  class="w-6 h-6"
                />
                <p class="ml-2">Manchester United</p>
                <i class="fa-solid fa-star text-yellow-400 text-sm ml-auto">
                  <span class="sr-only">Star Icon</span>
                </i>
              </a>
            </div>
          </section>
        </aside>
      </header>
      `;
  }
}

customElements.define('g-header', GHeader);

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
            `,
  )
  .join('');
mainLinksEl.innerHTML = mainLinksHTML;
