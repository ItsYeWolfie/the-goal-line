class TeamTabs extends HTMLElement {
	constructor() {
		super();
		this.tabModel = {
			name: '',
			switchPage() {
				console.log('Switch page');
			},
		};

		this.tabs = [
			{
				...this.tabModel,
				name: 'Fixtures',
			},
			{
				...this.tabModel,
				name: 'Statistics',
			},
			{
				...this.tabModel,
				name: 'Leagues History',
			},
			{
				...this.tabModel,
				name: 'Players',
			},
			{
				...this.tabModel,
				name: 'Transfers',
			},
			{
				...this.tabModel,
				name: 'Standings (Season)',
			},
			{
				...this.tabModel,
				name: 'Coaches',
			},
		];

		this.activeTab = this.tabs[0].name;
	}

	connectedCallback() {
		this.render();
		this.addEventListeners();
	}

	addEventListeners() {
		const tabButtons = this.querySelectorAll('.tab-button');
		tabButtons.forEach((button) => {
			button.addEventListener('click', (e) => {
				this.tabs.forEach((tab) => {
					if (tab.name === button.innerText) {
						tab.switchPage();
					}
				});
				e.preventDefault();
				this.setActiveTab(button.innerText);
				this.render();
			});
		});
	}

	disconnectedCallback() {
		const tabButtons = this.querySelectorAll('.tab-button');
		tabButtons.forEach((button) => {
			button.removeEventListener('click', () => {});
		});
	}

	setActiveTab(tabName) {
		this.activeTab = tabName;
		this.render(); //! Fix bug
	}

	render() {
		this.innerHTML = `
			<div class="sm:hidden">
				<label for="tabs" class="sr-only">Select a tab</label>
				<select
					id="tabs"
					name="tabs"
					class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
				>
					${this.tabs.map(
						(tab) => `
						<option value=${tab.id ? tab.id : tab.name.toLowerCase()}>${tab.name}</option>
					`
					)}
				</select>
			</div>
			<div class="hidden sm:block">
				<div class="border-b border-gray-200">
					<nav
						class="-mb-px flex justify-between items-center flex-wrap px-8"
					>
						${this.tabs
							.map(
								(tab) => `
							<button
								href="#"
								class="${
									tab.name === this.activeTab
										? 'border-indigo-500 text-indigo-600'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
								} p-4 text-center border-b-2 font-medium text-sm tab-button transition-colors duration-300 ease-in-out"
								type="button"
								>${tab.name}</button>`
							)
							.join('')}
					</nav>
				</div>
			</div>
		`;
		this.addEventListeners();
	}
}

customElements.define('team-tabs', TeamTabs);
