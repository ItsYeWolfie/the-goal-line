/* eslint-disable no-underscore-dangle */
import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Banner extends LitLightElement {
	static get properties() {
		return {
			startTime: { type: Number },
			currentTime: { type: Number },
			gameTime: { type: Number },
			timer: {},
		};
	}

	constructor() {
		super();
		this.timer = '';

		this.startTime = Date.now() - 20 * 60 * 1000;
		this.currentTime = Date.now();
		this.gameTime = 0;
		this._intervalId = 0;
	}

	async connectedCallback() {
		super.connectedCallback();
		this.timer = setInterval(() => {
			const countDownDate = new Date('March 19, 2023 20:45:00').getTime();
			const now = new Date().getTime();
			// Find the distance between now and the count down date
			const distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			this.currentTime = Date.now() + 1;
			this.gameTime = this.currentTime - this.startTime;
			this.requestUpdate();

			this.timer = `${days}d : ${hours}h :  ${minutes}min : ${seconds}sec `;
		}, 1000);
	}

	render() {
		this.gameTime = (this.currentTime - this.startTime) / 1000;
		const seconds = Math.floor(this.gameTime % 60);
		const minutes = Math.floor(this.gameTime / 60);

		return html`
			<section class="m-[3%]">
				<div class="grid h-[35%] w-[100%] grid-cols-3 gap-[1%]">
					<div class="width-[100%] relative col-span-2 h-[100%]">
						<img
							class="h-[100%] w-[100%] rounded-[25px]"
							src="./images/derby3.jpg"
						/>
						<p
							class="z-1 absolute top-[5%] left-[25%] text-[0.8rem] font-bold text-gray-200 sm:left-[35%] md:left-[33%] md:text-[1rem] lg:left-[33%] lg:text-[1.3rem]"
						>
							Real Madrid vs Barcelona
						</p>
						<p
							class="z-1 absolute top-[80%] left-[5%] text-[0.6rem] font-semibold text-gray-200 sm:text-[0.7rem] md:left-[10%] md:text-[0.9rem] lg:left-[5%] lg:text-[0.9rem]"
						>
							19 March - 2023
						</p>
						<p
							class="z-1 absolute top-[90%] left-[5%] text-[0.6rem] font-bold text-gray-200 sm:text-[0.7rem] md:left-[10%] md:text-[0.9rem] lg:left-[5%] lg:text-[0.9rem]"
						>
							Santiago Bernabeu
						</p>
						<p
							class="z-1 absolute top-[90%] right-[5%] rounded-[3px] text-[0.6rem] text-gray-200 sm:text-[0.7rem] md:text-[0.7rem] lg:text-[1rem]"
							id="demo"
						>
							${this.timer}
						</p>
					</div>
					<div>
						<div
							class="relative col-span-1 h-[100%] w-[100%] rounded-[20px] bg-gray-900"
						>
							<h3
								class="pt-[10%] text-center  font-[450] text-gray-200 lg:text-xl "
							>
								Live Match
							</h3>
							<p
								class="color mt-[5%] mb-[8%] text-center text-[13px] font-medium text-lime-500 lg:text-lg"
							>
								${minutes} : ${seconds < 10 ? `0${seconds}` : seconds}
							</p>
							<img
								class="] absolute top-[33%] right-[10%] h-[10%] w-[15%] rounded-full md:right-[4%] md:top-[30%] md:h-[15%] md:w-[18%] lg:top-[30%]"
								src=" https://i.pinimg.com/564x/6b/cf/50/6bcf5098d8250e99fadaeaa1c0fb04b8.jpg"
							/>
							<img
								class="absolute top-[33%] left-[10%] h-[10%] w-[15%] rounded-full md:left-[4%] md:top-[30%] md:h-[15%] md:w-[18%] lg:top-[30%]"
								src=" https://i.pinimg.com/564x/a6/7a/f9/a67af9c593ba25a687b95e35d294dc18.jpg"
							/>
							<p
								class="mt-[10%] ml-[35%] mb-[15%] w-[30%] rounded-[15px] bg-violet-100 py-[1%] text-center text-[13px] font-semibold text-violet-800 md:w-[30%] lg:text-[15px]"
							>
								0 - 0
							</p>
							<div class="relative mt-[10%]">
								<p
									class="mb-[6%] text-center text-[12px] font-medium text-gray-200 lg:text-[14px]"
								>
									Possession
								</p>
								<p
									class="absolute top-[28%] left-[6%] text-[12px] text-blue-600 "
								>
									7
								</p>
								<p
									class="absolute top-[28%] right-[6%] text-[12px] text-orange-600"
								>
									3
								</p>
								<div class="mt-[3%] flex gap-[10%]">
									<div
										class="ml-[5%] h-1.5 w-[40%] rounded-full bg-gray-200 dark:bg-gray-300"
									>
										<div
											class="float-right h-1.5 rounded-full bg-blue-600"
											style="width: 60%"
										></div>
									</div>
									<div
										class="h-1.5 w-[40%] rounded-full bg-gray-200 dark:bg-gray-300"
									>
										<div
											class="h-1.5 rounded-full bg-orange-600"
											style="width: 45%"
										></div>
									</div>
								</div>
							</div>
							<div class="relative mt-[5%]">
								<p
									class="mb-[4%] text-center text-[12px] font-medium text-gray-200 lg:text-[14px]"
								>
									Shoot
								</p>
								<p
									class="absolute top-[28%] left-[6%] text-[12px] text-blue-600"
								>
									12
								</p>
								<p
									class="absolute top-[28%] right-[6%] text-[12px] text-orange-600"
								>
									7
								</p>
								<div class="mt-[2%] flex gap-[10%]">
									<div
										class="ml-[5%] h-1.5 w-[40%] rounded-full bg-gray-200 dark:bg-gray-300"
									>
										<div
											class="float-right h-1.5 rounded-full bg-blue-600"
											style="width: 80%"
										></div>
									</div>
									<div
										class="h-1.5 w-[40%] rounded-full bg-gray-200 dark:bg-gray-300"
									>
										<div
											class="h-1.5 rounded-full bg-orange-600"
											style="width: 60%"
										></div>
									</div>
								</div>
							</div>
							<div class="relative mt-[5%]">
								<p
									class="mb-[4%] text-center text-[12px] font-medium text-gray-200 lg:text-[14px]"
								>
									Fouls
								</p>
								<p
									class="absolute top-[28%] left-[6%] text-[12px] text-blue-600"
								>
									7
								</p>
								<p
									class="absolute top-[28%] right-[6%] text-[12px] text-orange-600"
								>
									3
								</p>
								<div class="mt-[3%] mb-[5%] flex gap-[10%]">
									<div
										class="ml-[5%] h-1.5 w-[40%] rounded-full bg-gray-200 dark:bg-gray-300"
									>
										<div
											class="float-right h-1.5 rounded-full bg-blue-600"
											style="width: 60%"
										></div>
									</div>
									<div
										class="h-1.5 w-[40%] rounded-full bg-gray-200 dark:bg-gray-300"
									>
										<div
											class="h-1.5 rounded-full bg-orange-600"
											style="width: 45%"
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		`;
	}
}

customElements.define('banner-t', Banner);
