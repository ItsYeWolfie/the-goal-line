import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Footer extends LitLightElement {
	// eslint-disable-next-line no-useless-constructor
	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();
	}

	render() {
		return html`
			<footer
				class="text-medium fixed bottom-0 grid h-[7vh] w-full grid-cols-5 items-center gap-[3%] border-t-2 border-gray-200 bg-gray-900 text-center text-gray-200 sm:hidden"
			>
				<div class="text-medium m-[2%]">
					<div class="hover:text-orange-500">
						<i class="fa-regular fa-futbol"></i>
						<p>Football</p>
					</div>
				</div>
				<div class="text-medium m-[2%]">
					<div class="hover:text-orange-500">
						<i class="fa-solid fa-star"></i>
						<p>Favourites</p>
					</div>
				</div>
				<div class="text-medium m-[2%]">
					<div class="hover:text-orange-500">
						<i class="fa-sharp fa-solid fa-video"></i>
						<p>Live</p>
					</div>
				</div>
				<div class="text-medium m-[2%]">
					<div class="hover:text-orange-500">
						<i class="fa-solid fa-trophy"></i>
						<p>Standings</p>
					</div>
				</div>
				<div class="text-medium m-[2%]">
					<div class=" hover:text-orange-500">
						<p class="hover:animate-spin">
							<i class="fa-solid fa-arrows-rotate"></i>
						</p>
						<p>Refresh</p>
					</div>
				</div>
			</footer>
		`;
	}
}

customElements.define('footer-m', Footer);
