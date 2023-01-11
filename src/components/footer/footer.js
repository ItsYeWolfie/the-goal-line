import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';


class Footer extends LitLightElement {

  constructor() {
    super();
  }

  


  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
    <footer
			class="fixed bottom-0 text-medium grid h-[7vh] w-full grid-cols-5 items-center gap-[3%] border-t-2 border-gray-200 bg-gray-900 text-center text-gray-200 sm:hidden"
		>
			<div class="m-[2%] text-medium">
				<div class="hover:text-orange-500">
					<i class="fa-regular fa-futbol"></i>
					<p>Football</p>
				</div>
			</div>
			<div class="m-[2%] text-medium">
				<div class="hover:text-orange-500">
					<i class="fa-solid fa-star"></i>
					<p>Favourites</p>
				</div>
			</div>
			<div class="m-[2%] text-medium">
				<div class="hover:text-orange-500">
					<i class="fa-sharp fa-solid fa-video"></i>
					<p>Live</p>
				</div>
			</div>
			<div class="m-[2%] text-medium">
				<div class="hover:text-orange-500">
					<i class="fa-solid fa-trophy"></i>
					<p>Standings</p>
				</div>
			</div>
			<div class="m-[2%] text-medium">
				<div class=" hover:text-orange-500">
					<p class="hover:animate-spin">
						<i class="fa-solid fa-arrows-rotate"></i>
					</p>
					<p>Refresh</p>
				</div>
			</div>
		</footer>
 `

  }
}

customElements.define('footer-m',Footer);
