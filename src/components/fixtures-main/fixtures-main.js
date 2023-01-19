/* eslint-disable no-constant-condition */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable promise/always-return */
import { html } from 'lit';
import moment from 'moment';
import { LitLightElement } from '../../lib/LitElement';

class FixturesMain extends LitLightElement {
	static get properties() {
		return {
			data: { type: Array },
			url: { type: Array },
			activeClass: { type: String },
		};
	}

	constructor() {
		super();
		this.data = [];
		this.activeClass =
			'border-b-[5px] h-full cursor-pointer border-yellow-400 text-yellow-400';
		this.url = [
			'https://api.npoint.io/cfdd9340ece0aa795c9e',
			'https://api.npoint.io/832db32c2f7ed1d3b542',
			'https://api.npoint.io/1ba04a17c40d1ca4244d',
		];
		this.activeHeading = 0;
		this.fetchData(this.url[0]);
	}

	fetchData(url) {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then((data) => {
				this.data = data.slice(18, 28);
			})
			.catch((error) => {
				this.error = error.message;
				this.loading = false;
			});
	}

	changeUrlandActive(index) {
		this.activeHeading = index;
		this.fetchData(this.url[index]);
	}

	toggleHidden(index) {
		console.log(index);
		this.shadowRoot
			.querySelector(`#modal-info[data-id="${index}"]`)
			.classList.toggle('hidden');
	}

	render() {
		return html`
			<section class="m-[3%]">
				<div class="w-full rounded-t-[40px] ">
					<div class="relative h-[125px] w-full border-b-[5px] border-gray-300">
						<div class="flex">
							<p
								class="mt-[6%] ml-[3%] w-full text-[20px] text-gray-200 sm:mt-[2%] md:mt-[1%] md:ml-[1%]"
							>
								<i
									class="fa-regular fa-futbol mr-[1%] mt-[1%] rounded-full text-[20px] text-yellow-500"
								></i>
								Football Matches
							</p>
						</div>

						<div
							class="absolute -bottom-[5px] flex h-[50px] w-[100%] items-start gap-[6%] md:gap-[6%]"
						>
							<p
								class=" h-full  pl-[2.5%] text-center text-[14px]  md:text-[17px]"
								class="${this.activeHeading === 0
									? this.activeClass
									: 'text-gray-200 cursor-pointer font-medium'}"
								@click="${() => this.changeUrlandActive(0)}"
							>
								Latest Match
							</p>
							<p
								class="h-full text-center text-[14px]  md:text-[17px]"
								class="${this.activeHeading === 1
									? this.activeClass
									: 'text-gray-200 cursor-pointer font-medium'}"
								@click="${() => this.changeUrlandActive(1)}"
							>
								Live Matches
							</p>
							<p
								class="h-full text-center text-[14px] md:text-[17px]"
								class="${this.activeHeading === 2
									? this.activeClass
									: 'text-gray-200 cursor-pointer font-medium'}"
								@click="${() => this.changeUrlandActive(2)}"
							>
								Coming Matches
							</p>
						</div>
					</div>
					<div
						class="no-scrollbar mx-auto mt-[10px] h-[600px] w-[95%] cursor-pointer "
					>
						${this.data.map(
							(item, index) => html`
								<div
									class="${index % 2 === 0
										? 'bg-slate-900'
										: 'bg-gray-700'} mt-[0.5%] grid h-[55px] w-full items-center gap-[1%] rounded-xl md:grid-cols-2"
								>
									<div class="col-span-1  h-full w-full">
										<div class="relative flex h-full w-full items-center">
											<div
												class="absolute top-[-195px] -right-[90%] z-[10]  hidden  h-[250px] w-[350px] rounded-[10px] bg-gray-600"
												id="modal-info"
												data-id="${item.fixture.id}"
											>
												<div class="grid h-full w-full grid-cols-2">
													<div class="h-full w-full">
														<p
															class="ml-[5%] mb-[5%] mt-[5%] w-[90%] text-center text-[18px] text-gray-200"
														>
															${item.teams.home.name}
														</p>
														<img
															class="mx-auto h-[100px] w-[100px]"
															src="${item.teams.home.logo}"
															alt=""
														/>
													</div>
													<div class="h-full w-full">
														<p
															class="relative ml-[5%] mb-[5%] mt-[5%] w-[90%] text-center text-[18px] text-gray-200 "
														>
															${item.teams.away.name}
														</p>
														<img
															class="mx-auto h-[100px] w-[100px]"
															src="${item.teams.away.logo}"
															alt=""
														/>
														<div class="relative flex w-full items-center ">
															<img
																class="absolute -left-[80px] top-[10px] h-[25px]  w-[25px]"
																src="${item.league.logo}"
																alt=""
															/>
															<p
																class="absolute -left-[50px] top-[10px] mr-[3%] text-lime-400"
															>
																${item.league.name}
															</p>
															<p
																class="absolute -left-[70px] top-[40px] text-lime-400"
															>
																${item.league.round}
															</p>
															<p
																class="absolute right-[7px] top-[80px] text-gray-200"
															>
																${item.fixture.venue.name}
															</p>
															<p
																class="absolute -left-[160px]  top-[80px] text-gray-200"
															>
																${item.fixture.venue.city}
															</p>
														</div>
													</div>
												</div>
											</div>
											<img
												class="absolute left-[2%] h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[35px] md:w-[35px]"
												src="${item.teams.home.logo}"
												alt=""
											/>
											<p
												class="absolute left-[15%] w-[25%] text-[15px] text-gray-200 sm:left-[12%] sm:text-[17px] md:left-[15%] md:text-[17px] lg:left-[15%] xl:left-[10%] xl:text-[17px]"
											>
												${item.teams.home.name}
											</p>
											<p
												class="absolute left-[42.5%] w-[15%] rounded-[20px] bg-slate-500 py-[5px] px-[10px] text-center text-lime-400 sm:text-[18px]"
											>
												${item.goals.home}-${item.goals.away}
											</p>
											<p
												class="xl:rigth-[10%] absolute right-[13%] w-[25%] text-[15px] text-gray-200 sm:right-[10%] sm:text-[17px] md:right-[15%] md:text-[17px] lg:right-[10%] xl:text-[17px]"
											>
												${item.teams.away.name}
											</p>
											<img
												class="absolute right-[2%] h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[35px] md:w-[35px]"
												src="${item.teams.away.logo}"
												alt=""
											/>
										</div>
									</div>

									<div class="relative col-span-1 hidden h-full w-full md:grid">
										<div class="full flex h-full items-center">
											<p
												class="${item.fixture.status.short === 'NS'
													? 'bg-lime-200 text-black'
													: ' bg-red-200  text-red-500'} ml-[10%] flex w-[20%] items-center justify-center rounded-[10px] bg-red-200 px-[10px] py-[5px]
                        text-red-500"
											>
												${item.fixture.status.short}
											</p>
											<p class="ml-[20%] w-[20%] text-yellow-400">
												Time: ${moment(item.fixture.date).format('HH:MM')}
											</p>
											<p class="absolute right-[5%]">
												<i
													class="fa-solid fa-circle-info text-[25px] text-yellow-400"
													@mouseover="${() =>
														item.fixture.id &&
														this.toggleHidden(item.fixture.id)}"
													@mouseleave="${() =>
														item.fixture.id &&
														this.toggleHidden(item.fixture.id)}"
												></i>
											</p>
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
}
customElements.define('fixture-main', FixturesMain);
