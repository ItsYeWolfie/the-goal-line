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
			// console.log(data);
		}
	
		render() {
			if (this.loading) {
				return html`
					<div
						class="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:ml-40 lg:flex lg:w-full lg:justify-around"
					>
						<img src="../images/icons8-wait.svg" class="animate-spin">
					</div>
				`;
			}
			return html`<div
			class="mb-4 flex h-auto w-full flex-col justify-evenly rounded-md bg-gray-800 pt-4 pb-4 md:ml-20 md:w-4/5 lg:ml-40 lg:w-full"
		>
		 ${this.statistic.statistics[0].statistics.map((statistic1,index1) => 
				this.statistic.statistics[1].statistics.map((statistic2,index2) => 
				html`
				<span class="flex justify-evenly"
				><span>${statistic1.value}</span>
				<div class="block w-[68%] text-center lg:w-[50%] ">${statistic1.type}</div>
				<span>${statistic2.value}</span></span
			>
			<span class="flex justify-center">
				<span
					class="flex h-2 w-44 justify-end rounded-md bg-slate-300 md:w-72 lg:w-72"
				>
					<span class="w-${statistic1.value} rounded-md bg-lime-700"></span>
				</span>
				<span
					class="ml-1 flex h-2 w-44 rounded-md bg-slate-300 md:w-72 lg:w-72"
				>
					<span class="w-${statistic2.value} rounded-md bg-sky-500"></span>
				</span>
			</span>`
			))}
		</div>`;
	}
}

customElements.define('statistic-f', Statistic);
