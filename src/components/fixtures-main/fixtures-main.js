import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class FixturesMain extends LitLightElement {
	render() {
		return html`
			<section class="m-[3%]">
				<div class="w-full rounded-t-[40px] bg-gray-600">
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
								class="h-full border-b-[5px] border-yellow-500 pl-[2.5%] text-center text-[14px] text-yellow-500 md:text-[17px]"
							>
								Latest Match
							</p>
							<p
								class="h-full text-center text-[14px] text-gray-200 md:text-[17px]"
							>
								Live Matches
							</p>
							<p
								class="h-full text-center text-[14px] text-gray-200 md:text-[17px]"
							>
								Coming Matches
							</p>
						</div>
					</div>
					<div
						class="no-scrollbar mx-auto mt-[20px] h-[455px] w-[95%] overflow-y-scroll"
					>
						<div
							class="grid h-[55px] w-full items-center gap-[1%] rounded-2xl bg-slate-900 md:grid-cols-2"
						>
							<div class="col-span-1 h-full w-full">
								<div class="relative flex h-full w-full items-center">
									<img
										class="absolute left-[2%] h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[35px] md:w-[35px]"
										src="./images/33.png"
										alt=""
									/>
									<p
										class="absolute left-[15%] w-[25%] text-[15px] text-gray-200 sm:left-[12%] sm:text-[17px] md:left-[15%] md:text-[17px] lg:left-[15%] xl:left-[10%] xl:text-[17px]"
									>
										Manchester United
									</p>
									<p
										class="absolute left-[42.5%] w-[15%] rounded-[20px] bg-slate-500 py-[5px] px-[10px] text-center text-lime-400 sm:text-[18px]"
									>
										1-2
									</p>
									<p
										class="xl:rigth-[10%] absolute right-[13%] w-[25%] text-[15px] text-gray-200 sm:right-[10%] sm:text-[17px] md:right-[15%] md:text-[17px] lg:right-[10%] xl:text-[17px]"
									>
										Manchester United
									</p>
									<img
										class="absolute right-[2%] h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] md:h-[35px] md:w-[35px]"
										src="./images/33.png"
										alt=""
									/>
								</div>
							</div>

							<div class="relative col-span-1 hidden h-full w-full md:grid">
								<div class="full flex h-full items-center">
									<p
										class="ml-[10%] flex w-[20%] items-center justify-center rounded-[10px] bg-red-200 px-[10px] py-[5px] text-red-500"
									>
										FT
									</p>
									<p class="ml-[20%] w-[20%] text-gray-200">19.03.2023</p>
									<p class="absolute right-[5%]">
										<i
											class="fa-solid fa-circle-info text-[25px] text-gray-200"
										></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		`;
	}
}
customElements.define('fixture-main', FixturesMain);
