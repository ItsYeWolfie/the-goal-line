import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Statistic extends LitLightElement {
	static properties = {
		statistic: { type: Array },
		loading: { type: Boolean },
	};

	constructor() {
		super();
		this.statistic = [];
		this.loading = true;
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
		const data = await response.json();
		this.statistic = data;
		this.loading = false;
	}

	render() {
		if (this.loading) {
			return html`
				<div
					class="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:flex lg:w-full lg:justify-around"
				>
					<img class="animate-spin" src="../images/icons8-wait.svg" />
				</div>
			`;
		}
		return html`
			<div
				class="flex h-auto w-full flex-col justify-evenly gap-2 rounded-md bg-gray-800 px-8 pt-8 pb-8 md:mx-auto md:w-4/5 md:px-16 lg:mb-4 lg:ml-0 lg:w-full"
			>
				${this.statistic.statistics[0].statistics.map((statistic, index) => {
					let value1 = this.statistic.statistics[0].statistics[index].value;
					let value2 = this.statistic.statistics[1].statistics[index].value;

					if (typeof value1 === 'string' && value1.includes('%')) {
						value1 = parseFloat(value1);
					}
					if (typeof value2 === 'string' && value2.includes('%')) {
						value2 = parseFloat(value2);
					}

					const maxValue = value1 + value2;
					const proportion1 = (value1 / maxValue) * 100;
					const proportion2 = (value2 / maxValue) * 100;

					return html`
						<div class="flex flex-col gap-1">
							<span class="flex justify-between">
								<span class="shrink-0 grow-0"
									>${this.statistic.statistics[0].statistics[index].value || 0}</span
								>
								<div class="block text-center">${statistic.type}</div>
								<span class="shrink-0 grow-0"
									>${this.statistic.statistics[1].statistics[index].value || 0}</span
								>
							</span>
							<span class="flex justify-center">
								<span class="flex h-2 w-full justify-end rounded-md bg-slate-300">
									<span class="rounded-md bg-lime-700" style="width: ${proportion1}%"></span>
								</span>
								<span class="ml-1 flex h-2 w-full rounded-md bg-slate-300">
									<span class="rounded-md bg-sky-500" style="width: ${proportion2}%"></span>
								</span>
							</span>
						</div>
					`;
				})}
			</div>
		`;
	}
}

customElements.define('statistic-f', Statistic);
