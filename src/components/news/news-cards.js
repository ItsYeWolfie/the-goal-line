/* eslint-disable prefer-destructuring */
/* eslint-disable promise/always-return */
import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class NewsCards extends LitLightElement {
	static get properties() {
		return {
			data: { type: Array },
			filteredData: { type: Array },
			category: { type: String },
			scrollingDiv: { type: Object },
			dataTofilter: { type: Array },
			activeCategory: { type: String, reflect: true },
		};
	}

	constructor() {
		super();
		this.scrollingDiv = null;
		this.data = [];
		this.filteredData = this.data;
		this.category = '';
		this.dataTofilter = [null, 'Champions', 'Transfer'];
		this.activeCategory = this.dataTofilter[0];
	}

	firstUpdated() {
		fetch('./data/news.json')
			.then((response) => response.json())
			.then((data) => {
				this.data = data;
				this.filteredData = data;
				this.requestUpdate();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	filterData(value) {
		this.activeCategory = value;
		if (value == null) this.filteredData = this.data;
		else
			this.filteredData = this.data.filter((item) => {
				return item.category === value;
			});
		this.requestUpdate();
	}

	updated() {
		this.scrollingDiv = this.shadowRoot.querySelector('#div-s');
	}

	render() {
		return html`
			<section class="m-[3%] mt-[6%]">
				<div
					class="grid-rows-10 grid h-[40vh] w-full gap-[4%] text-gray-200 sm:h-[48vh] md:h-[55vh] lg:h-[55vh] xl:h-[60vh]  "
				>
					<div
						class="relative row-span-4 h-[100%] w-full items-center border-b-4 border-gray-400 "
					>
						<div
							class="md:[w-60%] absolute bottom-[-4px] left-[0%]  flex h-[50%] w-[80%] items-start gap-[5%] text-[0.8rem] text-gray-200 md:text-[1rem]"
						>
							<p
								class="${this.activeCategory === this.dataTofilter[0]
									? 'border-b-[4px] z-10 text-violet-600  border-violet-800 h-full'
									: ''}  h-full"
								@click="${() => this.filterData(this.dataTofilter[0])}"
							>
								All News
							</p>
							<p
								class="${this.activeCategory === this.dataTofilter[1]
									? ' border-b-[4px] z-10 text-violet-600 border-violet-800 h-full'
									: ''} h-full"
								@click="${() => this.filterData(this.dataTofilter[1])}"
							>
								Transfer News
							</p>
							<p
								class="${this.activeCategory === this.dataTofilter[2]
									? 'border-b-[4px] z-10 text-violet-600 border-violet-800 h-full'
									: ''} h-full"
								@click="${() => this.filterData(this.dataTofilter[2])}"
							>
								Latest News
							</p>
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
						${this.filteredData.map(
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
