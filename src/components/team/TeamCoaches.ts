import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
import { fetchData } from '../../lib/helpers/Fetch';
import { ICoach } from '../../types/Coach.types';

@customElement('team-coaches')
class TeamCoaches extends LitLightElement {
	@property({ type: Boolean }) public loading = true;

	@property({ type: Number }) public activeCoach: ICoach | null = null;

	@property({ type: Array }) coaches: ICoach[] = [];

	async connectedCallback() {
		super.connectedCallback();
		this.coaches = await fetchData<ICoach[]>('https://api.npoint.io/62712e4d8cdc5074390e');
		this.loading = false;
	}

	toggleDropdown(coach: ICoach) {
		if (this.activeCoach?.id === coach.id) {
			this.activeCoach = null;
		} else {
			this.activeCoach = coach;
		}
	}

	render() {
		return html`
			<div class="flex gap-4">
				${this.coaches.map(
					(coach) => html`
						<div
							class="relative flex basis-1/2 flex-col space-x-3 rounded-lg border border-gray-600 px-6 py-5 shadow-sm transition-all duration-700 ease-in-out focus-within:ring-2 focus-within:ring-gray-500 focus-within:ring-offset-2 hover:border-gray-400"
						>
							<div class="min-w-0">
								<span class="absolute inset-0" aria-hidden="true"></span>
								<a class="text-sm font-medium" href="#">
									${coach.firstname} ${coach.lastname} - ${coach.nationality}
								</a>
								<p class="truncate text-sm text-gray-500">
									${coach.weight ? `${coach.weight} kg` : ''} -
									${coach.height ? `${coach.height} cm` : ''} ${coach.age} years old
								</p>
								<p class="mb-4 truncate text-sm text-gray-500">
									Born on ${coach.birth.date} in ${coach.birth.place}, ${coach.birth.country}
								</p>

								<div class="flex items-center space-x-2 text-sm text-gray-500">
									<p class="truncate text-sm text-gray-500">Coach at: ${coach.team.name}</p>
									<img class="h-5 w-5 rounded-full" src="${coach.team.logo}" alt="" />
								</div>
							</div>
							<button
								class="${this.activeCoach?.id === coach.id
									? '-rotate-180'
									: ''} absolute bottom-0 right-0 p-1 text-gray-400 transition-all duration-700 ease-in-out hover:text-gray-500"
								@click=${() => this.toggleDropdown(coach)}
							>
								<span class="sr-only">View details for ${coach.firstname} ${coach.lastname}</span>
								<svg
									class="m-auto h-5 w-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M6.293 7.293a1 1 0 011.414 0L12 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
							<div
								class="${this.activeCoach?.id === coach.id
									? 'max-h-40'
									: 'opacity-0 max-h-0'} overflow-hidden text-gray-400 transition-all duration-700 ease-in-out"
							>
								${coach.career.map((career) => {
									return html`
										<div class="flex items-center space-x-2 text-sm text-gray-500">
											<p class="truncate text-sm text-gray-500">
												${career.team.name} - ${career.start} -
												${career.end ? career.end : 'Present'}
											</p>
											<img class="h-6 w-6" src="${career.team.logo}" alt="" />
										</div>
									`;
								})}
							</div>
						</div>
					`
				)}
			</div>
		`;
	}
}

export default TeamCoaches;
