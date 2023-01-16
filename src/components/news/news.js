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
			})
			.catch((error) => {
				this.error = error.message;
				this.loading = false;
			});
	}

	render() {
		if (this.loading) {
			return html`<div>Loading...</div>`;
		}
		if (this.error) {
			return html`<div>Error: ${this.error}</div>`;
		}
		return html`
			${this.data.map(
				(item) => html`
    <section class=" mt-[10%] text-center justify-start text-gray-800">
				<div class="mb-12 flex flex-wrap justify-start">
					<div class="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12">
						<div
							class=" ripple relative mb-6 "
						>
							<img
								class="w-2/3  rounded-[10px] "
								src="${item.largeImage}"
							/>

						</div>
					</div>
					<div
						class="w-full shrink-0 grow-0 basis-auto px-3 md:w-8/12 xl:w-6/12"
					>
						<h5 class="mb-3 text-lg font-bold">
							This is a very long post title
						</h5>
						<p class="mb-4 text-gray-200">
							${item.title}
						</p>
						<p class="mb-6 text-gray-200 text-left">
						${item.body}
						</p>
						<a
							class="inline-block rounded-full bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
							href=""
							role="button"
							>Read more</a
						>
					</div>
				</div>
			</section>
		</div>
	`
			)}
		`;
	}
}

customElements.define('newspage-s', NewsPage);
