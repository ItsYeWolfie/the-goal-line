/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
/* eslint-disable promise/always-return */
import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class StandingsMain extends LitLightElement {
	static get properties() {
		return {
			data: { type: Array },
		};
	}

	constructor() {
		super();
		this.data = [];
		fetch('https://api.npoint.io/782a05439d88d05d9069')
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then((data) => {
				this.data = data;
				console.log(this.data);
			})
			.catch((error) => {
				this.error = error.message;
				this.loading = false;
			});
	}

	render() {
		return html`
			<section class="m-[3%]">
				<div class="  w-full">
					<div class="flex">
						<p
							class="mt-[6%] ml-[3%] w-2/3 text-[20px] font-medium text-gray-200 sm:mt-[2%] md:mt-[1%] md:ml-[1%]"
						>
							<i
								class="fa-solid fa-trophy mr-[1%] mt-[1%] rounded-full text-[20px] text-yellow-500"
							></i>
							Standings
						</p>
						<p
							class="mt-[6%]  w-1/3 justify-end text-right text-[20px] font-medium text-gray-200 sm:mt-[2%] md:mt-[1%] md:ml-[1%] "
						>
							View All <i class="fa-solid fa-angle-right"></i>
						</p>
					</div>
					<div class="mt-[2%] flex">
						<p
							class="mt-[6%] ml-[3%] flex w-full items-center gap-[0.7%] text-[20px] text-gray-200 sm:mt-[2%] md:mt-[1%] md:ml-[1%]"
						>
							<img
								class="h-[30px] w-[30px] rounded-full"
								src="./images/Flag-England.webp"
								alt=""
							/>
							<img
								class="h-[30px] w-[30px] rounded-full bg-white"
								src="./images/39.png"
								alt=""
							/>
							Premier League
						</p>
					</div>
				</div>
				<div
					class="flex  w-full cursor-all-scroll flex-col items-center  bg-gray-800"
				>
					<h1
						class="mt-[5%] text-lg font-medium text-gray-200 lg:mt-0 xl:mt-[0%]"
					>
						2020-21 Season
					</h1>
					<div class="mt-6 flex h-[390px] w-full flex-col overflow-scroll">
						<div class="">
							<div
								class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
							>
								<div
									class=" overflow-x-scroll overflow-y-scroll  shadow sm:rounded-lg"
								>
									<table class="min-w-full   text-sm text-gray-200">
										<thead class=" bg-gray-900 text-xs font-medium uppercase">
											<tr>
												<th></th>
												<th
													class="px-6 py-3 text-left text-[19px] tracking-wider"
													scope="col"
												>
													Club
												</th>
												<th
													class="px-6 py-3 text-left tracking-wider"
													scope="col"
												>
													MP
												</th>
												<th
													class="px-6 py-3 text-left tracking-wider"
													scope="col"
												>
													W
												</th>
												<th
													class="px-6 py-3 text-left tracking-wider"
													scope="col"
												>
													D
												</th>
												<th
													class="px-6 py-3 text-left tracking-wider"
													scope="col"
												>
													L
												</th>
												<th
													class="px-6 py-3 text-left tracking-wider"
													scope="col"
												>
													GF
												</th>
												<th
													class="px-6 py-3 text-left tracking-wider"
													scope="col"
												>
													GA
												</th>
												<th
													class="px-6 py-3 text-left tracking-wider"
													scope="col"
												>
													GD
												</th>
												<th
													class="px-6 py-3 text-left tracking-wider"
													scope="col"
												>
													Pts
												</th>
												<th
													class="px-6 py-3 text-left tracking-wider"
													scope="col"
												>
													Last 5
												</th>
											</tr>
										</thead>

										<tbody class="text-[18px]  text-gray-200">
											${this.data.map(
												(item) => html`<tr
													class="${item.rank > 6
														? 'bg-slate-900'
														: item.rank <= 4
														? 'bg-blue-900'
														: 'bg-red-900'} border-b-[2px] border-gray-400 bg-opacity-[0.5]"
												>
													<td class="pl-4">${item.rank}</td>
													<td class="flex whitespace-nowrap px-6 py-4">
														<img
															class="h-5 w-5"
															src="${item.team.logo}"
															alt=""
														/>
														<span class="ml-2 font-medium"
															>${item.team.name}</span
														>
													</td>
													<td class="whitespace-nowrap px-6 py-4">
														${item.all.played}
													</td>
													<td class="whitespace-nowrap px-6 py-4">
														${item.all.win}
													</td>
													<td class="whitespace-nowrap px-6 py-4">
														${item.all.draw}
													</td>
													<td class="whitespace-nowrap px-6 py-4">
														${item.all.lose}
													</td>
													<td class="whitespace-nowrap px-6 py-4">
														${item.home.goals.for + item.away.goals.for}
													</td>
													<td class="whitespace-nowrap px-6 py-4">
														${item.home.goals.against + item.away.goals.against}
													</td>
													<td class="whitespace-nowrap px-6 py-4">
														${item.goalsDiff}
													</td>
													<td class="whitespace-nowrap px-6 py-4">
														${item.points}
													</td>
													<td class="flex whitespace-nowrap px-6 py-4">
														${[...item.form].map((char) => {
															if (char === 'W') {
																return html` <svg
																	class="w-4 fill-current text-green-600"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																>
																	<path
																		fill-rule="evenodd"
																		d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																		clip-rule="evenodd"
																	/>
																</svg>`;
															}
															if (char === 'D') {
																return html` <svg
																	class="w-4 fill-current text-gray-400"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																>
																	<path
																		fill-rule="evenodd"
																		d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
																		clip-rule="evenodd"
																	/>
																</svg>`;
															}
															if (char === 'L') {
																return html`<svg
																	class="w-4 fill-current text-red-500"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																>
																	<path
																		fill-rule="evenodd"
																		d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
																		clip-rule="evenodd"
																	/>
																</svg>`;
															}
														})}
													</td>
												</tr>`
											)}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div
						class=" mt-[4%] mb-[3%] ml-[5%] flex  w-full  items-center justify-start gap-5"
					>
						<p class=" flex items-center gap-2 text-gray-200">
							<i class="fa-solid fa-circle text-blue-400  "></i>Champions League
						</p>
						<p class=" flex items-center gap-2 text-gray-200">
							<i class="fa-solid fa-circle text-red-400 "></i>Europa League
						</p>
					</div>
				</div>
			</section>
		`;
	}
}
customElements.define('standings-main', StandingsMain);
