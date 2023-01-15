/* eslint-disable promise/always-return */
import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Kits extends LitLightElement {
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
		fetch('./data/kits.json')
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
		return html`
			<section class="m-[3%]">
				<div
					class=" grid h-[25vh] w-full grid-rows-6 gap-0 text-gray-200   sm:h-[30vh] md:h-[40vh]"
				>
					<div class="relative row-span-1 h-[100%] w-full items-center">
						<i
							class="fa-solid fa-shirt absolute top-[10%] left-[0%] text-blue-400 lg:top-[5%] lg:text-2xl"
						>
						</i>
						<span
							class="absolute top-[5%] left-[6%] items-center text-[15px] font-[400] text-gray-200 md:left-[3%] md:text-lg  lg:text-2xl "
						>
							Shopping</span
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
						class="no-scrollbar row-span-5  flex h-full w-full  flex-nowrap  overflow-x-scroll  scroll-smooth  "
						id="div-s"
					>
						${this.data.map(
							(item) => html`
								<div
									class=" h-full w-[30%] flex-none rounded sm:w-[25%]  md:w-[25%] lg:w-[20%]"
								>
									<div
										class="mx-auto h-[80%] w-[80%] rounded-[15px] bg-gray-900 align-middle  "
									>
										<img
											class="mx-auto h-[95%] w-full rounded-[15px] pt-[2.5%] "
											src="${item.image}"
											alt=""
										/>
									</div>
									<div
										class="relative mx-auto h-[20%] w-full text-left   text-[10px] text-gray-200 sm:text-[12px] md:text-[13px]  lg:text-[15px]"
									>
										<span
											class="absolute top-[5%] left-[10%] text-[0.55rem] sm:text-[0.7rem] md:text-[0.9rem] 2xl:text-[1.2rem] "
										>
											${item.name}</span
										>
										<span
											class="absolute top-[50%] left-[35%] text-yellow-400 2xl:text-[1.2rem] "
											>$${item.price}
										</span>
									</div>
								</div>
							`
						)}
					</div>
				</div>
			</section>
		`;
	}

	scrollRight() {
		this.scrollingDiv.scrollLeft += 550;
	}

	scrollLeft() {
		this.scrollingDiv.scrollLeft -= 550;
	}
}
customElements.define('kits-s', Kits);
