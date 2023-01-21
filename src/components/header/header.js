/* eslint-disable no-underscore-dangle */
import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Header extends LitLightElement {
	static get properties() {
		return {
			active: { type: Boolean },
		};
	}

	render() {
		return html` <header class="max-v3-full border-b border-gray-100" id="header-nav">
			<nav
				class="flex w-full flex-wrap items-center justify-between bg-gray-900 py-4 px-4 text-xs text-black md:py-0"
			>
				<div class="ml-[2%] w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2">
					<form>
						<label
							class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
							for="default-search"
							>Search...</label
						>
						<div class="relative">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<svg
									class="h-5 w-5 text-gray-100 dark:text-gray-400"
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									></path>
								</svg>
							</div>
							<input
								class="bord my-4 block h-[25px] w-full rounded-lg bg-gray-400 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-300 dark:text-black dark:placeholder-black dark:focus:border-blue-500 dark:focus:ring-blue-500"
								id="default-search"
								type="search"
								placeholder="Search..."
								required
							/>
						</div>
					</form>
				</div>

				<svg
					class="block h-6 w-6 cursor-pointer md:hidden"
					id="menu-button"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					@click="${this._toggleActive}"
				>
					<path
						class="text-gray-200"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>

				<div
					class=${this.active
						? 'mt-[10px] w-full md:flex  md:w-auto md:items-end'
						: 'mt-[10px] w-full md:flex hidden  md:w-auto md:items-end'}
					id="menu"
				>
					<ul class="pt-4 text-center text-base text-gray-700 md:flex md:justify-between md:pt-0">
						<li>
							<a class="hover:text-black-400 block rounded-xl md:p-4" href="#"
								><button
									class="rounded-[5px] bg-violet-600 px-[14px] py-[4px] text-[14px] text-white"
								>
									Go Premium
								</button>
							</a>
						</li>

						<li>
							<a class="block py-2 text-purple-500 hover:text-purple-400 md:p-4" href="#"
								><button class="py-[4px] text-[20px] text-violet-600">
									<i class="fa-regular fa-moon"></i>
								</button>
							</a>
						</li>
						<li>
							<a class="block py-2 text-purple-500 hover:text-purple-400 md:p-4" href="#"
								><button class="animate-pulse py-[2px] text-[20px] text-violet-600">
									<img
										class="w-8 rounded-full"
										src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
										alt="Avatar"
									/>
								</button>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>`;
	}

	_toggleActive() {
		this.active = !this.active;
	}

	firstUpdated() {
		this.shadowRoot.querySelector('#menu').addEventListener('click', this._toggleActive.bind(this));
	}
}

customElements.define('header-t', Header);
