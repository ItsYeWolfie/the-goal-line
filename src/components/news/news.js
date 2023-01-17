/* eslint-disable promise/always-return */
import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class NewsPage extends LitLightElement {
	static get properties() {
		return {
			data: { type: Array },
			error: { type: String },
			loading: { type: Boolean },
		};
	}

	constructor() {
		super();

		this.data = [];
		this.error = null;
		this.loading = true;
		this.activeClass = 'All News';
		fetch('../../data/news.json')
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then((data) => {
				this.data = data;
				this.loading = false;
				this.newsItem = this.data.find((item) => item.title === this.slug);
			})
			.catch((error) => {
				this.error = error.message;
				this.loading = false;
			});

		const params = new URLSearchParams(window.location.search);
		this.slug = params.get('slug');
		this.newsItem = this.data.find((item) => item.title === this.slug);
	}

	ChangeActive(className) {
		this.activeClass = className;
		this.requestUpdate();
	}

	changeNews(title) {
		this.slug = title;
		this.newsItem = this.data.find((item) => item.title === this.slug);
		this.requestUpdate();
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
				<div class="relative h-[50px] w-full md:h-[70px]">
					<div
						class="absolute left-[0%] bottom-[20%] flex h-[80%] w-[90%] items-end gap-[3%]"
					>
						<p
							class="${this.activeClass === 'All News'
								? 'text-yellow-400 border-[1px] border-white  '
								: ' text-white'} rounded-lg  px-[2%] py-[0.5%] text-[0.9rem]  sm:text-[1rem] lg:text-[1rem] 2xl:text-[1.3rem]"
							@click="${() => this.ChangeActive('All News')}"
						>
							All News
						</p>
						<p
							class="${this.activeClass === 'Transfer News'
								? 'text-yellow-400 border-[1px] border-white  '
								: ' text-white'} rounded-lg  px-[2%] py-[0.5%] text-[0.9rem]  sm:text-[1rem] lg:text-[1rem] 2xl:text-[1.3rem]"
							@click="${() => this.ChangeActive('Transfer News')}"
						>
							Transfer News
						</p>
						<p
							class="${this.activeClass === 'Hot News'
								? 'text-yellow-400 border-[1px] border-white  '
								: ' text-white'} rounded-lg  px-[2%] py-[0.5%] text-[0.9rem]  sm:text-[1rem] lg:text-[1rem] 2xl:text-[1.3rem]"
							@click="${() => this.ChangeActive('Hot News')}"
						>
							Hot News
						</p>
					</div>
				</div>
				<div class="h-auto w-full gap-[1%] md:grid md:grid-cols-5">
					<div class="w-full md:col-span-3">
						<div class="rounded-[10px] border-[1px] border-gray-400">
							<div
								class="mx-auto mt-[5%] w-[90%] text-[1.2rem] font-bold text-white sm:text-[1.5rem]  md:text-[1.5rem] lg:text-[1.6rem] 2xl:text-[2.3rem]"
							>
								${this.newsItem.title}
							</div>
							<div class="mt-[3%] flex w-full items-center space-x-4">
								<img
									class="2xl:w-15 2xl:h-15 h-11 w-11 rounded-full"
									src="../../images/news-user.png"
									alt=""
								/>
								<div
									class="text-[0.8rem] font-medium text-gray-200 2xl:text-[1.5rem]"
								>
									<div>Jese Leos</div>
									<div
										class="text-sm text-[0.8rem] text-gray-200 2xl:text-[1.5rem]"
									>
										Joined in August 2023
									</div>
								</div>
							</div>
							<div
								class="mt-[1%] h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px] 2xl:h-[500px]"
							>
								<img
									class="mx-auto h-full w-full"
									src="${this.newsItem.largeImage}"
									alt=""
								/>
							</div>
							<div
								class="mt-[1%] w-[100%] text-right text-[0.8rem] text-gray-300 sm:text-[1.2rem]"
							>
								23.09.2023
							</div>

							<div
								class="mx-auto mt-[5%] w-[95%] break-words text-gray-300 sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.8rem]"
							>
								${this.newsItem.body}
							</div>

							<div class="mt-[3%] h-[300px] w-full 2xl:h-[450px]">
								<img
									class="h-full w-full animate-pulse bg-white opacity-[0.8]"
									src="../../images/gjirafa.png"
									alt=""
								/>
							</div>
							<div
								class="mx-auto mt-[5%] w-[95%] break-words text-gray-300 sm:text-[1.2rem] lg:text-[1.1rem] 2xl:text-[1.8rem]"
							>
								${this.newsItem.body}
							</div>
						</div>
					</div>
					<div class="w-full md:col-span-2">
						<div
							class="mb-[5%] mt-[5%] h-[150px] w-full text-white sm:mt-[5%] sm:h-[240px] md:mt-[0%] md:h-[200px] 2xl:h-[300px]"
						>
							<img
								class="mx-auto h-full w-[90%] animate-pulse rounded-[10px] opacity-[0.9]"
								src="../../images/gjirafamall.jpeg"
								alt=""
							/>
						</div>
						<div class="rounded-[10px] border-[1px] border-gray-400">
							<div
								class="w-full border-b-[1px] border-gray-400 text-lg text-white"
							>
								<p class="py-[2%] pl-[4%] text-[1rem] sm:text-[1.4rem]">
									Related News
								</p>
							</div>
							${this.data.map(
								(item) => html`
									<div
										class="grid h-[155px] grid-cols-2 border-b-[1px] border-gray-400 sm:h-[200px] md:h-[180px] lg:h-[160px] xl:h-[170px] 2xl:h-[220px]"
									>
										<div class="h-full w-full">
											<img
												class="my-[5%] mx-auto h-[80%] w-[85%] rounded-[10px]"
												src="${item.largeImage}"
												alt=""
											/>
										</div>
										<div
											class="my-auto h-[90%] w-[90%] justify-between text-lg text-white sm:text-[1.5rem] md:text-[1rem]  lg:text-[1.2rem] 2xl:text-[1.5rem]"
										>
											<p>${item.title}</p>
											<button
												class="mt-[5%] rounded-[5px] bg-gray-600 px-[5%] sm:mt-[18%] md:mt-[1%] lg:mt-[5%] xl:mt-[12%] 2xl:mt-[5%] 2xl:text-[1.3rem]"
												@click="${() => this.changeNews(item.title)}"
											>
												Read More
											</button>
										</div>
									</div>
								`
							)}
						</div>
					</div>
				</div>
			</section>
		`;
	}
}

customElements.define('newspage-s', NewsPage);
