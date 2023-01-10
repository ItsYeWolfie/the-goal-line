import { html } from 'lit-html';
import { LitLightElement } from '../../lib/LitElement';

export class BreadCrumb extends LitLightElement {
	properties = {
		breadcrumb: [],
	};

	render() {
		return html`
			<nav class="mb-4 flex">
				<ol class="flex items-center space-x-4">
					<li>
						<a class="text-gray-200 hover:text-gray-100" href="/index.html">
							<svg
								class="h-5 w-5 flex-shrink-0"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="sr-only">Home</span>
						</a>
					</li>
					${this.breadcrumb.map((item) => {
						return html` <li class="flex items-center">
							<svg
								class="h-5 w-5 flex-shrink-0 text-gray-300"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clip-rule="evenodd"
								/>
							</svg>
							<a
								class="ml-4 text-sm font-medium text-gray-300 hover:text-gray-200"
								href="${item.href}"
								>${item.name}</a
							>
						</li>`;
					})}
				</ol>
			</nav>
		`;
	}
}

customElements.define('nav-breadcrumb', BreadCrumb);

export default BreadCrumb;
