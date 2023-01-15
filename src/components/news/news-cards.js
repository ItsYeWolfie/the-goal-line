/* eslint-disable promise/always-return */
import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class NewsCards extends LitLightElement {
	static get properties() {
		return {
			data: { type: Array },
			filterData: { type: Array },
			error: { type: String },
			loading: { type: Boolean },
			scrollingDiv: { type: Object },
		};
	}

	constructor() {
		super();
		this.scrollingDiv = null;
		this.data = [];
		this.filteredData = [];
		this.error = null;
		this.loading = true;
		fetch('./data/news.json')
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})

			.then((data) => {
				console.log(data);
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
			<section class="m-[3%] mt-[6%]">
				<div
					class="grid-rows-10 grid h-[40vh] w-full gap-[4%] text-gray-200 sm:h-[48vh] md:h-[55vh] lg:h-[55vh] xl:h-[60vh]  "
				>
					<div
						class="relative row-span-4 h-[100%] w-full items-center border-b-2"
					>
						<div
							class="md:[w-60%] absolute bottom-0 left-[0%] flex h-[50%] w-[80%] items-center gap-[5%] text-[0.8rem] text-gray-200 md:text-[1rem]"
						>
							<p class="">All News</p>
							<p class="">Hot News</p>
							<p class="">Transfer</p>
						</div>
						<i
							class="fa-solid fa-newspaper absolute left-[0%] text-blue-400 lg:text-2xl"
						>
						</i>
						<span
							class="absolute left-[6%] items-center text-[14px] font-[400] text-gray-200 md:left-[3%] md:text-lg lg:text-xl"
						>
							All News and Transfer Today</span
						>
						<i
							class="fa-solid fa-arrow-left absolute top-[10%] right-[20%] text-gray-200 sm:right-[9%] md:right-[7%] lg:text-2xl"
							@click="${() => this.scrollLeft()}"
						></i>
						<i
							class="fa-solid fa-arrow-right absolute top-[10%] right-[2%] text-gray-200 lg:text-2xl"
							@click="${() => this.scrollRight()}"
						></i>
					</div>
					<div
						class="no-scrollbar row-span-6 flex h-full w-full flex-nowrap gap-[2%] overflow-x-scroll scroll-smooth"
						id="div-s"
					>
						${this.data.map(
							(item) => html`
								<div
									class="h-full w-[48%] flex-none rounded sm:w-[35%] md:w-[35%] lg:w-[25%]"
								>
									<div
										class="mx-auto h-[60%] w-[100%]  rounded-[15px] bg-gray-900 align-middle"
									>
										<img
											class="mx-auto h-[100%] w-full rounded-[15px]"
											src="${item.largeImage}"
											alt=""
										/>
									</div>

									<div class="h-[40%] w-full text-left">
										<div
											class="mb-[5%] h-[10%] w-full  text-[0.6rem] text-yellow-500 sm:text-[0.8rem]    md:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.3rem]  "
										>
											${item.league}
										</div>
										<div
											class="h-[40%] w-full text-[0.7rem] font-semibold text-gray-200 sm:text-[0.9rem]  md:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.4rem] "
										>
											${item.title}
										</div>
										<div
											class="h-[35%] w-full text-[0.6rem] text-gray-400 sm:text-[0.8rem] md:text-[1rem] xl:text-[1rem] 2xl:text-[1.3rem] "
										>
											${item.smallbody}
										</div>
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
		this.scrollingDiv.scrollLeft += 450;
	}

	scrollLeft() {
		this.scrollingDiv.scrollLeft -= 450;
	}
}
customElements.define('newscards-s', NewsCards);
