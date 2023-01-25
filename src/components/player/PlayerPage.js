import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
import './Overview';
import './TrophiesPage';
import './Sidelines';



class PlayerPage extends LitLightElement {
	static properties = {
	
		activeTab: {},
		
	};

	constructor() {
		super();
		this.loading = true;
		this.classList.add('container', 'mx-auto', 'p-8');
		const url = new URL(window.location.href);
		
		this.tabs = [
			{
				name: 'Overview',
				slug: 'overview',
				html: html`
					<overview-page></overview-page>
				`,
			},
			{
				name: 'Trophies',
				slug: 'trophies',
				html: html`
					<trophies-page></trophies-page>
				`,
				
			},
			{
				name: 'Injuries',
				slug: 'injuries',
			},
			{
				name: 'Sidelines',
				slug: 'sidelines',
				html: html`
					<sidelines-p></sidelines-p>
				`,
			},
			{
				name: 'Transfers',
				slug: 'transfers',
			},
		
		];

	

		this.slug = url.searchParams.get('tab') || this.tabs[1].slug;
		this.activeTab = this.slug;
	}



	setActiveTab(tabName) {
		this.activeTab = tabName;
		const url = new URL(window.location.href);
		url.searchParams.set(
			'tab',
			this.tabs.find((tab) => tab.slug === tabName).slug
		);
		window.history.pushState({}, '', url);
	}

	render() {
		return html`
					<section class="relative grid grid-cols-12">
						<div class="col-span-9 px-8">
							<div class="sm:hidden">
								<label class="sr-only" for="tabs">Select a tab</label>
								<select
									class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
									id="tabs"
									name="tabs"
								>
									${this.tabs.map(
										(tab) => html`
											<option value=${tab.id ? tab.id : tab.name.toLowerCase()}>
												${tab.name}
											</option>
										`
									)}
								</select>
							</div>
							<div class="hidden sm:block">
								<nav
									class="-mb-px flex flex-wrap items-center justify-between border-b border-gray-500"
								>
									${this.tabs.map(
										(tab) => html` <button
											class="${tab.slug === this.activeTab
												? 'border-indigo-400 text-indigo-500'
												: 'border-transparent text-gray-200 hover:text-gray-400 hover:border-gray-300'} tab-button border-b-2 p-4 text-center text-sm font-medium transition-colors duration-300 ease-in-out"
											type="button"
											href="#"
											@click="${() => this.setActiveTab(tab.slug)}"
										>
											${tab.name}
										</button>`
									)}
								</nav>
							</div>
							<section class="py-8">
								${
									this.tabs.find((tab) => tab.slug === this.activeTab).html
										? this.tabs.find((tab) => tab.slug === this.activeTab).html
										: html`<p>Coming Soon</p>`
								}
							</section>
						</div>
						`;
			
	}
}

customElements.define('player-page', PlayerPage);
