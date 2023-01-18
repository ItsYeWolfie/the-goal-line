/* eslint-disable promise/always-return */
import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class ClubLogos extends LitLightElement {
	static get properties() {
		return {
			data: { type: Array },
			error: { type: String },
			loading: { type: Boolean },
			scrollingDiv: { type: Object },
		};
	}

	constructor() {
		super();
		this.scrollingDiv = null;
		this.data = [];
		this.error = null;
		this.loading = true;
		fetch('./data/footballclubs.json')
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})

			.then((data) => {
				this.data = data;
				this.loading = false;
			})
			.catch((error) => {
				this.error = error.message;
				this.loading = false;
			});
	}

	updated() {
		this.scrollingDiv = this.shadowRoot.querySelector('#div-s');
	}

	render() {
		if (this.loading) {
			return html`<div>Loading...</div>`;
		}
		if (this.error) {
			return html`<div>Error: ${this.error}</div>`;
		}
		return html` <section class="m-[3%]">
			<div
				class="grid h-[100px] clublogos w-full grid-rows-6 gap-0 text-gray-200 sm:h-[150px] md:h-[150px] lg:h-[180px] xl:h-[180px] 2xl:h-[220px]"
			>
				<div class="relative row-span-1 h-[100%] w-full items-center">
					<i
						class="fa-solid fa-circle-nodes absolute top-[10%] left-[0%] lg:text-2xl lg:top-[5%] text-blue-400"
					>
					</i>
					<span
						class="absolute top-[5%] left-[6%] items-center text-[15px] font-[400] text-gray-200 md:left-[3%] md:text-lg  lg:text-2xl "
					>
						Follow Club</span
					>
					<i
						class="fa-solid fa-arrow-left absolute top-[5%] right-[20%] text-gray-200 sm:right-[9%] md:right-[7%] lg:text-2xl"
						@click="${() => this.scrollLeft()}"
					></i>
					<i
						class="fa-solid fa-arrow-right absolute top-[5%] right-[2%] text-gray-200 lg:text-2xl"
						@click="${() => this.scrollRight()}"
					></i>
				</div>

					<div
						class="no-scrollbar row-span-5 flex h-full w-full flex-nowrap overflow-x-scroll scroll-smooth"
						id="div-s"
					>
          	${this.data.map(
							(item) => html`
						<div
							class="h-full w-[20%] flex-none rounded sm:w-[20%] md:w-[15%] lg:w-[15%] xl:w-[12%]"
						>
							<div
								class="lg-[100%] rounded- relative ml-[5%] mt-[10%] h-[85%] w-[90%] rounded-[100%] bg-gray-900 align-middle"
							>
								<img
									class="absolute top-[17.5%] left-[17.5%] mx-auto h-[65%] w-[65%]"
									src="${item.image}"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		`
						)}
			</div>
		</section>`;
	}

	scrollRight() {
		this.scrollingDiv.scrollLeft += 450;
	}

	scrollLeft() {
		this.scrollingDiv.scrollLeft -= 450;
	}
}
customElements.define('clublogo-s', ClubLogos);
