import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class StatisticsTable extends LitLightElement {
	static properties = {
		loading: {},
		filteredFixtures: {},
	};

	constructor() {
		super();
		this.loading = true;
	}
   
  
	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch(
			' https://api.npoint.io/d071534ebb4c70ecfe8f'
		);
        const data = await response.json();
        this.statistics = data;
		this.loading = false;
        console.log(this.statistics);
        
		this.leagues = this.statistics.map((statistic) => {
			const { league } = statistic;
			return league;
		});
		

		this.leagues = this.leagues.filter((league, index, self) => {
			return self.findIndex((l) => l.id === league.id) === index;
		});
	
		this.selectedLeague = -1;
		this.filteredStatistics = this.filterStatistics();
	}
    filterStatistics() {
		return this.statistics.filter((statistic) => {
			if (this.selectedLeague === -1) return true;
			return statistic.league.id === this.selectedLeague;
		});
	}
	

	render() {
		return html`
			<div class="align-center mb-8 flex items-center justify-between text-white">
				<div class="flex items-center gap-4">
					<div>
						<label class="mb-1 block pl-3 text-sm font-medium text-gray-100"
							>Select League</label
						>
						<select
							class="bg-gray-800"
							@change="${(e) => {
								if (this.loading) return;
								this.selectedLeague = Number(e.target.value);
								this.filteredStatistics = this.filterStatistics();
							}}"
						>
							<option value="${-1}">None</option>

							${!this.loading &&
							this.leagues.map((league) => {
								return html`
									<option value="${league.id}">${league.name}</option>
								`;
							})}
						</select>
					</div>
				</div>
				
				</div>
				`;				
	}
}

customElements.define('statistics-table', StatisticsTable);
